import { SurfaceCard } from "@/components/surface-card"

import type { BookingContactContent } from "../types/booking-details-content.types"
import { ProfileDetailField } from "./profile-detail-field"

interface BookingContactCardProps {
  content: BookingContactContent
}

export function BookingContactCard({ content }: BookingContactCardProps) {
  return (
    <SurfaceCard>
      <h2 className="text-lg font-extrabold text-neutral-950 sm:text-xl">
        {content.title}
      </h2>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 sm:gap-x-8">
        <ProfileDetailField label={content.emailLabel} value={content.email} />
        <ProfileDetailField label={content.phoneLabel} value={content.phone} />
      </div>
    </SurfaceCard>
  )
}
