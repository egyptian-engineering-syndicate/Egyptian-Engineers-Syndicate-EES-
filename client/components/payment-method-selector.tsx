"use client"

import { CreditCard, Smartphone, Wallet } from "lucide-react"
import type { UseFormRegisterReturn } from "react-hook-form"

import { cn } from "@/lib/utils"

export interface PaymentMethod {
  id: "paytabs" | "fawry" | "card"
  label: string
}

const iconMap = {
  paytabs: Wallet,
  fawry: Smartphone,
  card: CreditCard,
} satisfies Record<PaymentMethod["id"], typeof CreditCard>

interface PaymentMethodSelectorProps {
  methods: PaymentMethod[]
  selected: PaymentMethod["id"]
  registerProps: UseFormRegisterReturn<"method">
}

export function PaymentMethodSelector({
  methods,
  selected,
  registerProps,
}: PaymentMethodSelectorProps) {
  return (
    <div className="grid grid-cols-3 gap-3 sm:gap-4">
      {methods.map((method) => {
        const Icon = iconMap[method.id]
        const isSelected = selected === method.id

        return (
          <label
            key={method.id}
            className={cn(
              "flex cursor-pointer flex-col items-center gap-3 rounded-md border bg-white px-3 py-4 text-center transition-colors",
              isSelected
                ? "border-brand bg-brand/5"
                : "border-neutral-200 hover:border-brand/40"
            )}
          >
            <span className="flex w-full items-center justify-between">
              <Icon
                aria-hidden="true"
                className="size-5 text-brand"
                strokeWidth={1.8}
              />
              <span
                aria-hidden="true"
                className={cn(
                  "grid size-4 place-items-center rounded-full border-2",
                  isSelected ? "border-brand" : "border-neutral-300"
                )}
              >
                {isSelected ? (
                  <span className="size-2 rounded-full bg-brand" />
                ) : null}
              </span>
            </span>
            <input
              type="radio"
              value={method.id}
              className="sr-only"
              {...registerProps}
            />
            <span className="text-sm font-medium text-neutral-700 sm:text-base">
              {method.label}
            </span>
          </label>
        )
      })}
    </div>
  )
}
