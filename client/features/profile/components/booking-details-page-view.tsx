import { PageBreadcrumb } from "@/features/site-shell"

import type { BookingDetailsPageContent } from "../types/booking-details-content.types"
import { BookingCancellationCard } from "./booking-cancellation-card"
import { BookingContactCard } from "./booking-contact-card"
import { BookingSummaryCard } from "./booking-summary-card"
import { BookingTravelersCard } from "./booking-travelers-card"

interface BookingDetailsPageViewProps {
  content: BookingDetailsPageContent
}

export function BookingDetailsPageView({
  content,
}: BookingDetailsPageViewProps) {
  return (
    <main className="bg-page-surface">
      <PageBreadcrumb items={content.breadcrumbs} />

      <div className="mx-auto w-full max-w-[1640px] space-y-6 px-5 py-10 sm:space-y-8 sm:px-8 sm:py-12 lg:px-14">
        <BookingSummaryCard summary={content.summary} />
        <BookingContactCard content={content.contact} />
        <BookingTravelersCard
          content={content.travelers}
          cancelDialog={content.cancellation.dialog}
        />
        <BookingCancellationCard content={content.cancellation} />
      </div>
    </main>
  )
}
