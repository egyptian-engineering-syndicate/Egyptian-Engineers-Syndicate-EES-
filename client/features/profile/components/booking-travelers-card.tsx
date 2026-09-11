import { SurfaceCard } from "@/components/surface-card"
import { Button } from "@/components/ui/button"

import type { BookingTravelersContent } from "../types/booking-details-content.types"
import { ProfileDetailField } from "./profile-detail-field"

interface BookingTravelersCardProps {
  content: BookingTravelersContent
}

export function BookingTravelersCard({ content }: BookingTravelersCardProps) {
  return (
    <SurfaceCard>
      <h2 className="text-lg font-extrabold text-neutral-950 sm:text-xl">
        {content.title}
      </h2>

      <ol className="mt-5 space-y-6">
        {content.travelers.map((traveler, index) => (
          <li
            key={traveler.id}
            className={
              index > 0 ? "border-t border-neutral-100 pt-6" : undefined
            }
          >
            <p className="text-sm font-bold text-neutral-950">
              {content.travelerLabel} {index + 1}
            </p>

            <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
              <div className="grid flex-1 gap-4 sm:grid-cols-3 sm:gap-x-8">
                <ProfileDetailField
                  label={content.firstNameLabel}
                  value={traveler.firstName}
                  emphasis
                />
                <ProfileDetailField
                  label={content.fatherNameLabel}
                  value={traveler.fatherName}
                />
                <ProfileDetailField
                  label={content.familyNameLabel}
                  value={traveler.familyName}
                />
              </div>

              {/* Visual only until the booking-cancellation endpoint exists. */}
              <Button
                type="button"
                variant="outline"
                className="h-14 min-w-44 shrink-0 rounded-md border-red-500/60 bg-white px-8 text-base font-semibold text-red-600 hover:bg-red-50 hover:text-red-700"
              >
                {content.cancelTravelerLabel}
                <span className="sr-only">
                  {` — ${content.travelerLabel} ${index + 1}`}
                </span>
              </Button>
            </div>
          </li>
        ))}
      </ol>
    </SurfaceCard>
  )
}
