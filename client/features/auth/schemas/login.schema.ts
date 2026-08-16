import { z } from "zod"

import type { SharedAuthValidationMessages } from "../types/auth-content.types"
import { createPasswordSchema, createPhoneSchema } from "./auth-fields.schema"

export function createLoginSchema(messages: SharedAuthValidationMessages) {
  return z.object({
    phone: createPhoneSchema(messages),
    password: createPasswordSchema(messages),
  })
}

export type LoginFormValues = z.infer<ReturnType<typeof createLoginSchema>>
