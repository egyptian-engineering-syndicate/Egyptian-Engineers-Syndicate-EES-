import React from "react";
import { DirectusEventItem } from "@/lib/directus/events";
import EventCard from "./EventCard";
import styles from "./EventsGrid.module.css";

interface EventsGridProps {
  events: DirectusEventItem[];
}

export default function EventsGrid({ events }: EventsGridProps) {
  if (!events || events.length === 0) {
    return (
      <section className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>جميع الفعاليات</h2>
        </div>
        <div className={styles.emptyState}>لا توجد فعاليات متاحة حالياً.</div>
      </section>
    );
  }

  return (
    <section className={styles.container} aria-label="قائمة الفعاليات">
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>جميع الفعاليات</h2>
      </div>

      <div className={styles.grid}>
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}
