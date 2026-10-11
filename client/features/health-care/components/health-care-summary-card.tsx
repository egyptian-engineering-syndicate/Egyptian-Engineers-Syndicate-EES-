import { UserRound, Users } from "lucide-react"

import { Card } from "@/components/ui/card"

import type {
  HealthCareDetailsSummary,
  HealthCarePlanIcon,
} from "../types/health-care-content.types"

const iconMap = {
  family: Users,
  individual: UserRound,
} satisfies Record<HealthCarePlanIcon, typeof Users>

interface HealthCareSummaryCardProps {
  summary: HealthCareDetailsSummary
}

export function HealthCareSummaryCard({ summary }: HealthCareSummaryCardProps) {
  const Icon = iconMap[summary.icon]

  return (
    <Card className="gap-0 rounded-xl border-0 bg-white px-6 py-7 shadow-[0_12px_28px_rgba(0,0,0,.06)] ring-0 sm:px-8 sm:py-8">
      <div className="grid size-14 place-items-center rounded-md bg-[#edf8f4] text-brand">
        <Icon aria-hidden="true" className="size-7" strokeWidth={1.8} />
      </div>

      <h1 className="mt-5 text-2xl font-extrabold text-neutral-950 sm:text-3xl">
        {summary.title}
      </h1>
      <p className="mt-2 text-sm leading-7 text-neutral-500 sm:text-base">
        {summary.description}
      </p>

      <div className="mt-5 rounded-md bg-[#edf8f4] px-5 py-4">
        <p className="text-2xl font-extrabold text-brand sm:text-3xl">
          {summary.price}
          <span className="ms-1.5 text-sm font-medium text-neutral-500">
            {summary.currency}
          </span>
        </p>
      </div>
    </Card>
  )
}
