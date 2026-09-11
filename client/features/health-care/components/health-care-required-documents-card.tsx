import { SurfaceCard } from "@/components/surface-card"

import type { HealthCareRequiredDocumentsContent } from "../types/health-care-content.types"
import { HealthCareNumberedItem } from "./health-care-numbered-item"

interface HealthCareRequiredDocumentsCardProps {
  content: HealthCareRequiredDocumentsContent
}

export function HealthCareRequiredDocumentsCard({
  content,
}: HealthCareRequiredDocumentsCardProps) {
  return (
    <SurfaceCard className="sm:px-8 sm:py-8">
      <h2 className="text-xl font-extrabold text-neutral-950 sm:text-2xl">
        {content.title}
      </h2>

      <ol className="mt-5 grid gap-4 text-sm leading-7 text-neutral-600 sm:grid-cols-2 sm:gap-x-10 sm:text-base">
        {content.documents.map((document) => (
          <HealthCareNumberedItem
            key={document.marker}
            marker={document.marker}
          >
            {document.text}
          </HealthCareNumberedItem>
        ))}
      </ol>
    </SurfaceCard>
  )
}
