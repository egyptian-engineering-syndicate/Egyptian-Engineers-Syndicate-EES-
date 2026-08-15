"use client";

import React from "react";
import styles from "./NewsSearch.module.css";

interface NewsSearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function NewsSearch({
  value,
  onChange,
  placeholder = "أبحث عن خبر...",
}: NewsSearchProps) {
  return (
    <div className={styles.searchContainer}>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          className={styles.searchInput}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          aria-label="البحث في الأخبار"
        />
        <svg
          className={styles.searchIcon}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </div>

      {value && (
        <button
          type="button"
          className={styles.clearButton}
          onClick={() => onChange("")}
          aria-label="مسح البحث"
        >
          <svg className={styles.clearIcon} viewBox="0 0 24 24">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </div>
  );
}
