"use client"

import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

import type { OtpConfirmationContent } from "../types/auth-content.types"

interface OtpConfirmationPanelProps {
  content: OtpConfirmationContent
  nextHref: string
}

export function OtpConfirmationPanel({
  content,
  nextHref,
}: OtpConfirmationPanelProps) {
  const router = useRouter()

  return (
    <div className="mt-5">
      <fieldset>
        <legend className="sr-only">{content.description}</legend>
        <div className="flex gap-2 sm:gap-7" dir="rtl">
          {content.digitLabels.map((label, index) => {
            const active = index === 0

            return (
              <Input
                key={label}
                type="text"
                inputMode="numeric"
                maxLength={1}
                defaultValue={active ? "1" : undefined}
                placeholder={active ? undefined : "-"}
                aria-label={label}
                dir="ltr"
                className={cn(
                  "size-12 rounded-lg border bg-white p-0 text-center text-2xl font-bold shadow-none placeholder:text-neutral-400 focus-visible:ring-3 sm:size-[68px] sm:text-[2.5rem]",
                  active
                    ? "border-brand bg-brand/[0.025] text-brand focus-visible:border-brand focus-visible:ring-brand/10"
                    : "border-neutral-400 text-neutral-700 focus-visible:border-brand focus-visible:ring-brand/10"
                )}
              />
            )
          })}
        </div>
      </fieldset>

      <Button
        type="button"
        onClick={() => router.replace(nextHref)}
        className="mt-5 h-[60px] min-w-[174px] rounded-md bg-brand px-8 text-base font-medium text-white hover:bg-brand-strong"
      >
        {content.confirmLabel}
      </Button>
    </div>
  )
}
