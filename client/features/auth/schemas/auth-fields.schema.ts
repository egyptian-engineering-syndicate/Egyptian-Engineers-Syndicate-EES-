import { z } from "zod"

import type { SharedAuthValidationMessages } from "../types/auth-content.types"

const egyptianPhonePattern = /^(?:\+?20|0)?1[0125]\d{8}$/

export function createPhoneSchema(
  messages: Pick<SharedAuthValidationMessages, "phoneRequired" | "phoneInvalid">
) {
  return z
    .string()
    .trim()
    .min(1, messages.phoneRequired)
    .regex(egyptianPhonePattern, messages.phoneInvalid)
}

export function createPasswordSchema(
  messages: Pick<
    SharedAuthValidationMessages,
    "passwordRequired" | "passwordTooShort"
  >
) {
  return z
    .string()
    .min(1, messages.passwordRequired)
    .min(6, messages.passwordTooShort)
}
