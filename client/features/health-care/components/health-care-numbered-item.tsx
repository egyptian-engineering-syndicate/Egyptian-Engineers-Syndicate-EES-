import type { ReactNode } from "react"

interface HealthCareNumberedItemProps {
  marker: string
  children: ReactNode
}

/**
 * One `1) …` line. The marker is isolated with `dir="ltr"` so the bidi
 * algorithm doesn't mirror the bracket or push it away from its digit inside
 * the RTL paragraph around it.
 */
export function HealthCareNumberedItem({
  marker,
  children,
}: HealthCareNumberedItemProps) {
  return (
    <li className="flex gap-2">
      <span dir="ltr" className="shrink-0 tabular-nums">
        {marker})
      </span>
      <span>{children}</span>
    </li>
  )
}
