"use client";

import React, { useState, useEffect, useRef, TouchEvent } from "react";
import { DirectusMemberItem } from "@/lib/directus/members";
import MemberCard from "./MemberCard";
import styles from "./MembersSection.module.css";

interface MembersSectionProps {
  initialMembers?: DirectusMemberItem[];
}

export default function MembersSection({ initialMembers }: MembersSectionProps) {
  const members = initialMembers || [];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(4);

  const carouselRef = useRef<HTMLDivElement>(null);

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

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

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

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  const getTransform = () => {
    const stepPercent = 100 / visibleCount;
    return `translateX(${currentIndex * stepPercent}%)`;
  };

  return (
    <section className={styles.section} aria-label="أعضاء النقابة">
      <div className={styles.greenShapeLeft} aria-hidden="true" />
      <div className={styles.greenShapeRight} aria-hidden="true" />

      <div className={styles.container}>
        <h2 className={styles.title}>أعضاء النقابة</h2>

        {members.length === 0 ? (
          <div className={styles.stateContainer}>
            <p>لا يوجد أعضاء نقابة متاحة حالياً.</p>
          </div>
        ) : (
          <>
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

            {members.length > visibleCount && (
              <div className={styles.controlsWrapper}>
                <div className={styles.controlsBar}>
                  <button
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    aria-label="السابق"
                    className={styles.arrowButton}
                    type="button"
                  >
                    ←
                  </button>

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
