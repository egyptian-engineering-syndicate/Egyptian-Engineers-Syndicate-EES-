import type { Metadata } from "next"

import { newsPageContent, NewsPageView } from "@/features/news"
import { siteShellContent } from "@/features/site-shell"

export const metadata: Metadata = {
  title: `${newsPageContent.title} | ${siteShellContent.brand.name}`,
  description: "آخر أخبار نقابة المهندسين بالقاهرة.",
}

export default function NewsPage() {
  return <NewsPageView content={newsPageContent} />
}
