import { z } from "zod"

import type { ProfileEditFormContent } from "../types/profile-content.types"

export function createProfileEditSchema(
  messages: ProfileEditFormContent["validation"]
) {
  return z.object({
    email: z
      .string()
      .trim()
      .min(1, messages.emailRequired)
      .email(messages.emailInvalid),
    name: z.string().trim().min(1, messages.nameRequired),
    phone: z
      .string()
      .trim()
      .min(1, messages.phoneRequired)
      .regex(/^[0-9+\s-]{8,}$/, messages.phoneInvalid),
    newPassword: z
      .string()
      .min(1, messages.newPasswordRequired)
      .min(6, messages.newPasswordTooShort),
    currentPassword: z.string().min(1, messages.currentPasswordRequired),
  })
}

export type ProfileEditFormValues = z.infer<
  ReturnType<typeof createProfileEditSchema>
>
