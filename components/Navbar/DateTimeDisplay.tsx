"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

export default function DateTimeDisplay() {
  const [mounted, setMounted] = useState(false);
  const [dateTime, setDateTime] = useState({ date: "", time: "" });

  useEffect(() => {
    setMounted(true);
    
    const updateDateTime = () => {
      const now = new Date();
      
      // Format: 24 أغسطس 2026 (Latin numerals in Arabic locale)
      const dateStr = now.toLocaleDateString("ar-EG-u-nu-latn", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });

      // Format: 12:30 مساءً (Latin numerals, Arabic indicator)
      const timeStr = now.toLocaleTimeString("ar-EG-u-nu-latn", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      // Optional: Add "من" to the month name if not present
      // Example: "24 من أغسطس 2026"
      let formattedDate = dateStr;
      if (dateStr && !dateStr.includes(" من ")) {
        const parts = dateStr.split(" ");
        if (parts.length === 3) {
          formattedDate = `${parts[0]} من ${parts[1]} ${parts[2]}`;
        }
      }

      setDateTime({
        date: formattedDate,
        time: timeStr,
      });
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    // Return static design fallback during SSR to avoid layout shift
    return (
      <div className={styles.dateTimeSection}>
        <div className={styles.dateTimeItem}>
          <svg className={styles.icon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span>24 من أغسطس 2026</span>
        </div>
        <div className={styles.dateTimeItem}>
          <svg className={styles.icon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span>12:30 مساءً</span>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.dateTimeSection}>
      {/* Date Display */}
      <div className={styles.dateTimeItem}>
        <svg
          className={styles.icon}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        <span>{dateTime.date}</span>
      </div>

      {/* Time Display */}
      <div className={styles.dateTimeItem}>
        <svg
          className={styles.icon}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
        <span>{dateTime.time}</span>
      </div>
    </div>
  );
}
