import type { ComponentProps } from "react"

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

/**
 * The white content card the designs stack down every inner page: soft shadow,
 * no ring, generous padding. Shared because `membership`, `trips` and
 * `health-care` were all repeating the same class string.
 */
export const surfaceCardClassName =
  "gap-0 rounded-xl border-0 bg-white px-6 py-7 shadow-[0_12px_28px_rgba(0,0,0,.06)] ring-0 sm:px-7"

export function SurfaceCard({
  className,
  ...props
}: ComponentProps<typeof Card>) {
  return <Card className={cn(surfaceCardClassName, className)} {...props} />
}
