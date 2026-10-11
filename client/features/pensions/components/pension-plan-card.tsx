import Link from "next/link"

import { SurfaceCard } from "@/components/surface-card"

import type { PensionPlan } from "../types/pensions-content.types"

interface PensionPlanCardProps {
  plan: PensionPlan
}

export function PensionPlanCard({ plan }: PensionPlanCardProps) {
  return (
    <Link href={plan.href} className="block h-full">
      <SurfaceCard className="h-full transition-shadow hover:shadow-[0_16px_36px_rgba(0,0,0,.12)] sm:px-7 sm:py-8">
        <h2 className="text-xl font-extrabold text-neutral-950 sm:text-2xl">
          {plan.title}
        </h2>
        <p className="mt-3 text-sm leading-7 text-neutral-600 sm:text-base">
          {plan.description}
        </p>
        <p className="mt-6 border-t border-neutral-100 pt-4 text-sm">
          <span className="font-bold text-brand">{plan.eligibilityLabel}</span>
          <span className="mt-1 block text-neutral-600">{plan.eligibility}</span>
        </p>
      </SurfaceCard>
    </Link>
  )
}
