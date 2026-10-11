import { PageBreadcrumb } from "@/features/site-shell"

import type { DepartmentsPageContent } from "../types/departments-content.types"
import { DepartmentsGrid } from "./departments-grid"

interface DepartmentsPageViewProps {
  content: DepartmentsPageContent
}

export function DepartmentsPageView({ content }: DepartmentsPageViewProps) {
  return (
    <main className="bg-page-surface">
      <PageBreadcrumb items={content.breadcrumbs} />

      <div className="mx-auto w-full max-w-[1640px] px-5 py-10 sm:px-8 sm:py-12 lg:px-14">
        <h1 className="text-3xl font-extrabold text-neutral-950 sm:text-4xl">
          {content.title}
        </h1>

        <DepartmentsGrid content={content} />
      </div>
    </main>
  )
}
