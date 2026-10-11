"use client"

import { useEffect, useMemo } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { fieldInputClassName } from "@/components/form-field"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

import {
  createBookingCancelSchema,
  type BookingCancelFormValues,
} from "../schemas/booking-cancel.schema"
import type { BookingCancelDialogContent } from "../types/booking-details-content.types"

interface BookingCancelDialogProps {
  open: boolean
  onClose: () => void
  content: BookingCancelDialogContent
}

export function BookingCancelDialog({
  open,
  onClose,
  content,
}: BookingCancelDialogProps) {
  const schema = useMemo(
    () => createBookingCancelSchema(content.validation),
    [content.validation]
  )
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingCancelFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      bankAccount: "",
      bankName: "",
    },
  })

  useEffect(() => {
    if (!open) return

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose()
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [open, onClose])

  if (!open) return null

  function onSubmit() {
    reset()
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        type="button"
        aria-label={content.closeLabel}
        className="absolute inset-0 bg-black/55"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-cancel-title"
        className="relative z-10 w-full max-w-[560px] rounded-xl bg-white px-6 py-8 shadow-[0_24px_60px_rgba(0,0,0,.18)] sm:px-10"
      >
        <h2
          id="booking-cancel-title"
          className="text-center text-2xl font-extrabold text-neutral-950"
        >
          {content.title}
        </h2>

        <p className="mx-auto mt-4 w-fit rounded-md bg-[#edf8f4] px-5 py-2 text-sm font-medium text-brand">
          {content.feeLabel}
        </p>

        <p className="mt-4 text-center text-sm leading-7 text-neutral-500">
          {content.description}
        </p>

        <form
          className="mt-6 space-y-5"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="cancel-bank-account" className="sr-only">
                {content.bankAccountLabel}
              </label>
              <Input
                id="cancel-bank-account"
                placeholder={content.bankAccountPlaceholder}
                className={cn(
                  fieldInputClassName(Boolean(errors.bankAccount), "px-4"),
                  "text-center"
                )}
                {...register("bankAccount")}
              />
              {errors.bankAccount?.message ? (
                <p className="mt-1.5 text-center text-xs font-medium text-red-600">
                  {errors.bankAccount.message}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor="cancel-bank-name" className="sr-only">
                {content.bankNameLabel}
              </label>
              <Input
                id="cancel-bank-name"
                placeholder={content.bankNamePlaceholder}
                className={cn(
                  fieldInputClassName(Boolean(errors.bankName), "px-4"),
                  "text-center"
                )}
                {...register("bankName")}
              />
              {errors.bankName?.message ? (
                <p className="mt-1.5 text-center text-xs font-medium text-red-600">
                  {errors.bankName.message}
                </p>
              ) : null}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 pt-1">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="h-12 min-w-36 rounded-md border-brand bg-white px-8 text-base font-semibold text-brand hover:bg-[#edf8f4] hover:text-brand"
            >
              {content.backLabel}
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              variant="outline"
              className="h-12 min-w-36 rounded-md border-red-500/70 bg-white px-8 text-base font-semibold text-red-600 hover:bg-red-50 hover:text-red-700"
            >
              {content.confirmCancelLabel}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
