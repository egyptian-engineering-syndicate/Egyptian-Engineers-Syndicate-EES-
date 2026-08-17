import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getNewsById } from "@/lib/directus/news";
import NewsDetails from "@/components/News/NewsDetails";
import RelatedNews from "@/components/News/RelatedNews";
import Footer from "@/components/Footer/Footer";
import styles from "./news-detail-page.module.css";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const article = await getNewsById(id);

  if (!article) {
    return {
      title: "الخبر غير موجود | نقابة المهندسين بالقاهرة",
      description: "عذراً، لم نتمكن من العثور على الخبر المطلوب.",
    };
  }

  // Strip HTML tags for clean description excerpt
  const cleanExcerpt = article.article
    ? article.article.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim().slice(0, 150) + "..."
    : article.title;

  return {
    title: `${article.title} | نقابة المهندسين بالقاهرة`,
    description: cleanExcerpt,
  };
}

export const dynamic = "force-dynamic";

export default async function NewsDetailPage({ params }: PageProps) {
  const { id } = await params;
  
  // Fetch real Directus news details based on the dynamic ID
  const article = await getNewsById(id);

  // If the news article does not exist or status is not published, render 404
  if (!article) {
    notFound();
  }

  return (
    <div className={styles.pageContainer}>
      <main className={styles.mainContent}>
        {/* Render primary news details content */}
        <NewsDetails article={article} />

        {/* Render Related news section excluding the current ID */}
        <RelatedNews excludeId={id} />
      </main>

      <Footer />
    </div>
  );
}
