import type { Metadata } from "next";
import Footer from "@/components/Footer/Footer";
import FeaturedEventsSwiper from "@/components/Events/FeaturedEventsSwiper";
import EventsGrid from "@/components/Events/EventsGrid";
import { getPublishedEvents } from "@/lib/directus/events";
import styles from "./events-page.module.css";

export const metadata: Metadata = {
  title: "الفعاليات | نقابة المهندسين بالقاهرة",
  description: "تابع أحدث الفعاليات والأنشطة والمؤتمرات لنقابة المهندسين الفرعية بالقاهرة.",
};

export const dynamic = "force-dynamic";

export default async function EventsPage() {
  const result = await getPublishedEvents();
  const events = result.ok ? result.data : [];
  const errorMessage = !result.ok ? result.error : null;

  return (
    <div className={styles.pageWrapper}>
      <main className={styles.mainContent}>
        {/* Page Heading Section */}
        <div className={styles.headerSection}>
          <h1 className={styles.mainHeading}>الفعاليات</h1>
        </div>

        {/* Error message banner if backend is unreachable */}
        {errorMessage && (
          <div className={styles.errorBanner}>
            تنبيه: {errorMessage}
          </div>
        )}

        {/* Section 1 — Featured Events Swiper */}
        {events.length > 0 && <FeaturedEventsSwiper events={events} />}

        {/* Section 2 — Events Cards Grid */}
        <EventsGrid events={events} />
      </main>

      <Footer />
    </div>
  );
}
