import type { Metadata } from "next";
import { getPublishedNews } from "@/lib/directus/news";
import NewsGrid from "@/components/News/NewsGrid";
import Footer from "@/components/Footer/Footer";
import styles from "./latest-news.module.css";

export const metadata: Metadata = {
  title: "آخر الأخبار | نقابة المهندسين بالقاهرة",
  description: "تابع أحدث الأخبار والفعاليات والقرارات الصادرة عن نقابة المهندسين الفرعية بالقاهرة.",
};

export default async function LatestNewsPage() {
  // Fetch real data from Directus — no mock fallback
  const newsResult = await getPublishedNews();

  return (
    <div className={styles.pageContainer}>
      <main className={styles.mainContent}>
        <NewsGrid newsResult={newsResult} />
      </main>

      <Footer />
    </div>
  );
}
