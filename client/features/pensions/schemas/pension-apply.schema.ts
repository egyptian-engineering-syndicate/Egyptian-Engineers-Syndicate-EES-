import { z } from "zod"

import type { PensionApplyValidationMessages } from "../types/pensions-content.types"

const phonePattern = /^[\d+\s-]{8,}$/

export function createPensionApplySchema(
  messages: PensionApplyValidationMessages,
  requiresEligibility: boolean
) {
  return z.object({
    eligibilityType: requiresEligibility
      ? z.string().min(1, messages.eligibilityRequired)
      : z.string().optional(),
    fullName: z.string().trim().min(1, messages.fullNameRequired),
    email: z
      .string()
      .trim()
      .min(1, messages.emailRequired)
      .pipe(z.email(messages.emailInvalid)),
    nationalId: z.string().trim().min(1, messages.nationalIdRequired),
    phone: z
      .string()
      .trim()
      .min(1, messages.phoneRequired)
      .regex(phonePattern, messages.phoneInvalid),
    birthDate: z.string().trim().min(1, messages.birthDateRequired),
    lastEmployer: z.string().trim().min(1, messages.lastEmployerRequired),
    specialization: z.string().trim().min(1, messages.specializationRequired),
    membershipNumber: z
      .string()
      .trim()
      .min(1, messages.membershipNumberRequired),
    serviceYears: z.string().trim().min(1, messages.serviceYearsRequired),
    basicSalary: z.string().trim().min(1, messages.basicSalaryRequired),
    documents: z.array(z.string()),
    notes: z.string().trim().max(500, messages.notesTooLong).optional(),
  })
}

export type PensionApplyFormValues = z.infer<
  ReturnType<typeof createPensionApplySchema>
>
