import React from "react";
import Image from "next/image";
import { DirectusNewsItem, getDirectusImageUrl } from "@/lib/directus/news";
import styles from "./NewsDetails.module.css";

interface NewsDetailsProps {
  article: DirectusNewsItem;
}

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

export default function NewsDetails({ article }: NewsDetailsProps) {
  const imageUrl = getDirectusImageUrl(article.image);
  const formattedDate = formatDate(article.published_at || article.created_on);

  return (
    <article className={styles.detailsWrapper} aria-label="تفاصيل الخبر">
      <div className={styles.layout}>
        <section className={styles.contentCard} aria-label="محتوى الخبر">
          <header className={styles.header}>
            <h1 className={styles.title}>{article.title}</h1>
            {formattedDate && (
              <div className={styles.dateRow}>
                <svg
                  className={styles.calendarIcon}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M7 2.75a.75.75 0 0 1 .75.75V5h8.5V3.5a.75.75 0 0 1 1.5 0V5h1.5A2.75 2.75 0 0 1 22 7.75v11.5A2.75 2.75 0 0 1 19.25 22H4.75A2.75 2.75 0 0 1 2 19.25V7.75A2.75 2.75 0 0 1 4.75 5h1.5V3.5a.75.75 0 0 1 1.5 0V5H7V2.75ZM3.5 9v10.25c0 .69.56 1.25 1.25 1.25h14.5c.69 0 1.25-.56 1.25-1.25V9h-17Z" />
                </svg>
                <div className={styles.dateBadge}>{formattedDate}</div>
              </div>
            )}
          </header>

          <div className={styles.contentBody}>
            {article.article ? (
              <div
                className={styles.htmlContent}
                dangerouslySetInnerHTML={{ __html: article.article }}
              />
            ) : (
              <p className={styles.noContent}>لا يوجد محتوى متوفر لهذا الخبر.</p>
            )}
          </div>
        </section>

        <section className={styles.imageCard} aria-label="صورة الخبر">
          <div className={styles.heroImageWrapper}>
            <Image
              src={imageUrl}
              alt={article.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.heroImage}
              unoptimized={imageUrl.startsWith("http://localhost")}
            />
          </div>
        </section>
      </div>
    </article>
  );
}
