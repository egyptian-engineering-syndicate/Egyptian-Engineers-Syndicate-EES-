import type { Metadata } from "next";
import LatestNewsPage from "../latest-news/page";

export const metadata: Metadata = {
  title: "آخر الأخبار | نقابة المهندسين بالقاهرة",
  description: "تابع أحدث الأخبار والفعاليات والقرارات الصادرة عن نقابة المهندسين الفرعية بالقاهرة.",
};

export const dynamic = "force-dynamic";

export default LatestNewsPage;
