import { Card } from "@/components/ui/card"

import type { CancellationPolicyContent } from "../types/trip-details-content.types"

interface CancellationPolicyCardProps {
  content: CancellationPolicyContent
}

export function CancellationPolicyCard({
  content,
}: CancellationPolicyCardProps) {
  return (
    <Card className="h-full gap-0 rounded-xl border-0 bg-white px-6 py-7 shadow-[0_12px_28px_rgba(0,0,0,.06)] ring-0 sm:px-7">
      <h2 className="text-lg font-extrabold text-neutral-950 sm:text-xl">
        {content.title}
      </h2>

      <p className="mt-4 text-sm leading-7 text-neutral-500">
        {content.description}
      </p>

      <div className="mt-auto pt-6">
        <p className="w-fit rounded-md bg-[#edf8f4] px-5 py-4 text-sm font-medium text-brand">
          {content.feeLabel}
        </p>
      </div>
    </Card>
  )
}
