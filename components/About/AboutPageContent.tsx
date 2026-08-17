import React from "react";
import { AboutResult } from "@/lib/directus/about";
import { DirectusMemberItem } from "@/lib/directus/members";
import AboutSection from "./AboutSection";
import VisionGoalsSection from "./VisionGoalsSection";
import MembersSection from "@/components/Members/MembersSection";
import ContactSection from "@/components/Contact/ContactSection";
import styles from "./AboutPageContent.module.css";

interface AboutPageContentProps {
  aboutResult: AboutResult;
  initialMembers?: DirectusMemberItem[];
}

export default function AboutPageContent({ aboutResult, initialMembers }: AboutPageContentProps) {
  if (!aboutResult.ok) {
    return (
      <div className={styles.errorState}>
        <span className={styles.errorIcon}>⚠️</span>
        <h2 className={styles.errorTitle}>تعذّر تحميل البيانات</h2>
        <p className={styles.errorText}>
          تعذّر الاتصال بقاعدة البيانات. يرجى التحقق من تشغيل الخادم والمحاولة لاحقاً.
        </p>
        {aboutResult.error && (
          <code
            style={{
              marginTop: "1rem",
              padding: "0.5rem 0.75rem",
              background: "#fee2e2",
              color: "#991b1b",
              borderRadius: "6px",
              fontSize: "0.85rem",
              direction: "ltr",
              display: "inline-block",
              wordBreak: "break-all",
            }}
          >
            Details: {aboutResult.error}
          </code>
        )}
      </div>
    );
  }

  return (
    <div className={styles.pageWrapper}>
      {/* Section 1: عن النقابة */}
      <AboutSection data={aboutResult.data} />

      {/* Section 2 & 3: رؤية النقابة وأهداف النقابة */}
      <VisionGoalsSection data={aboutResult.data} />

      {/* Section 4: أعضاء النقابة */}
      <MembersSection initialMembers={initialMembers} />

      {/* Section 5: تواصل معنا */}
      <ContactSection />
    </div>
  );
}



