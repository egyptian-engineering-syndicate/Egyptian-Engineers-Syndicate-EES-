"use client"

import { useMemo } from "react"
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
import { SurfaceCard } from "@/components/surface-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import {
  createCourseSubscriptionSchema,
  type CourseSubscriptionFormValues,
} from "../schemas/course-subscription.schema"
import type { CourseSubscriptionContent } from "../types/course-details-content.types"

interface CourseSubscriptionFormProps {
  content: CourseSubscriptionContent
}

export function CourseSubscriptionForm({
  content,
}: CourseSubscriptionFormProps) {
  const schema = useMemo(
    () => createCourseSubscriptionSchema(content.validation),
    [content.validation]
  )

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CourseSubscriptionFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      method: "card",
      cardName: "",
      cardNumber: "",
      expiry: "",
      cvv: "",
    },
  })

  const method = useWatch({ control, name: "method" })

  async function onSubmit() {
    await Promise.resolve()
  }

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <SurfaceCard className="mx-auto w-full max-w-3xl sm:px-8 sm:py-8">
        <h2 className="text-2xl font-extrabold text-neutral-950 sm:text-3xl">
          {content.title}
        </h2>
        <p className="mt-1 text-sm text-neutral-500">{content.subtitle}</p>

        <div className="mt-5 flex items-center justify-between gap-4 rounded-md bg-[#edf8f4] px-5 py-4">
          <span className="text-sm font-bold text-neutral-950 sm:text-base">
            {content.priceLabel}
          </span>
          <span className="text-lg font-extrabold text-brand sm:text-xl">
            {content.price}
            <span className="ms-1.5 text-sm font-medium text-neutral-500">
              {content.currency}
            </span>
          </span>
        </div>

        <fieldset className="mt-6 sm:max-w-105">
          <legend className="sr-only">{content.methodsLabel}</legend>
          <PaymentMethodSelector
            methods={content.paymentMethods}
            selected={method}
            registerProps={register("method")}
          />
        </fieldset>

        {method === "card" ? (
          <div className="mt-6 space-y-5">
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

        <div className="mt-6 flex justify-start">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="h-14 min-w-44 rounded-md bg-brand px-8 text-base font-semibold text-white hover:bg-brand-strong"
          >
            {content.form.submitLabel}
          </Button>
        </div>
      </SurfaceCard>
    </form>
  )
}
