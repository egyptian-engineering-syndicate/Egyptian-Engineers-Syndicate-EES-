import { Check } from "lucide-react"

import { SurfaceCard } from "@/components/surface-card"

import type { SubscriptionDocumentsContent } from "../types/subscription-details-content.types"
import { SubscriptionDocumentCard } from "./subscription-document-card"

interface SubscriptionDocumentsCardProps {
  content: SubscriptionDocumentsContent
}

export function SubscriptionDocumentsCard({
  content,
}: SubscriptionDocumentsCardProps) {
  return (
    <SurfaceCard className="sm:px-8 sm:py-8">
      <h2 className="text-lg font-extrabold text-brand sm:text-xl">
        {content.title}
      </h2>

      <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
        {content.checklist.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2.5 text-sm text-neutral-600 sm:text-base"
          >
            <Check
              aria-hidden="true"
              className="mt-1 size-4 shrink-0 text-brand"
              strokeWidth={2.4}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <ul className="mt-7 grid gap-4 sm:grid-cols-2 sm:gap-x-6">
        {content.documents.map((attachment) => (
          <li key={attachment.id}>
            <SubscriptionDocumentCard attachment={attachment} />
          </li>
        ))}
      </ul>
    </SurfaceCard>
  )
}
