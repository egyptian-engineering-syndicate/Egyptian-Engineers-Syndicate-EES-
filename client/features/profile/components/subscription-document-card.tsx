import { FileText } from "lucide-react"

import type { SubscriptionDocument } from "../types/subscription-details-content.types"

interface SubscriptionDocumentCardProps {
  attachment: SubscriptionDocument
}

export function SubscriptionDocumentCard({
  attachment,
}: SubscriptionDocumentCardProps) {
  return (
    <article className="flex items-center gap-3 rounded-md border border-neutral-200 bg-white px-4 py-4">
      <div className="grid size-11 shrink-0 place-items-center rounded-md bg-[#edf8f4] text-brand">
        <FileText aria-hidden="true" className="size-5" strokeWidth={1.8} />
      </div>

      <div className="min-w-0">
        <h3 className="truncate text-sm font-bold text-neutral-950">
          {attachment.title}
        </h3>
        <p className="mt-1 text-xs text-neutral-400">
          {/* Latin-digit date: isolated so bidi doesn't mirror the slashes. */}
          <span dir="ltr">{attachment.date}</span>
        </p>
      </div>
    </article>
  )
}
