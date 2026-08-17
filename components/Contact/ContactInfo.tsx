import React from "react";
import { DirectusContactInfo } from "@/lib/directus/contact";
import styles from "./ContactInfo.module.css";

interface ContactInfoProps {
  contact?: DirectusContactInfo;
}

export default function ContactInfo({ contact }: ContactInfoProps) {
  if (!contact) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      {/* Top Translucent Green Speech Icon */}
      <div className={styles.topIconBox} aria-hidden="true">
        <svg
          className={styles.iconSvg}
          viewBox="0 0 24 24"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </div>

      {/* Section Title */}
      <h2 className={styles.title}>معلومات التواصل</h2>

      {/* Static Description */}
      <p className={styles.description}>
        هل لديك فكرة تُحدث فرقًا؟ رأي يُحدث تأثيرًا؟ طلب خاص؟ أينما كنت، تواصل معنا واحصل على خدمات مميزة.
      </p>

      {/* Contact Cards */}
      <div className={styles.cardsList}>
        {/* Address Card */}
        <div className={styles.card}>
          <div className={styles.cardIconBox} aria-hidden="true">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <div className={styles.cardContent}>
            <span className={styles.cardLabel}>العنوان</span>
            <span className={`${styles.cardValue} ${styles.cardValueRtl}`}>
              {contact.address}
            </span>
          </div>
        </div>

        {/* Phone Card */}
        <div className={styles.card}>
          <div className={styles.cardIconBox} aria-hidden="true">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
          <div className={styles.cardContent}>
            <span className={styles.cardLabel}>رقم الهاتف</span>
            <span className={styles.cardValue}>{contact.phone}</span>
          </div>
        </div>

        {/* Email Card */}
        <div className={styles.card}>
          <div className={styles.cardIconBox} aria-hidden="true">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>
          <div className={styles.cardContent}>
            <span className={styles.cardLabel}>البريد الإلكتروني</span>
            <span className={styles.cardValue}>{contact.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
