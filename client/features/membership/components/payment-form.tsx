"use client"

import { useMemo } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  CalendarDays,
  CreditCard,
  RectangleEllipsis,
  UserRound,
} from "lucide-react"
import { useForm, useWatch } from "react-hook-form"

import {
  fieldIconClassName,
  fieldInputClassName,
  FormField,
} from "@/components/form-field"
import { PaymentMethodSelector } from "@/components/payment-method-selector"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  paymentSuccessPath,
  recordMemberPayment,
} from "@/lib/member-activity"

import {
  createPaymentSchema,
  type PaymentFormValues,
} from "../schemas/payment.schema"
import type {
  PaymentPageContent,
  SubscriptionPlan,
} from "../types/membership-content.types"

interface PaymentFormProps {
  content: PaymentPageContent
  plan: SubscriptionPlan
}

export function PaymentForm({ content, plan }: PaymentFormProps) {
  const router = useRouter()
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
    recordMemberPayment({
      category: "membership",
      title: plan.title,
      price: plan.price,
    })
    router.push(paymentSuccessPath)
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
          <FormField
            id="cardName"
            label={content.form.cardNameLabel}
            error={errors.cardName?.message}
          >
            <Input
              id="cardName"
              placeholder={content.form.cardNamePlaceholder}
              className={fieldInputClassName(Boolean(errors.cardName))}
              {...register("cardName")}
            />
            <UserRound aria-hidden="true" className={fieldIconClassName} />
          </FormField>

          <FormField
            id="cardNumber"
            label={content.form.cardNumberLabel}
            error={errors.cardNumber?.message}
          >
            <Input
              id="cardNumber"
              inputMode="numeric"
              placeholder={content.form.cardNumberPlaceholder}
              className={fieldInputClassName(Boolean(errors.cardNumber))}
              {...register("cardNumber")}
            />
            <CreditCard aria-hidden="true" className={fieldIconClassName} />
          </FormField>

          <div className="grid gap-4 sm:grid-cols-2">
            <FormField
              id="expiry"
              label={content.form.expiryLabel}
              error={errors.expiry?.message}
            >
              <Input
                id="expiry"
                placeholder={content.form.expiryPlaceholder}
                className={fieldInputClassName(Boolean(errors.expiry))}
                {...register("expiry")}
              />
              <CalendarDays
                aria-hidden="true"
                className={fieldIconClassName}
              />
            </FormField>

            <FormField
              id="cvv"
              label={content.form.cvvLabel}
              error={errors.cvv?.message}
            >
              <Input
                id="cvv"
                inputMode="numeric"
                placeholder={content.form.cvvPlaceholder}
                className={fieldInputClassName(Boolean(errors.cvv))}
                {...register("cvv")}
              />
              <RectangleEllipsis
                aria-hidden="true"
                className={fieldIconClassName}
              />
            </FormField>
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
