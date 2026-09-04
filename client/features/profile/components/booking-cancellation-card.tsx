import { SurfaceCard } from "@/components/surface-card"
import { Button } from "@/components/ui/button"

import type { BookingCancellationContent } from "../types/booking-details-content.types"

interface BookingCancellationCardProps {
  content: BookingCancellationContent
}

export function BookingCancellationCard({
  content,
}: BookingCancellationCardProps) {
  return (
    <SurfaceCard>
      <h2 className="text-lg font-extrabold text-neutral-950 sm:text-xl">
        {content.title}
      </h2>

      <p className="mt-4 text-sm leading-7 text-neutral-500 sm:text-base">
        {content.description}
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        {/* Visual only until the booking-cancellation endpoint exists. */}
        <Button
          type="button"
          variant="outline"
          className="h-14 min-w-44 rounded-md border-red-500/60 bg-white px-8 text-base font-semibold text-red-600 hover:bg-red-50 hover:text-red-700"
        >
          {content.cancelBookingLabel}
        </Button>

        <p className="rounded-md bg-[#edf8f4] px-5 py-4 text-sm font-medium text-brand">
          {content.feeLabel}
        </p>
      </div>
    </SurfaceCard>
  )
}
