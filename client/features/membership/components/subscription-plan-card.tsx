import Link from "next/link"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

import type { SubscriptionPlan } from "../types/membership-content.types"

interface SubscriptionPlanCardProps {
  plan: SubscriptionPlan
  selectLabel: string
}

export function SubscriptionPlanCard({
  plan,
  selectLabel,
}: SubscriptionPlanCardProps) {
  return (
    <Card className="gap-0 rounded-xl border-0 bg-white py-0 shadow-[0_16px_40px_rgba(0,0,0,.12)]">
      <CardContent className="flex h-full flex-col px-7 py-7 sm:px-8">
        <h3 className="text-xl font-extrabold text-neutral-950 sm:text-2xl">
          {plan.title}
        </h3>
        <p className="mt-1.5 text-sm leading-6 text-neutral-500 sm:text-base">
          {plan.description}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-neutral-100 pt-5">
          <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600 sm:text-sm">
            {plan.durationLabel}
          </span>
          <span className="text-2xl font-extrabold text-neutral-950 sm:text-3xl">
            {plan.price}
            <span className="ms-1 text-sm font-medium text-neutral-500 sm:text-base">
              {plan.currency}
            </span>
          </span>
        </div>

        <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm text-neutral-600 sm:text-base">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <Check
                aria-hidden="true"
                className="mt-0.5 size-4 shrink-0 text-brand"
                strokeWidth={2.5}
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          asChild
          className="mt-6 h-12 w-full rounded-md bg-brand text-base font-semibold text-white hover:bg-brand-strong"
        >
          <Link href={`/membership/renewal/payment?plan=${plan.id}`}>
            {selectLabel}
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
