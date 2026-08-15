import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DirectusNewsItem, getDirectusImageUrl } from "@/lib/directus/news";
import styles from "./NewsCard.module.css";

interface NewsCardProps {
  news: DirectusNewsItem;
}

/**
 * Extracts clean plain text excerpt from article content.
 */
function getExcerpt(article?: string, maxLength: number = 85): string {
  if (!article) return "";

  // Strip HTML tags if present
  const cleanText = article
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();

  if (cleanText.length <= maxLength) return cleanText;
  return cleanText.slice(0, maxLength).trim() + "...";
}

/**
 * Formats ISO date string to readable Arabic date.
 */
function formatDate(dateStr?: string): string {
  if (!dateStr) return "";
  try {
    const date = new Date(dateStr);
    return date.toLocaleDateString("ar-EG", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export default function NewsCard({ news }: NewsCardProps) {
  const imageUrl = getDirectusImageUrl(news.image);
  const excerptText = getExcerpt(news.article);
  const formattedDate = formatDate(news.published_at || news.created_on);

  return (
    <Link href={`/news/${news.id}`} className={styles.cardLink}>
      <article className={styles.card}>
        <div className={styles.imageWrapper}>
          <Image
            src={imageUrl}
            alt={news.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className={styles.cardImage}
            unoptimized={imageUrl.startsWith("http://localhost")}
          />
        </div>

        <div className={styles.cardBody}>
          {formattedDate && (
            <div className={styles.headerMeta}>
              <span className={styles.publishDate}>{formattedDate}</span>
            </div>
          )}

          <h3 className={styles.title}>{news.title}</h3>

          {excerptText && <p className={styles.excerpt}>{excerptText}</p>}

          <hr className={styles.divider} />

          <div className={styles.cardFooter}>
            <span className={styles.readMoreBtn}>تعرف على المزيد</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
