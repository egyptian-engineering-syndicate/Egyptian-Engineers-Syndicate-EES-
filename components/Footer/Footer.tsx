"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          {/* Brand Col */}
          <div className={styles.brandCol}>
            <div className={styles.brandHeader}>
              <Image
                src="/images/syndicate-logo.png"
                alt="شعار نقابة المهندسين بالقاهرة"
                width={44}
                height={44}
                className={styles.logoImage}
              />
              <span className={styles.brandTitle}>نقابة المهندسين بالقاهرة</span>
            </div>
            <p className={styles.brandDesc}>
              نعمل علي خدمة المهندسين وتطوير المهنة من خلال باقة متكاملة من الخدمات النقابية والمهنية.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={styles.sectionTitle}>روابط سريعة</h4>
            <ul className={styles.linksList}>
              <li className={styles.linkItem}><Link href="/">الرئيسية</Link></li>
              <li className={styles.linkItem}><Link href="/services">الخدمات</Link></li>
              <li className={styles.linkItem}><Link href="/departments">إدارات النقابة</Link></li>
              <li className={styles.linkItem}><Link href="/latest-news">آخر الأخبار</Link></li>
              <li className={styles.linkItem}><Link href="/about">عن النقابة</Link></li>
              <li className={styles.linkItem}><Link href="/contact">تواصل معنا</Link></li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className={styles.sectionTitle}>تواصل معنا</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <span>شارع رمسيس، القاهرة، جمهورية مصر العربية</span>
              </li>
              <li className={styles.contactItem}>
                <a href="mailto:info@eng-syndicate.eg" style={{ color: "inherit", textDecoration: "none" }}>
                  info@eng-syndicate.eg
                </a>
              </li>
              <li className={styles.contactItem}>
                <span dir="ltr">+20 2 1234 5678</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className={styles.newsletterCol}>
            <h4 className={styles.sectionTitle}>النشرة البريدية</h4>
            <p className={styles.newsletterText}>
              اشترك ليصلك كل جديد من أخبار وخدمات النقابة.
            </p>
            <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className={styles.emailInput}
                aria-label="بريدك الإلكتروني للنشرة البريدية"
              />
              <button type="submit" className={styles.subscribeBtn}>
                إشتراك
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © 2026 نقابة المهندسين بالقاهرة. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
