import Link from "next/link"
import { UserRound, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

import type {
  HealthCarePlan,
  HealthCarePlanIcon,
} from "../types/health-care-content.types"

const iconMap = {
  family: Users,
  individual: UserRound,
} satisfies Record<HealthCarePlanIcon, typeof Users>

interface HealthCarePlanCardProps {
  plan: HealthCarePlan
  subscribeLabel: string
}

export function HealthCarePlanCard({
  plan,
  subscribeLabel,
}: HealthCarePlanCardProps) {
  const Icon = iconMap[plan.icon]

  return (
    <Card className="gap-0 rounded-xl border-0 bg-white py-0 shadow-[0_12px_28px_rgba(0,0,0,.06)]">
      <CardContent className="flex h-full flex-col px-7 py-7 sm:px-8">
        <div className="grid size-14 place-items-center rounded-md bg-[#edf8f4] text-brand">
          <Icon aria-hidden="true" className="size-7" strokeWidth={1.8} />
        </div>

        <h3 className="mt-5 text-xl font-extrabold text-neutral-950 sm:text-2xl">
          {plan.title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-neutral-500 sm:text-base">
          {plan.description}
        </p>

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-neutral-100 pt-6">
          <Button
            asChild
            className="h-11 rounded-md bg-brand px-7 text-sm font-semibold text-white hover:bg-brand-strong"
          >
            <Link href={plan.subscribeHref}>
              {subscribeLabel}
              <span className="sr-only"> — {plan.title}</span>
            </Link>
          </Button>

          <p className="text-xl font-extrabold text-brand">
            {plan.price}
            <span className="ms-1.5 text-sm font-medium text-neutral-500">
              {plan.currency}
            </span>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
