import React from "react";
import { AboutResult } from "@/lib/directus/about";
import { DirectusContactInfo } from "@/lib/directus/contact";
import { DirectusMemberItem } from "@/lib/directus/members";
import AboutSection from "./AboutSection";
import VisionGoalsSection from "./VisionGoalsSection";
import MembersSection from "@/components/Members/MembersSection";
import ContactSection from "@/components/Contact/ContactSection";
import styles from "./AboutPageContent.module.css";

interface AboutPageContentProps {
  aboutResult: AboutResult;
  initialMembers?: DirectusMemberItem[];
  initialContact?: DirectusContactInfo;
}

export default function AboutPageContent({ aboutResult, initialMembers, initialContact }: AboutPageContentProps) {
  if (!aboutResult.ok) {
    return null;
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
      <ContactSection initialContact={initialContact} />
    </div>
  );
}



