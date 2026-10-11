import { SurfaceCard } from "@/components/surface-card"

import type { HealthCareRulesContent } from "../types/health-care-content.types"
import { HealthCareNumberedItem } from "./health-care-numbered-item"

interface HealthCareRulesCardProps {
  content: HealthCareRulesContent
}

export function HealthCareRulesCard({ content }: HealthCareRulesCardProps) {
  return (
    <SurfaceCard className="sm:px-8 sm:py-8">
      <h2 className="text-xl font-extrabold text-neutral-950 sm:text-2xl">
        {content.title}
      </h2>

      <ol className="mt-5 space-y-4 text-sm leading-7 text-neutral-600 sm:text-base">
        {content.rules.map((rule) => (
          <HealthCareNumberedItem key={rule.marker} marker={rule.marker}>
            {rule.text}
          </HealthCareNumberedItem>
        ))}
      </ol>
    </SurfaceCard>
  )
}
