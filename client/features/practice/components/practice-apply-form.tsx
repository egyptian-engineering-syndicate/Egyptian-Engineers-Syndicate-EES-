"use client"

import { useMemo } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  CalendarDays,
  CreditCard,
  Mail,
  Phone,
  RectangleEllipsis,
  UserRound,
} from "lucide-react"
import { useController, useForm, useWatch } from "react-hook-form"

import {
  fieldIconClassName,
  fieldInputClassName,
  FormField,
} from "@/components/form-field"
import { PaymentMethodSelector } from "@/components/payment-method-selector"
import { SurfaceCard } from "@/components/surface-card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  paymentSuccessPath,
  recordMemberPayment,
} from "@/lib/member-activity"

import {
  createPracticeApplySchema,
  type PracticeApplyFormValues,
} from "../schemas/practice-apply.schema"
import type { PracticeApplyPageContent } from "../types/practice-content.types"
import { PracticeDocumentsCard } from "./practice-documents-card"
import { PracticeMemberBanner } from "./practice-member-banner"

interface PracticeApplyFormProps {
  content: PracticeApplyPageContent
}

export function PracticeApplyForm({ content }: PracticeApplyFormProps) {
  const router = useRouter()
  const schema = useMemo(
    () => createPracticeApplySchema(content.validation),
    [content.validation]
  )

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PracticeApplyFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      phone: "",
      nationalId: "",
      syndicateCard: "",
      birthDate: "",
      fullName: "",
      professionalRoles: [],
      documents: [],
      method: "card",
      cardName: "",
      cardNumber: "",
      expiry: "",
      cvv: "",
    },
  })

  const method = useWatch({ control, name: "method" })
  const { field: professionalRoles } = useController({
    control,
    name: "professionalRoles",
  })

  async function onSubmit() {
    recordMemberPayment({
      category: "practice",
      title: content.title,
      price: content.payment.totalPrice,
    })
    router.push(paymentSuccessPath)
  }

  function toggleRole(id: string, checked: boolean) {
    professionalRoles.onChange(
      checked
        ? [...professionalRoles.value, id]
        : professionalRoles.value.filter((value) => value !== id)
    )
  }

  return (
    <form
      className="space-y-6 sm:space-y-8"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <PracticeMemberBanner member={content.member} />

      <SurfaceCard>
        <h2 className="text-lg font-extrabold text-neutral-950 sm:text-xl">
          {content.personal.title}
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <FormField
            id="email"
            label={content.personal.emailLabel}
            error={errors.email?.message}
          >
            <Input
              id="email"
              type="email"
              placeholder={content.personal.emailPlaceholder}
              className={fieldInputClassName(Boolean(errors.email))}
              {...register("email")}
            />
            <Mail aria-hidden="true" className={fieldIconClassName} />
          </FormField>
          <FormField
            id="phone"
            label={content.personal.phoneLabel}
            error={errors.phone?.message}
          >
            <Input
              id="phone"
              type="tel"
              inputMode="tel"
              placeholder={content.personal.phonePlaceholder}
              className={fieldInputClassName(Boolean(errors.phone))}
              {...register("phone")}
            />
            <Phone aria-hidden="true" className={fieldIconClassName} />
          </FormField>
          <FormField
            id="nationalId"
            label={content.personal.nationalIdLabel}
            error={errors.nationalId?.message}
          >
            <Input
              id="nationalId"
              placeholder={content.personal.nationalIdPlaceholder}
              className={fieldInputClassName(Boolean(errors.nationalId))}
              {...register("nationalId")}
            />
            <CreditCard aria-hidden="true" className={fieldIconClassName} />
          </FormField>
          <FormField
            id="syndicateCard"
            label={content.personal.syndicateCardLabel}
            error={errors.syndicateCard?.message}
          >
            <Input
              id="syndicateCard"
              placeholder={content.personal.syndicateCardPlaceholder}
              className={fieldInputClassName(Boolean(errors.syndicateCard))}
              {...register("syndicateCard")}
            />
            <CreditCard aria-hidden="true" className={fieldIconClassName} />
          </FormField>
          <FormField
            id="birthDate"
            label={content.personal.cardExpiryLabel}
            error={errors.birthDate?.message}
          >
            <Input
              id="birthDate"
              placeholder={content.personal.cardExpiryPlaceholder}
              className={fieldInputClassName(Boolean(errors.birthDate))}
              {...register("birthDate")}
            />
            <CalendarDays aria-hidden="true" className={fieldIconClassName} />
          </FormField>
          <FormField
            id="fullName"
            label={content.personal.fullNameLabel}
            error={errors.fullName?.message}
          >
            <Input
              id="fullName"
              placeholder={content.personal.fullNamePlaceholder}
              className={fieldInputClassName(Boolean(errors.fullName))}
              {...register("fullName")}
            />
            <UserRound aria-hidden="true" className={fieldIconClassName} />
          </FormField>
        </div>
      </SurfaceCard>

      <SurfaceCard>
        <h2 className="text-lg font-extrabold text-neutral-950 sm:text-xl">
          {content.professional.title}
        </h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.professional.options.map((option) => {
            const id = `role-${option.id}`

            return (
              <div key={option.id} className="flex items-start gap-3">
                <Checkbox
                  id={id}
                  checked={professionalRoles.value.includes(option.id)}
                  onCheckedChange={(checked) =>
                    toggleRole(option.id, checked === true)
                  }
                  className="mt-0.5 size-5 border-neutral-300 data-checked:border-brand data-checked:bg-brand data-checked:text-white"
                />
                <Label
                  htmlFor={id}
                  className="text-sm leading-6 font-normal text-neutral-600 sm:text-base"
                >
                  {option.label}
                </Label>
              </div>
            )
          })}
        </div>
      </SurfaceCard>

      <PracticeDocumentsCard content={content.documents} control={control} />

      <SurfaceCard>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-lg font-extrabold text-neutral-950 sm:text-xl">
            {content.payment.title}
          </h2>
          <p className="text-sm text-neutral-500">
            {content.payment.totalLabel}
            <span className="ms-2 text-lg font-extrabold text-brand">
              {content.payment.totalPrice}
              <span className="ms-1 text-sm font-medium text-neutral-500">
                {content.payment.currency}
              </span>
            </span>
          </p>
        </div>

        <fieldset className="mt-6">
          <legend className="sr-only">{content.payment.methodsLabel}</legend>
          <PaymentMethodSelector
            methods={content.payment.paymentMethods}
            selected={method}
            registerProps={register("method")}
          />
        </fieldset>

        {method === "card" ? (
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <FormField
              id="cardName"
              label={content.payment.cardNameLabel}
              error={errors.cardName?.message}
            >
              <Input
                id="cardName"
                placeholder={content.payment.cardNamePlaceholder}
                className={fieldInputClassName(Boolean(errors.cardName))}
                {...register("cardName")}
              />
              <UserRound aria-hidden="true" className={fieldIconClassName} />
            </FormField>
            <FormField
              id="cardNumber"
              label={content.payment.cardNumberLabel}
              error={errors.cardNumber?.message}
            >
              <Input
                id="cardNumber"
                placeholder={content.payment.cardNumberPlaceholder}
                className={fieldInputClassName(Boolean(errors.cardNumber))}
                {...register("cardNumber")}
              />
              <CreditCard aria-hidden="true" className={fieldIconClassName} />
            </FormField>
            <FormField
              id="expiry"
              label={content.payment.expiryLabel}
              error={errors.expiry?.message}
            >
              <Input
                id="expiry"
                placeholder={content.payment.expiryPlaceholder}
                className={fieldInputClassName(Boolean(errors.expiry))}
                {...register("expiry")}
              />
              <CalendarDays aria-hidden="true" className={fieldIconClassName} />
            </FormField>
            <FormField
              id="cvv"
              label={content.payment.cvvLabel}
              error={errors.cvv?.message}
            >
              <Input
                id="cvv"
                placeholder={content.payment.cvvPlaceholder}
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
            {content.payment.submitLabel}
          </Button>
        </div>
      </SurfaceCard>
    </form>
  )
}
