"use client";

import React from "react";
import Image from "next/image";
import { DirectusContactInfo } from "@/lib/directus/contact";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import styles from "./ContactSection.module.css";

interface ContactSectionProps {
  initialContact?: DirectusContactInfo;
}

export default function ContactSection({ initialContact }: ContactSectionProps) {
  return (
    <section className={styles.outerSection} aria-label="قسم تواصل معنا">
      {/* Rectangle background image at bottom */}
      <div className={styles.rectangleWrapper} aria-hidden="true">
        <Image
          src="/images/Rectangle 29939.png"
          alt=""
          fill
          className={styles.rectangleImg}
          priority
        />
      </div>

      <div className={styles.container}>
        {/* Contact Information (Right side in RTL) */}
        <div className={styles.infoColumn}>
          <ContactInfo contact={initialContact} />
        </div>

        {/* Contact Form (Left side in RTL) */}
        <div className={styles.formColumn}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
