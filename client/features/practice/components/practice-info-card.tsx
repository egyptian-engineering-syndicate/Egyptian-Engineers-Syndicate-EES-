import type { ReactNode } from "react"

import { SurfaceCard } from "@/components/surface-card"

interface PracticeInfoCardProps {
  title: string
  children: ReactNode
  className?: string
}

export function PracticeInfoCard({
  title,
  children,
  className,
}: PracticeInfoCardProps) {
  return (
    <SurfaceCard className={className}>
      <h2 className="text-lg font-extrabold text-neutral-950 sm:text-xl">
        {title}
      </h2>
      <div className="mt-4 text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
        {children}
      </div>
    </SurfaceCard>
  )
}
