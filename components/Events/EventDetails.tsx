import React from "react";
import Image from "next/image";
import { DirectusEventItem, getDirectusImageUrl } from "@/lib/directus/events";
import styles from "./EventDetails.module.css";

interface EventDetailsProps {
  event: DirectusEventItem;
}

function formatDate(dateStr?: string): string {
  if (!dateStr) return "";
  try {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return dateStr;
    return date.toLocaleDateString("ar-EG", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export default function EventDetails({ event }: EventDetailsProps) {
  const imageUrl = getDirectusImageUrl(event.image);
  const formattedDate = formatDate(event.date || event.created_on);

  return (
    <article className={styles.detailsWrapper} aria-label="تفاصيل الفعالية">
      <div className={styles.layout}>
        {/* Content Card (Right side in RTL) */}
        <section className={styles.contentCard} aria-label="محتوى الفعالية">
          <header className={styles.header}>
            <h1 className={styles.title}>{event.title}</h1>
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
            <div className={styles.descriptionText}>{event.description}</div>
          </div>
        </section>

        {/* Image Card (Left side in RTL) */}
        <section className={styles.imageCard} aria-label="صورة الفعالية">
          <div className={styles.heroImageWrapper}>
            <Image
              src={imageUrl}
              alt={event.title}
              fill
              priority
              sizes="(max-width: 992px) 100vw, 50vw"
              className={styles.heroImage}
              unoptimized={imageUrl.startsWith("http://localhost")}
            />
          </div>
        </section>
      </div>
    </article>
  );
}
