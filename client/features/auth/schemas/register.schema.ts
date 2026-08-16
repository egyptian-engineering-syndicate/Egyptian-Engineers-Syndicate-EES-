import { z } from "zod"

import type { RegisterValidationMessages } from "../types/auth-content.types"
import { createPasswordSchema, createPhoneSchema } from "./auth-fields.schema"

const nationalIdPattern = /^\d{14}$/
const membershipNumberPattern = /^\d+$/

export function createRegisterSchema(messages: RegisterValidationMessages) {
  return z.object({
    nationalId: z
      .string()
      .trim()
      .min(1, messages.nationalIdRequired)
      .regex(nationalIdPattern, messages.nationalIdInvalid),
    membershipNumber: z
      .string()
      .trim()
      .min(1, messages.membershipNumberRequired)
      .regex(membershipNumberPattern, messages.membershipNumberInvalid),
    name: z
      .string()
      .trim()
      .min(1, messages.nameRequired)
      .min(2, messages.nameTooShort),
    phone: createPhoneSchema(messages),
    password: createPasswordSchema(messages),
  })
}

export type RegisterFormValues = z.infer<
  ReturnType<typeof createRegisterSchema>
>
