"use client";

import React, { useState, FormEvent } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("يرجى ملء جميع الحقول المطلوبة (الاسم، البريد الإلكتروني، الرسالة).");
      return;
    }

    setSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        inquiryType: "",
        message: "",
      });
    }, 800);
  };

  return (
    <div className={styles.formCard}>
      <div className={styles.formHeader}>
        <h2 className={styles.title}>تواصل معنا</h2>
        <p className={styles.subtitle}>
          هل لديك فكرة تُحدث فرقًا؟ رأي يُحدث تأثيرًا؟ طلب خاص؟ أينما كنت، تواصل معنا واحصل على خدمات مميزة.
        </p>
      </div>

      {submitted ? (
        <div className={styles.successMessage}>
          ✓ تم إرسال رسالتك بنجاح! سنقوم بالتواصل معك في أقرب وقت.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form} noValidate>
          {errorMessage && (
            <div className="p-3 bg-red-50 text-red-700 text-sm rounded-md mb-2">
              {errorMessage}
            </div>
          )}

          {/* 1. Name Input */}
          <div className={styles.fieldGroup}>
            <label htmlFor="name" className={styles.label}>
              الاسم
            </label>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="أضف اسمك"
                className={styles.input}
                required
              />
              <svg
                className={styles.inputIcon}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
          </div>

          {/* 2. Email Input */}
          <div className={styles.fieldGroup}>
            <label htmlFor="email" className={styles.label}>
              البريد الإلكتروني
            </label>
            <div className={styles.inputWrapper}>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="أضف بريدك الإلكتروني"
                className={styles.input}
                required
              />
              <svg
                className={styles.inputIcon}
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
          </div>

          {/* 3. Phone Input */}
          <div className={styles.fieldGroup}>
            <label htmlFor="phone" className={styles.label}>
              رقم الهاتف
            </label>
            <div className={styles.inputWrapper}>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="أضف رقم هاتفك"
                className={styles.input}
              />
              <svg
                className={styles.inputIcon}
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
          </div>

          {/* 4. Inquiry Type Dropdown */}
          <div className={styles.fieldGroup}>
            <label htmlFor="inquiryType" className={styles.label}>
              نوع الاستفسار
            </label>
            <div className={styles.inputWrapper}>
              <select
                id="inquiryType"
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                className={`${styles.input} ${styles.select}`}
              >
                <option value="">-- اختر نوع الاستفسار --</option>
                <option value="general">استفسار عام</option>
                <option value="membership">شؤون العضوية والاشتراكات</option>
                <option value="services">الخدمات النقابية والتدريب</option>
                <option value="complaint">شكوى أو اقتراح</option>
              </select>

              {/* Document Icon on left */}
              <svg
                className={styles.inputIcon}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>

              {/* Down Chevron Arrow on right */}
              <svg
                className={styles.selectChevron}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>

          {/* 5. Message Textarea */}
          <div className={styles.fieldGroup}>
            <label htmlFor="message" className={styles.label}>
              الرسالة
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="أضف رسالتك"
                className={styles.textarea}
                required
              />
              <svg
                className={styles.inputIcon}
                style={{ top: "18px" }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
          </div>

          {/* Submit Button */}
          <div className={styles.buttonWrapper}>
            <button
              type="submit"
              disabled={submitting}
              className={styles.submitBtn}
            >
              {submitting ? "جاري الإرسال..." : "إرسال"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
