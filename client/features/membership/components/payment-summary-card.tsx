import { Check } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

import type { SubscriptionPlan } from "../types/membership-content.types"

interface PaymentSummaryCardProps {
  plan: SubscriptionPlan
  selectedPackageLabel: string
}

export function PaymentSummaryCard({
  plan,
  selectedPackageLabel,
}: PaymentSummaryCardProps) {
  return (
    <Card className="gap-0 rounded-xl border-0 bg-white py-0 shadow-[0_12px_28px_rgba(0,0,0,.07)]">
      <CardContent className="px-6 py-7 sm:px-7">
        <span className="inline-flex rounded-full bg-[#edf8f4] px-3 py-1 text-xs font-semibold text-brand sm:text-sm">
          {selectedPackageLabel}
        </span>

        <h2 className="mt-4 text-xl font-extrabold text-neutral-950 sm:text-2xl">
          {plan.title}
        </h2>
        <p className="mt-1.5 text-sm leading-6 text-neutral-500 sm:text-base">
          {plan.description}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-neutral-100 pt-5">
          <span className="text-2xl font-extrabold text-brand sm:text-3xl">
            {plan.price}
            <span className="ms-1 text-sm font-medium text-neutral-500 sm:text-base">
              {plan.currency}
            </span>
          </span>
          <span className="text-sm font-medium text-neutral-500 sm:text-base">
            {plan.durationLabel}
          </span>
        </div>

        <ul className="mt-5 grid grid-cols-2 gap-x-5 gap-y-2.5 text-sm text-neutral-600 sm:text-base">
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
      </CardContent>
    </Card>
  )
}
