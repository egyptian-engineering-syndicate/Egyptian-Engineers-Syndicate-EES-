"use client"

import { useMemo } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  CalendarDays,
  ChevronDown,
  CreditCard,
  Mail,
  Phone,
  RectangleEllipsis,
  Trash2,
  UserRound,
} from "lucide-react"
import { useFieldArray, useForm, useWatch } from "react-hook-form"

import {
  fieldIconClassName,
  fieldInputClassName,
  FormField,
} from "@/components/form-field"
import { PaymentMethodSelector } from "@/components/payment-method-selector"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

import {
  createTripBookingSchema,
  type TripBookingFormValues,
} from "../schemas/trip-booking.schema"
import type {
  TravelersContent,
  TripDetailsPageContent,
} from "../types/trip-details-content.types"
import { CancellationPolicyCard } from "./cancellation-policy-card"

function emptyTraveler(travelers: TravelersContent) {
  return {
    title: travelers.titleOptions[0].value,
    firstName: "",
    fatherName: "",
    familyName: "",
  }
}

interface TripBookingFormProps {
  content: TripDetailsPageContent
}

export function TripBookingForm({ content }: TripBookingFormProps) {
  const { cancellationPolicy, contact, travelers, payment, validation } =
    content

  const schema = useMemo(
    () => createTripBookingSchema(validation),
    [validation]
  )

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TripBookingFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      phone: "",
      email: "",
      travelers: Array.from({ length: travelers.initialCount }, () =>
        emptyTraveler(travelers)
      ),
      method: "card",
      cardName: "",
      cardNumber: "",
      expiry: "",
      cvv: "",
    },
  })

  const travelerFields = useFieldArray({ control, name: "travelers" })
  const method = useWatch({ control, name: "method" })

  async function onSubmit() {
    await Promise.resolve()
  }

  return (
    <form
      className="space-y-6 sm:space-y-8"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        <CancellationPolicyCard content={cancellationPolicy} />

        <Card className={bookingCardClassName}>
          <h2 className="text-lg font-extrabold text-neutral-950 sm:text-xl">
            {contact.title}
          </h2>

          <div className="mt-4 space-y-4">
            <FormField
              id="phone"
              label={contact.phoneLabel}
              error={errors.phone?.message}
            >
              <Input
                id="phone"
                type="tel"
                inputMode="tel"
                placeholder={contact.phonePlaceholder}
                className={fieldInputClassName(Boolean(errors.phone))}
                {...register("phone")}
              />
              <Phone aria-hidden="true" className={fieldIconClassName} />
            </FormField>

            <FormField
              id="email"
              label={contact.emailLabel}
              error={errors.email?.message}
            >
              <Input
                id="email"
                type="email"
                placeholder={contact.emailPlaceholder}
                className={fieldInputClassName(Boolean(errors.email))}
                {...register("email")}
              />
              <Mail aria-hidden="true" className={fieldIconClassName} />
            </FormField>
          </div>
        </Card>
      </div>

      <Card className={bookingCardClassName}>
        <h2 className="text-lg font-extrabold text-neutral-950 sm:text-xl">
          {travelers.title}
        </h2>

        <ol className="mt-4 space-y-5">
          {travelerFields.fields.map((field, index) => (
            <li key={field.id}>
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-bold text-neutral-950">
                  {travelers.travelerLabel} {index + 1}
                </p>

                {index > 0 ? (
                  <button
                    type="button"
                    onClick={() => travelerFields.remove(index)}
                    className="flex items-center gap-1.5 text-sm font-medium text-red-600 hover:text-red-700"
                  >
                    <Trash2 aria-hidden="true" className="size-4" />
                    {travelers.removeTravelerLabel}
                    <span className="sr-only">
                      {` — ${travelers.travelerLabel} ${index + 1}`}
                    </span>
                  </button>
                ) : null}
              </div>

              <div className="mt-3 grid gap-4 sm:grid-cols-3">
                <FormField
                  id={`travelers.${index}.firstName`}
                  label={travelers.firstNameLabel}
                  error={errors.travelers?.[index]?.firstName?.message}
                >
                  <div
                    className={cn(
                      "flex h-14 w-full items-center rounded-md bg-neutral-100 transition focus-within:bg-white focus-within:ring-3 focus-within:ring-brand/10",
                      errors.travelers?.[index]?.firstName &&
                        "bg-red-50/50 ring-1 ring-red-500"
                    )}
                  >
                    <div className="relative shrink-0">
                      <Label
                        htmlFor={`travelers.${index}.title`}
                        className="sr-only"
                      >
                        {travelers.titleLabel}
                      </Label>
                      <select
                        id={`travelers.${index}.title`}
                        className="h-14 cursor-pointer appearance-none bg-transparent ps-4 pe-8 text-sm text-neutral-700 outline-none"
                        {...register(`travelers.${index}.title`)}
                      >
                        {travelers.titleOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-e-2.5 top-1/2 size-4 -translate-y-1/2 text-neutral-500"
                      />
                    </div>

                    <input
                      id={`travelers.${index}.firstName`}
                      placeholder={travelers.firstNamePlaceholder}
                      className="h-14 w-full min-w-0 bg-transparent pe-4 text-base text-neutral-900 outline-none placeholder:text-neutral-400"
                      {...register(`travelers.${index}.firstName`)}
                    />
                  </div>
                </FormField>

                <FormField
                  id={`travelers.${index}.fatherName`}
                  label={travelers.fatherNameLabel}
                  error={errors.travelers?.[index]?.fatherName?.message}
                >
                  <Input
                    id={`travelers.${index}.fatherName`}
                    placeholder={travelers.fatherNamePlaceholder}
                    className={fieldInputClassName(
                      Boolean(errors.travelers?.[index]?.fatherName),
                      "px-4"
                    )}
                    {...register(`travelers.${index}.fatherName`)}
                  />
                </FormField>

                <FormField
                  id={`travelers.${index}.familyName`}
                  label={travelers.familyNameLabel}
                  error={errors.travelers?.[index]?.familyName?.message}
                >
                  <Input
                    id={`travelers.${index}.familyName`}
                    placeholder={travelers.familyNamePlaceholder}
                    className={fieldInputClassName(
                      Boolean(errors.travelers?.[index]?.familyName),
                      "px-4"
                    )}
                    {...register(`travelers.${index}.familyName`)}
                  />
                </FormField>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-6 flex justify-start">
          <Button
            type="button"
            variant="outline"
            onClick={() => travelerFields.append(emptyTraveler(travelers))}
            className="h-14 rounded-md border-neutral-200 bg-white px-7 text-sm font-medium text-neutral-700"
          >
            {travelers.addTravelerLabel}
          </Button>
        </div>
      </Card>

      <Card className={bookingCardClassName}>
        <h2 className="text-2xl font-extrabold text-neutral-950 sm:text-3xl">
          {payment.title}
        </h2>
        <p className="mt-1 text-sm text-neutral-500">{payment.subtitle}</p>

        <div className="mt-5 flex items-center justify-between gap-4 rounded-md bg-[#edf8f4] px-5 py-4">
          <span className="text-sm font-bold text-neutral-950 sm:text-base">
            {payment.totalLabel}
          </span>
          <span className="text-lg font-extrabold text-brand sm:text-xl">
            {payment.totalPrice}
            <span className="ms-1.5 text-sm font-medium text-neutral-500">
              {payment.currency}
            </span>
          </span>
        </div>

        <fieldset className="mt-6 lg:max-w-155">
          <legend className="sr-only">{payment.methodsLabel}</legend>
          <PaymentMethodSelector
            methods={payment.paymentMethods}
            selected={method}
            registerProps={register("method")}
          />
        </fieldset>

        {method === "card" ? (
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <FormField
              id="cardName"
              label={payment.form.cardNameLabel}
              error={errors.cardName?.message}
            >
              <Input
                id="cardName"
                placeholder={payment.form.cardNamePlaceholder}
                className={fieldInputClassName(Boolean(errors.cardName))}
                {...register("cardName")}
              />
              <UserRound aria-hidden="true" className={fieldIconClassName} />
            </FormField>

            <FormField
              id="cardNumber"
              label={payment.form.cardNumberLabel}
              error={errors.cardNumber?.message}
            >
              <Input
                id="cardNumber"
                inputMode="numeric"
                placeholder={payment.form.cardNumberPlaceholder}
                className={fieldInputClassName(Boolean(errors.cardNumber))}
                {...register("cardNumber")}
              />
              <CreditCard aria-hidden="true" className={fieldIconClassName} />
            </FormField>

            <FormField
              id="expiry"
              label={payment.form.expiryLabel}
              error={errors.expiry?.message}
            >
              <Input
                id="expiry"
                placeholder={payment.form.expiryPlaceholder}
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
              label={payment.form.cvvLabel}
              error={errors.cvv?.message}
            >
              <Input
                id="cvv"
                inputMode="numeric"
                placeholder={payment.form.cvvPlaceholder}
                className={fieldInputClassName(Boolean(errors.cvv))}
                {...register("cvv")}
              />
              <RectangleEllipsis
                aria-hidden="true"
                className={fieldIconClassName}
              />
            </FormField>
          </div>
        ) : null}

        <div className="mt-6 flex justify-start">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="h-14 min-w-44 rounded-md bg-brand px-8 text-base font-semibold text-white hover:bg-brand-strong"
          >
            {payment.form.submitLabel}
          </Button>
        </div>
      </Card>
    </form>
  )
}

const bookingCardClassName =
  "gap-0 rounded-xl border-0 bg-white px-6 py-7 shadow-[0_12px_28px_rgba(0,0,0,.06)] ring-0 sm:px-7"
