"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { DirectusEventItem, getDirectusImageUrl } from "@/lib/directus/events";
import styles from "./FeaturedEventsSwiper.module.css";

interface FeaturedEventsSwiperProps {
  events: DirectusEventItem[];
}

function formatDate(dateStr?: string): string {
  if (!dateStr) return "24 من أغسطس 2026";
  try {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return dateStr;
    return date.toLocaleDateString("ar-EG", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export default function FeaturedEventsSwiper({
  events,
}: FeaturedEventsSwiperProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto slide every 6 seconds if multiple events exist
  useEffect(() => {
    if (!events || events.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % events.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [events]);

  if (!events || events.length === 0) return null;

  const activeEvent = events[activeIndex] || events[0];
  const imageUrl = getDirectusImageUrl(activeEvent.image);
  const formattedDate = formatDate(activeEvent.date || activeEvent.created_on);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % events.length);
  };

  return (
    <section className={styles.sectionWrapper} aria-label="الفعالية البارزة">
      <div className={`${styles.swiperCard} ${styles.slideFade}`} key={activeEvent.id}>
        {/* Top Left Solid Green Accent Bar */}
        <div className={styles.topGreenStripe} aria-hidden="true" />

        {/* Content Container on the Right (RTL 1st Child = Right Side) */}
        <div className={styles.contentContainer}>
          <span className={styles.badge}>آخر الفعاليات</span>
          <h2 className={styles.title}>{activeEvent.title}</h2>

          <div className={styles.metaRow}>
            <svg className={styles.calendarIcon} viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span>{formattedDate}</span>
          </div>

          <p className={styles.description}>{activeEvent.description}</p>

          <div className={styles.footerControls}>
            {/* Navigates to event details (RTL Right side of footer) */}
            <Link href={`/events/${activeEvent.id}`} className={styles.detailsBtn}>
              شاهد التفاصيل
            </Link>

            {/* Carousel Controls on the Left side of footer */}
            {events.length > 1 && (
              <div className={styles.controlsWrapper}>
                <button
                  type="button"
                  onClick={handlePrev}
                  className={styles.arrowBtn}
                  aria-label="الفعالية السابقة"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>

                <div className={styles.dotsWrapper}>
                  {events.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      className={`${styles.dot} ${
                        idx === activeIndex ? styles.activeDot : ""
                      }`}
                      aria-label={`انتقل إلى الفعالية رقم ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleNext}
                  className={styles.arrowBtn}
                  aria-label="الفعالية التالية"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Featured Image Container on the Left (RTL 2nd Child = Left Side) */}
        <div className={styles.imageContainer}>
          <Image
            src={imageUrl}
            alt={activeEvent.title || "صورة الفعالية"}
            fill
            sizes="(max-width: 900px) 100vw, 777px"
            priority
            className={styles.featuredImage}
            unoptimized={imageUrl.startsWith("http://localhost")}
          />
        </div>
      </div>
    </section>
  );
}
