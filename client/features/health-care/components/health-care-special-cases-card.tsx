import { SurfaceCard } from "@/components/surface-card"

import type { HealthCareSpecialCasesContent } from "../types/health-care-content.types"

interface HealthCareSpecialCasesCardProps {
  content: HealthCareSpecialCasesContent
}

export function HealthCareSpecialCasesCard({
  content,
}: HealthCareSpecialCasesCardProps) {
  return (
    <SurfaceCard className="sm:px-8 sm:py-8">
      <h2 className="text-xl font-extrabold text-neutral-950 sm:text-2xl">
        {content.title}
      </h2>

      <dl className="mt-5 space-y-5">
        {content.cases.map((specialCase) => (
          <div key={specialCase.title}>
            <dt className="text-sm font-bold text-brand sm:text-base">
              {specialCase.title}
            </dt>
            <dd className="mt-1.5 text-sm leading-7 text-neutral-600 sm:text-base">
              {specialCase.description}
            </dd>
          </div>
        ))}
      </dl>
    </SurfaceCard>
  )
}
