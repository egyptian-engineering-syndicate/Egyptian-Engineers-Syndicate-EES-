import { PageBreadcrumb } from "@/features/site-shell"

import type { PensionApplyPageContent } from "../types/pensions-content.types"
import { PensionApplyForm } from "./pension-apply-form"

interface PensionApplyPageViewProps {
  content: PensionApplyPageContent
}

export function PensionApplyPageView({ content }: PensionApplyPageViewProps) {
  return (
    <main className="bg-page-surface">
      <PageBreadcrumb items={content.breadcrumbs} />

      <div className="mx-auto w-full max-w-[1640px] px-5 py-10 sm:px-8 sm:py-12 lg:px-14">
        <PensionApplyForm content={content} />
      </div>
    </main>
  )
}
