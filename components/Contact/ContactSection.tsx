"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { DirectusContactInfo, getContactInfo } from "@/lib/directus/contact";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import styles from "./ContactSection.module.css";

interface ContactSectionProps {
  initialContact?: DirectusContactInfo;
}

export default function ContactSection({ initialContact }: ContactSectionProps) {
  const [contact, setContact] = useState<DirectusContactInfo | null>(
    initialContact || null
  );
  const [loading, setLoading] = useState<boolean>(!initialContact);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (initialContact) {
      setContact(initialContact);
      setLoading(false);
      return;
    }

    let isMounted = true;
    async function fetchContact() {
      setLoading(true);
      const res = await getContactInfo();
      if (!isMounted) return;

      if (res.ok) {
        setContact(res.data);
      } else {
        setError(res.error);
        // Fallback object to ensure UI renders nicely if Directus is loading/offline
        setContact({
          address: "شارع رمسيس, القاهرة , جمهورية مصر العربية",
          phone: "+20 2 1234 5678",
          email: "info@eng-syndicate.eg",
        });
      }
      setLoading(false);
    }

    fetchContact();
    return () => {
      isMounted = false;
    };
  }, [initialContact]);

  const defaultContact: DirectusContactInfo = {
    address: contact?.address || "شارع رمسيس, القاهرة , جمهورية مصر العربية",
    phone: contact?.phone || "+20 2 1234 5678",
    email: contact?.email || "info@eng-syndicate.eg",
  };

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
          <ContactInfo contact={defaultContact} />
        </div>

        {/* Contact Form (Left side in RTL) */}
        <div className={styles.formColumn}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
