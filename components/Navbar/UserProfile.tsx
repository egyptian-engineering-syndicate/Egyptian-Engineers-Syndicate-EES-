"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./UserProfile.module.css";

export default function UserProfile() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`${styles.profileWrapper} ${isOpen ? styles.profileWrapperActive : ""}`}
      ref={containerRef}
      onClick={toggleDropdown}
      aria-haspopup="true"
      aria-expanded={isOpen}
      aria-label="قائمة حساب المستخدم"
    >
      {/* Avatar Box on the right (RTL first) */}
      <div className={styles.avatarBox}>
        <svg
          className={styles.avatarIcon}
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      </div>

      {/* Text Section to the left of Avatar */}
      <div className={styles.textSection}>
        <span className={styles.welcomeText}>مرحباً 👋</span>
        <span className={styles.userName}>م. محمد عمرو</span>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className={styles.dropdownMenu} role="menu" onClick={(e) => e.stopPropagation()}>
          <a href="/profile" className={styles.dropdownItem} role="menuitem">
            <svg
              className={styles.icon}
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            الملف الشخصي
          </a>
          
          <a href="/services/digital" className={styles.dropdownItem} role="menuitem">
            <svg
              className={styles.icon}
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
            الخدمات الإلكترونية
          </a>

          <a href="/settings" className={styles.dropdownItem} role="menuitem">
            <svg
              className={styles.icon}
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
            إعدادات الحساب
          </a>

          <div className={styles.dropdownDivider} />

          <button
            onClick={() => console.log("Logout triggered")}
            className={`${styles.dropdownItem} styles.logoutItem`}
            role="menuitem"
            type="button"
          >
            <svg
              className={`${styles.icon} ${styles.logoutItem}`}
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            تسجيل الخروج
          </button>
        </div>
      )}
    </div>
  );
}
