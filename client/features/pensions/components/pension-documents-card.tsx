import { Check } from "lucide-react"

import { SurfaceCard } from "@/components/surface-card"

interface PensionDocumentsCardProps {
  title: string
  items: string[]
}

export function PensionDocumentsCard({
  title,
  items,
}: PensionDocumentsCardProps) {
  return (
    <SurfaceCard className="sm:px-8 sm:py-8">
      <h2 className="text-xl font-extrabold text-neutral-950 sm:text-2xl">
        {title}
      </h2>
      <ul className="mt-6 grid gap-4 text-sm text-neutral-600 sm:grid-cols-2 sm:text-base lg:grid-cols-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <Check
              aria-hidden="true"
              className="mt-0.5 size-5 shrink-0 text-brand"
              strokeWidth={2.4}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </SurfaceCard>
  )
}
