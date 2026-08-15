import React from "react";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";
import styles from "./not-found.module.css";

export default function NewsNotFound() {
  return (
    <div className={styles.pageContainer}>
      <main className={styles.mainContent}>
        <div className={styles.cardContainer}>
          <span className={styles.icon}>🔍</span>
          <h1 className={styles.title}>الخبر غير موجود</h1>
          <p className={styles.description}>
            عذراً، لم نتمكن من العثور على الخبر الذي تبحث عنه. قد يكون تم حذفه أو أن الرابط غير صحيح.
          </p>
          <Link href="/latest-news" className={styles.homeLink}>
            العودة لصفحة الأخبار
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
