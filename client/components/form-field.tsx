import type { ComponentProps, ReactNode } from "react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

interface FormFieldProps {
  id: string
  label: string
  error?: string
  children: ReactNode
}

export function FormField({ id, label, error, children }: FormFieldProps) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between gap-4">
        <Label htmlFor={id} className="text-sm text-neutral-600 sm:text-base">
          {label}
        </Label>
        {error ? (
          <span className="text-xs font-medium text-red-600" role="alert">
            {error}
          </span>
        ) : null}
      </div>
      <div className="relative">{children}</div>
    </div>
  )
}

export const fieldIconClassName =
  "pointer-events-none absolute top-1/2 start-4 size-5 -translate-y-1/2 text-brand"

export function fieldInputClassName(
  invalid: boolean,
  padding = "ps-12 pe-4"
): ComponentProps<typeof Input>["className"] {
  return cn(
    "h-14 w-full rounded-md border-transparent bg-neutral-100 text-start text-base text-neutral-900 shadow-none transition placeholder:text-neutral-400 focus-visible:border-brand focus-visible:bg-white focus-visible:ring-3 focus-visible:ring-brand/10",
    padding,
    invalid &&
      "border-red-500 bg-red-50/50 focus:border-red-500 focus:ring-red-100"
  )
}
