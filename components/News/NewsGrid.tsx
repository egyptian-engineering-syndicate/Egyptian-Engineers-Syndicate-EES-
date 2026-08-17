"use client";

import React, { useState, useMemo } from "react";
import { DirectusNewsItem, NewsResult } from "@/lib/directus/news";
import NewsCard from "./NewsCard";
import NewsSearch from "./NewsSearch";
import styles from "./NewsGrid.module.css";

interface NewsGridProps {
  newsResult: NewsResult;
}

const ITEMS_PER_PAGE = 16;

export default function NewsGrid({ newsResult }: NewsGridProps) {
  const initialNews = useMemo<DirectusNewsItem[]>(
    () => (newsResult.ok ? newsResult.data : []),
    [newsResult]
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  // Case-insensitive Arabic title search filtering
  const filteredNews = useMemo(() => {
    if (!searchQuery.trim()) {
      return initialNews;
    }
    const query = searchQuery.trim().toLowerCase();
    return initialNews.filter((item) =>
      item.title.toLowerCase().includes(query)
    );
  }, [initialNews, searchQuery]);

  const displayedNews = useMemo(() => {
    return filteredNews.slice(0, visibleCount);
  }, [filteredNews, visibleCount]);

  const hasMore = visibleCount < filteredNews.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  return (
    <section className={styles.sectionWrapper} aria-label="قسم آخر الأخبار">
      {/* Top Header Row: Title RIGHT, Search LEFT (RTL) */}
      <div className={styles.topBarRow}>
        <h1 className={styles.pageTitle}>آخر الأخبار</h1>
        <NewsSearch
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="أبحث عن خبر..."
        />
      </div>

      {displayedNews.length > 0 ? (
        <>
          <div className={styles.grid}>
            {displayedNews.map((newsItem, index) => (
              <NewsCard key={`${newsItem.id}-${index}`} news={newsItem} />
            ))}
          </div>

          {hasMore && (
            <div className={styles.loadMoreContainer}>
              <button
                type="button"
                className={styles.loadMoreButton}
                onClick={handleLoadMore}
              >
                شاهد المزيد
              </button>
            </div>
          )}
        </>
      ) : (
        <div className={styles.emptyState}>
          {searchQuery.trim() ? (
            <>
              <h2 className={styles.emptyTitle}>لا توجد نتائج مطابقة</h2>
              <p className={styles.emptyText}>
                لم نجد أي أخبار تطابق &quot;{searchQuery}&quot;. جرب البحث بكلمات أخرى.
              </p>
              <button
                type="button"
                className={styles.resetSearchBtn}
                onClick={() => setSearchQuery("")}
              >
                عرض كافة الأخبار
              </button>
            </>
          ) : (
            <>
              <h2 className={styles.emptyTitle}>لا توجد أخبار حالياً</h2>
              <p className={styles.emptyText}>لم يتم نشر أي أخبار بعد. تابعنا قريباً.</p>
            </>
          )}
        </div>
      )}
    </section>
  );
}
