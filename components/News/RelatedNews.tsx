import React from "react";
import { getRelatedNews } from "@/lib/directus/news";
import NewsCard from "./NewsCard";
import styles from "./RelatedNews.module.css";

interface RelatedNewsProps {
  excludeId: string | number;
}

export default async function RelatedNews({ excludeId }: RelatedNewsProps) {
  // Fetch from Directus directly, limiting to 4 related articles
  const relatedList = await getRelatedNews(excludeId, 4);

  if (!relatedList || relatedList.length === 0) {
    return null; // Don't show the section if there are no other articles
  }

  return (
    <section className={styles.sectionWrapper} aria-label="أخبار ذات صلة">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>أخبار ذات صلة</h2>
        <div className={styles.grid}>
          {relatedList.map((item, index) => (
            <NewsCard key={`${item.id}-${index}`} news={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
