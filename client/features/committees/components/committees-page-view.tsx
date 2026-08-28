import { PageBreadcrumb } from "@/features/site-shell"

import type { CommitteesPageContent } from "../types/committees-content.types"
import { CommitteesGrid } from "./committees-grid"

interface CommitteesPageViewProps {
  content: CommitteesPageContent
}

export function CommitteesPageView({ content }: CommitteesPageViewProps) {
  return (
    <main className="bg-page-surface">
      <PageBreadcrumb items={content.breadcrumbs} />

      <div className="mx-auto w-full max-w-[1640px] px-5 py-10 sm:px-8 sm:py-12 lg:px-14">
        <h1 className="text-3xl font-extrabold text-neutral-950 sm:text-4xl">
          {content.title}
        </h1>

        <CommitteesGrid content={content} />
      </div>
    </main>
  )
}
