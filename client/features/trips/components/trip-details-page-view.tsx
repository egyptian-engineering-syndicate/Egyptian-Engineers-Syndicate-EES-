import { PageBreadcrumb } from "@/features/site-shell"

import type { TripDetailsPageContent } from "../types/trip-details-content.types"
import { TripBookingForm } from "./trip-booking-form"
import { TripSummaryCard } from "./trip-summary-card"

interface TripDetailsPageViewProps {
  content: TripDetailsPageContent
}

export function TripDetailsPageView({ content }: TripDetailsPageViewProps) {
  return (
    <main className="bg-page-surface">
      <PageBreadcrumb items={content.breadcrumbs} />

      <div className="mx-auto w-full max-w-[1640px] space-y-6 px-5 py-10 sm:space-y-8 sm:px-8 sm:py-12 lg:px-14">
        <TripSummaryCard summary={content.summary} />
        <TripBookingForm content={content} />
      </div>
    </main>
  )
}
