"use client";

import React, { useState, useEffect, useRef, TouchEvent, MouseEvent } from "react";
import { DirectusMemberItem, getMembersData } from "@/lib/directus/members";
import MemberCard from "./MemberCard";
import styles from "./MembersSection.module.css";

interface MembersSectionProps {
  initialMembers?: DirectusMemberItem[];
}

export default function MembersSection({ initialMembers }: MembersSectionProps) {
  const [members, setMembers] = useState<DirectusMemberItem[]>(initialMembers || []);
  const [loading, setLoading] = useState<boolean>(!initialMembers || initialMembers.length === 0);
  const [error, setError] = useState<string | null>(null);

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(4);

  const carouselRef = useRef<HTMLDivElement>(null);

  // Fetch from Directus if no initial members passed
  useEffect(() => {
    if (initialMembers && initialMembers.length > 0) {
      setMembers(initialMembers);
      setLoading(false);
      return;
    }

    let isMounted = true;
    async function fetchMembers() {
      setLoading(true);
      const res = await getMembersData();
      if (!isMounted) return;

      if (res.ok) {
        setMembers(res.data);
      } else {
        setError(res.error);
      }
      setLoading(false);
    }

    fetchMembers();
    return () => {
      isMounted = false;
    };
  }, [initialMembers]);

  // Handle responsive visible card count
  useEffect(() => {
    function updateVisibleCount() {
      const w = window.innerWidth;
      if (w >= 1440) {
        setVisibleCount(4);
      } else if (w >= 1024) {
        setVisibleCount(3);
      } else if (w >= 640) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    }

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const maxIndex = Math.max(0, members.length - visibleCount);

  // Next / Prev actions (RTL logic)
  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  // Touch Swipe Handlers for mobile & tablet
  const minSwipeDistance = 50;

  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    // In RTL, swiping left moves to next index, swiping right moves to prev index
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  // Calculate slide offset percentage or pixels
  // Card width + gap
  const getTransform = () => {
    // In CSS module: gap is 28px on desktop, 20px on tablet
    // Each item takes 100% / visibleCount minus gap proportion, or fixed step
    const stepPercent = 100 / visibleCount;
    // Positive transform in RTL moves track leftwards revealing next cards
    return `translateX(${currentIndex * stepPercent}%)`;
  };

  return (
    <section className={styles.section} aria-label="أعضاء النقابة">
      {/* Decorative Green Rectangles */}
      <div className={styles.greenShapeLeft} aria-hidden="true" />
      <div className={styles.greenShapeRight} aria-hidden="true" />

      <div className={styles.container}>
        <h2 className={styles.title}>أعضاء النقابة</h2>

        {loading ? (
          <div className={styles.stateContainer}>
            <div className={styles.spinner} />
            <p>جاري تحميل أعضاء النقابة...</p>
          </div>
        ) : error && members.length === 0 ? (
          <div className={styles.stateContainer}>
            <p className="text-red-500 font-medium">تعذّر تحميل قائمة أعضاء النقابة.</p>
          </div>
        ) : members.length === 0 ? (
          <div className={styles.stateContainer}>
            <p>لا يوجد أعضاء نقابة متاحة حالياً.</p>
          </div>
        ) : (
          <>
            {/* Carousel Viewport */}
            <div
              className={styles.carouselViewport}
              ref={carouselRef}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <div
                className={styles.carouselTrack}
                style={{ transform: getTransform() }}
              >
                {members.map((member) => (
                  <div
                    key={member.id}
                    style={{
                      flex: `0 0 calc(${100 / visibleCount}% - ${
                        ((visibleCount - 1) * 28) / visibleCount
                      }px)`,
                      maxWidth: `calc(${100 / visibleCount}% - ${
                        ((visibleCount - 1) * 28) / visibleCount
                      }px)`,
                    }}
                    className="flex justify-center"
                  >
                    <MemberCard member={member} />
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Navigation Controls */}
            {members.length > visibleCount && (
              <div className={styles.controlsWrapper}>
                <div className={styles.controlsBar}>
                  {/* Previous Arrow (Right side arrow in RTL) */}
                  <button
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    aria-label="السابق"
                    className={styles.arrowButton}
                    type="button"
                  >
                    ←
                  </button>

                  {/* Pagination Dots */}
                  <div className={styles.dotsWrapper}>
                    {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`${styles.dot} ${
                          currentIndex === idx ? styles.dotActive : ""
                        }`}
                        aria-label={`الشريحة ${idx + 1}`}
                        type="button"
                      />
                    ))}
                  </div>

                  {/* Next Arrow (Left side arrow in RTL) */}
                  <button
                    onClick={handleNext}
                    disabled={currentIndex >= maxIndex}
                    aria-label="التالي"
                    className={styles.arrowButton}
                    type="button"
                  >
                    →
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
