"use client"

import { useMemo } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  BriefcaseBusiness,
  CalendarDays,
  CreditCard,
  Hash,
  Mail,
  Phone,
  UserRound,
  Wallet,
} from "lucide-react"
import { useForm } from "react-hook-form"

import {
  fieldIconClassName,
  fieldInputClassName,
  FormField,
} from "@/components/form-field"
import { SurfaceCard } from "@/components/surface-card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

import {
  createPensionApplySchema,
  type PensionApplyFormValues,
} from "../schemas/pension-apply.schema"
import type { PensionApplyPageContent } from "../types/pensions-content.types"
import { PensionAttachedDocumentsCard } from "./pension-attached-documents-card"

interface PensionApplyFormProps {
  content: PensionApplyPageContent
}

export function PensionApplyForm({ content }: PensionApplyFormProps) {
  const router = useRouter()
  const requiresEligibility = content.eligibilityOptions.length > 0
  const schema = useMemo(
    () => createPensionApplySchema(content.validation, requiresEligibility),
    [content.validation, requiresEligibility]
  )

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<PensionApplyFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      eligibilityType: content.eligibilityOptions[0]?.id ?? "",
      fullName: "",
      email: "",
      nationalId: "",
      phone: "",
      birthDate: "",
      lastEmployer: "",
      specialization: "",
      membershipNumber: "",
      serviceYears: "",
      basicSalary: "",
      documents: [],
      notes: "",
    },
  })

  const eligibilityType = watch("eligibilityType")

  async function onSubmit() {
    router.replace(content.documents.backHref)
  }

  return (
    <form
      className="space-y-6 sm:space-y-8"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <SurfaceCard>
        <h1 className="text-2xl font-extrabold text-brand sm:text-3xl">
          {content.applyPrefix} {content.title}
        </h1>
        <p className="mt-3 text-sm leading-7 text-neutral-600 sm:text-base">
          {content.description}
        </p>
        <p className="mt-4 text-sm">
          <span className="font-bold text-brand">{content.eligibilityLabel}</span>{" "}
          <span className="text-neutral-600">{content.eligibility}</span>
        </p>

        {requiresEligibility ? (
          <fieldset className="mt-5">
            <legend className="sr-only">{content.eligibilityLabel}</legend>
            <div className="flex flex-wrap gap-3">
              {content.eligibilityOptions.map((option) => (
                <Label
                  key={option.id}
                  className={cn(
                    "flex cursor-pointer items-center gap-2 rounded-md border px-4 py-2.5 text-sm font-medium transition-colors",
                    eligibilityType === option.id
                      ? "border-brand bg-brand/5 text-brand"
                      : "border-neutral-200 bg-white text-neutral-600 hover:border-brand/40"
                  )}
                >
                  <input
                    type="radio"
                    value={option.id}
                    className="sr-only"
                    {...register("eligibilityType")}
                  />
                  <span
                    aria-hidden="true"
                    className={cn(
                      "grid size-4 place-items-center rounded-full border-2",
                      eligibilityType === option.id
                        ? "border-brand"
                        : "border-neutral-300"
                    )}
                  >
                    {eligibilityType === option.id ? (
                      <span className="size-2 rounded-full bg-brand" />
                    ) : null}
                  </span>
                  {option.label}
                </Label>
              ))}
            </div>
          </fieldset>
        ) : null}
      </SurfaceCard>

      <SurfaceCard>
        <h2 className="text-lg font-extrabold text-neutral-950 sm:text-xl">
          {content.personal.title}
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
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
            id="birthDate"
            label={content.personal.birthDateLabel}
            error={errors.birthDate?.message}
          >
            <Input
              id="birthDate"
              placeholder={content.personal.birthDatePlaceholder}
              className={fieldInputClassName(Boolean(errors.birthDate))}
              {...register("birthDate")}
            />
            <CalendarDays aria-hidden="true" className={fieldIconClassName} />
          </FormField>
        </div>
      </SurfaceCard>

      <SurfaceCard>
        <h2 className="text-lg font-extrabold text-neutral-950 sm:text-xl">
          {content.professional.title}
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <FormField
            id="lastEmployer"
            label={content.professional.lastEmployerLabel}
            error={errors.lastEmployer?.message}
          >
            <Input
              id="lastEmployer"
              placeholder={content.professional.lastEmployerPlaceholder}
              className={fieldInputClassName(Boolean(errors.lastEmployer))}
              {...register("lastEmployer")}
            />
            <BriefcaseBusiness
              aria-hidden="true"
              className={fieldIconClassName}
            />
          </FormField>
          <FormField
            id="specialization"
            label={content.professional.specializationLabel}
            error={errors.specialization?.message}
          >
            <Input
              id="specialization"
              placeholder={content.professional.specializationPlaceholder}
              className={fieldInputClassName(Boolean(errors.specialization))}
              {...register("specialization")}
            />
            <UserRound aria-hidden="true" className={fieldIconClassName} />
          </FormField>
          <FormField
            id="membershipNumber"
            label={content.professional.membershipNumberLabel}
            error={errors.membershipNumber?.message}
          >
            <Input
              id="membershipNumber"
              placeholder={content.professional.membershipNumberPlaceholder}
              className={fieldInputClassName(Boolean(errors.membershipNumber))}
              {...register("membershipNumber")}
            />
            <Hash aria-hidden="true" className={fieldIconClassName} />
          </FormField>
          <FormField
            id="serviceYears"
            label={content.professional.serviceYearsLabel}
            error={errors.serviceYears?.message}
          >
            <Input
              id="serviceYears"
              placeholder={content.professional.serviceYearsPlaceholder}
              className={fieldInputClassName(Boolean(errors.serviceYears))}
              {...register("serviceYears")}
            />
            <CalendarDays aria-hidden="true" className={fieldIconClassName} />
          </FormField>
          <FormField
            id="basicSalary"
            label={content.professional.basicSalaryLabel}
            error={errors.basicSalary?.message}
          >
            <Input
              id="basicSalary"
              placeholder={content.professional.basicSalaryPlaceholder}
              className={fieldInputClassName(Boolean(errors.basicSalary))}
              {...register("basicSalary")}
            />
            <Wallet aria-hidden="true" className={fieldIconClassName} />
          </FormField>
        </div>
      </SurfaceCard>

      <PensionAttachedDocumentsCard
        content={content.documents}
        control={control}
        notesError={errors.notes?.message}
        isSubmitting={isSubmitting}
        register={register}
      />
    </form>
  )
}
