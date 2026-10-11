import { PageBreadcrumb } from "@/features/site-shell"

import type { PracticeApplyPageContent } from "../types/practice-content.types"
import { PracticeApplyForm } from "./practice-apply-form"

interface PracticeApplyPageViewProps {
  content: PracticeApplyPageContent
}

export function PracticeApplyPageView({ content }: PracticeApplyPageViewProps) {
  return (
    <main className="bg-page-surface">
      <PageBreadcrumb items={content.breadcrumbs} />

      <div className="mx-auto w-full max-w-[1640px] px-5 py-10 sm:px-8 sm:py-12 lg:px-14">
        <h1 className="text-3xl font-extrabold text-neutral-950 sm:text-4xl">
          {content.title}
        </h1>
        <p className="mt-2 text-sm text-neutral-500 sm:text-base">
          {content.description}
        </p>

        <div className="mt-8">
          <PracticeApplyForm content={content} />
        </div>
      </div>
    </main>
  )
}
