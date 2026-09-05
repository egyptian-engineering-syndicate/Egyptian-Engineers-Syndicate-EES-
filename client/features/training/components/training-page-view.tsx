import { PageBreadcrumb } from "@/features/site-shell"

import type { TrainingPageContent } from "../types/training-content.types"
import { TrainingCoursesSection } from "./training-courses-section"

interface TrainingPageViewProps {
  content: TrainingPageContent
}

export function TrainingPageView({ content }: TrainingPageViewProps) {
  return (
    <main className="bg-page-surface">
      <PageBreadcrumb items={content.breadcrumbs} />

      <div className="mx-auto w-full max-w-[1640px] px-5 py-10 sm:px-8 sm:py-12 lg:px-14">
        <TrainingCoursesSection content={content} />
      </div>
    </main>
  )
}
