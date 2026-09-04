import { SurfaceCard } from "@/components/surface-card"
import { cn } from "@/lib/utils"

import type { SubscriptionDetailsSection } from "../types/subscription-details-content.types"
import { ProfileDetailField } from "./profile-detail-field"

interface SubscriptionSectionCardProps {
  section: SubscriptionDetailsSection
}

/** The "البيانات الشخصية" / "البيانات المهنية" cards — same shape, different rows. */
export function SubscriptionSectionCard({
  section,
}: SubscriptionSectionCardProps) {
  return (
    <SurfaceCard className="sm:px-8 sm:py-8">
      <h2 className="text-lg font-extrabold text-brand sm:text-xl">
        {section.title}
      </h2>

      <div className="mt-5 grid gap-5 sm:grid-cols-2 sm:gap-x-8">
        {section.fields.map((field) => (
          <ProfileDetailField
            key={field.label}
            label={field.label}
            value={field.value}
            emphasis={field.emphasis}
            className={cn(field.wide && "sm:col-span-2")}
          />
        ))}
      </div>
    </SurfaceCard>
  )
}
