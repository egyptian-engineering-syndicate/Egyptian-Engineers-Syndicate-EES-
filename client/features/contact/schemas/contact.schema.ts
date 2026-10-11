import { z } from "zod"

import type { ContactPageContent } from "../types/contact-content.types"

export function createContactSchema(
  messages: ContactPageContent["form"]["validation"]
) {
  return z.object({
    name: z.string().trim().min(1, messages.nameRequired),
    email: z
      .string()
      .trim()
      .min(1, messages.emailRequired)
      .email(messages.emailInvalid),
    phone: z
      .string()
      .trim()
      .min(1, messages.phoneRequired)
      .regex(/^[0-9+\s-]{8,}$/, messages.phoneInvalid),
    subject: z.string().trim().min(1, messages.subjectRequired),
    message: z.string().trim().min(1, messages.messageRequired),
  })
}

export type ContactFormValues = z.infer<ReturnType<typeof createContactSchema>>
