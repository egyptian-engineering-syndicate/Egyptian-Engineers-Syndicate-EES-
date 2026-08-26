"use client"

import type { ComponentProps, ReactNode } from "react"
import { useMemo } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  CalendarDays,
  CreditCard,
  RectangleEllipsis,
  UserRound,
} from "lucide-react"
import { useForm, useWatch } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

import {
  createPaymentSchema,
  type PaymentFormValues,
} from "../schemas/payment.schema"
import type { PaymentPageContent } from "../types/membership-content.types"
import { PaymentMethodSelector } from "./payment-method-selector"

interface PaymentFormProps {
  content: PaymentPageContent
}

export function PaymentForm({ content }: PaymentFormProps) {
  const schema = useMemo(
    () => createPaymentSchema(content.form.validation),
    [content.form.validation]
  )
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<PaymentFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      method: "card",
      cardName: "",
      cardNumber: "",
      cvv: "",
      expiry: "",
    },
  })

  const method = useWatch({ control, name: "method" })

  async function onSubmit() {
    await Promise.resolve()
  }

  return (
    <form className="space-y-6" noValidate onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <legend className="sr-only">{content.methodsLabel}</legend>
        <PaymentMethodSelector
          methods={content.paymentMethods}
          selected={method}
          registerProps={register("method")}
        />
      </fieldset>

      {method === "card" ? (
        <div className="space-y-4">
          <PaymentField
            id="cardName"
            label={content.form.cardNameLabel}
            error={errors.cardName?.message}
          >
            <Input
              id="cardName"
              placeholder={content.form.cardNamePlaceholder}
              className={paymentInputClassName(Boolean(errors.cardName))}
              {...register("cardName")}
            />
            <UserRound aria-hidden="true" className={paymentIconClassName} />
          </PaymentField>

          <PaymentField
            id="cardNumber"
            label={content.form.cardNumberLabel}
            error={errors.cardNumber?.message}
          >
            <Input
              id="cardNumber"
              inputMode="numeric"
              placeholder={content.form.cardNumberPlaceholder}
              className={paymentInputClassName(Boolean(errors.cardNumber))}
              {...register("cardNumber")}
            />
            <CreditCard aria-hidden="true" className={paymentIconClassName} />
          </PaymentField>

          <div className="grid gap-4 sm:grid-cols-2">
            <PaymentField
              id="expiry"
              label={content.form.expiryLabel}
              error={errors.expiry?.message}
            >
              <Input
                id="expiry"
                placeholder={content.form.expiryPlaceholder}
                className={paymentInputClassName(Boolean(errors.expiry))}
                {...register("expiry")}
              />
              <CalendarDays
                aria-hidden="true"
                className={paymentIconClassName}
              />
            </PaymentField>

            <PaymentField
              id="cvv"
              label={content.form.cvvLabel}
              error={errors.cvv?.message}
            >
              <Input
                id="cvv"
                inputMode="numeric"
                placeholder={content.form.cvvPlaceholder}
                className={paymentInputClassName(Boolean(errors.cvv))}
                {...register("cvv")}
              />
              <RectangleEllipsis
                aria-hidden="true"
                className={paymentIconClassName}
              />
            </PaymentField>
          </div>
        </div>
      ) : null}

      <div className="flex justify-start pt-2">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-14 min-w-44 rounded-md bg-brand px-8 text-base font-semibold text-white hover:bg-brand-strong sm:text-lg"
        >
          {content.form.submitLabel}
        </Button>
      </div>
    </form>
  )
}

interface PaymentFieldProps {
  id: string
  label: string
  error?: string
  children: ReactNode
}

function PaymentField({ id, label, error, children }: PaymentFieldProps) {
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

const paymentIconClassName =
  "pointer-events-none absolute top-1/2 start-4 size-5 -translate-y-1/2 text-brand"

function paymentInputClassName(
  invalid: boolean
): ComponentProps<typeof Input>["className"] {
  return cn(
    "h-14 w-full rounded-md border-transparent bg-neutral-100 ps-12 pe-4 text-start text-base text-neutral-900 shadow-none transition placeholder:text-neutral-400 focus-visible:border-brand focus-visible:bg-white focus-visible:ring-3 focus-visible:ring-brand/10",
    invalid &&
      "border-red-500 bg-red-50/50 focus:border-red-500 focus:ring-red-100"
  )
}
