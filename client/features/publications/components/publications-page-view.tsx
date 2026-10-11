import { PageBreadcrumb } from "@/features/site-shell"

import type { PublicationsPageContent } from "../types/publications-content.types"
import { PublicationsGrid } from "./publications-grid"

interface PublicationsPageViewProps {
  content: PublicationsPageContent
}

export function PublicationsPageView({ content }: PublicationsPageViewProps) {
  return (
    <main className="bg-page-surface">
      <PageBreadcrumb items={content.breadcrumbs} />

      <div className="mx-auto w-full max-w-[1640px] px-5 py-10 sm:px-8 sm:py-12 lg:px-14">
        <h1 className="text-3xl font-extrabold text-neutral-950 sm:text-4xl">
          {content.title}
        </h1>
        <PublicationsGrid content={content} />
      </div>
    </main>
  )
}
