import { PageBreadcrumb } from "@/features/site-shell"

import type { NewsPageContent } from "../types/news-content.types"
import { NewsGrid } from "./news-grid"

interface NewsPageViewProps {
  content: NewsPageContent
}

export function NewsPageView({ content }: NewsPageViewProps) {
  return (
    <main className="bg-page-surface">
      <PageBreadcrumb items={content.breadcrumbs} />

      <div className="mx-auto w-full max-w-[1640px] px-5 py-10 sm:px-8 sm:py-12 lg:px-14">
        <NewsGrid content={content} />
      </div>
    </main>
  )
}
