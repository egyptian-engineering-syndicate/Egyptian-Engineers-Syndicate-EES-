"use client";

import { useState, useEffect } from "react";
import styles from "./AccessibilityToolbar.module.css";

export default function AccessibilityToolbar() {
  const [scale, setScale] = useState<number>(1.0);
  const [highContrast, setHighContrast] = useState<boolean>(false);

  // Initialize from document attributes on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedScale = localStorage.getItem("accessibility-font-scale");
      const savedContrast = localStorage.getItem("accessibility-high-contrast");

      if (savedScale) {
        const parsedScale = parseFloat(savedScale);
        setScale(parsedScale);
        document.documentElement.style.fontSize = `${parsedScale * 100}%`;
      }
      
      if (savedContrast === "true") {
        setHighContrast(true);
        document.documentElement.setAttribute("data-theme", "high-contrast");
      }
    }
  }, []);

  const handleZoomIn = () => {
    setScale((prev) => {
      const next = Math.min(prev + 0.1, 1.3);
      if (typeof window !== "undefined") {
        document.documentElement.style.fontSize = `${next * 100}%`;
        localStorage.setItem("accessibility-font-scale", next.toString());
      }
      return next;
    });
  };

  const handleZoomOut = () => {
    setScale((prev) => {
      const next = Math.max(prev - 0.1, 0.8);
      if (typeof window !== "undefined") {
        document.documentElement.style.fontSize = `${next * 100}%`;
        localStorage.setItem("accessibility-font-scale", next.toString());
      }
      return next;
    });
  };

  const toggleContrast = () => {
    setHighContrast((prev) => {
      const next = !prev;
      if (typeof window !== "undefined") {
        if (next) {
          document.documentElement.setAttribute("data-theme", "high-contrast");
          localStorage.setItem("accessibility-high-contrast", "true");
        } else {
          document.documentElement.removeAttribute("data-theme");
          localStorage.setItem("accessibility-high-contrast", "false");
        }
      }
      return next;
    });
  };

  return (
    <div className={styles.toolbar} role="toolbar" aria-label="أدوات سهولة الوصول">
      {/* Zoom In (A+) */}
      <button
        onClick={handleZoomIn}
        className={styles.button}
        title="تكبير الخط"
        aria-label="تكبير الخط"
        type="button"
      >
        <svg
          className={styles.icon}
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
          <line x1="11" y1="8" x2="11" y2="14" />
          <line x1="8" y1="11" x2="14" y2="11" />
        </svg>
      </button>

      {/* Zoom Out (A-) */}
      <button
        onClick={handleZoomOut}
        className={styles.button}
        title="تصغير الخط"
        aria-label="تصغير الخط"
        type="button"
      >
        <svg
          className={styles.icon}
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
          <line x1="8" y1="11" x2="14" y2="11" />
        </svg>
      </button>

      {/* High Contrast Mode (Eye) */}
      <button
        onClick={toggleContrast}
        className={`${styles.button} ${highContrast ? styles.buttonActive : ""}`}
        title="تغيير تباين الألوان"
        aria-label="تغيير تباين الألوان"
        aria-pressed={highContrast}
        type="button"
      >
        <svg
          className={styles.icon}
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      </button>
    </div>
  );
}
