import { PageBreadcrumb } from "@/features/site-shell"

import type { HealthCareDetailsPageContent } from "../types/health-care-content.types"
import { HealthCareBookingForm } from "./health-care-booking-form"
import { HealthCareSummaryCard } from "./health-care-summary-card"

interface HealthCareDetailsPageViewProps {
  content: HealthCareDetailsPageContent
}

export function HealthCareDetailsPageView({
  content,
}: HealthCareDetailsPageViewProps) {
  return (
    <main className="bg-page-surface">
      <PageBreadcrumb items={content.breadcrumbs} />

      <div className="mx-auto w-full max-w-[1640px] space-y-6 px-5 py-10 sm:space-y-8 sm:px-8 sm:py-12 lg:px-14">
        <HealthCareSummaryCard summary={content.summary} />
        <HealthCareBookingForm content={content} />
      </div>
    </main>
  )
}
