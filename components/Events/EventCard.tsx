import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DirectusEventItem, getDirectusImageUrl } from "@/lib/directus/events";
import styles from "./EventCard.module.css";

interface EventCardProps {
  event: DirectusEventItem;
}

export default function EventCard({ event }: EventCardProps) {
  const imageUrl = getDirectusImageUrl(event.image);

  return (
    <Link href={`/events/${event.id}`} className={styles.cardLink}>
      <article className={styles.card}>
        <div className={styles.imageWrapper}>
          <Image
            src={imageUrl}
            alt={event.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 797px"
            className={styles.cardImage}
            unoptimized={imageUrl.startsWith("http://localhost")}
          />
        </div>

        <div className={styles.cardBody}>
          <h3 className={styles.title}>{event.title}</h3>
          <p className={styles.description}>{event.description}</p>

          <hr className={styles.divider} />

          <div className={styles.cardFooter}>
            <span className={styles.readMoreBtn}>تعرف على المزيد</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
