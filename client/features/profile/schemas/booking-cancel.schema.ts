import { z } from "zod"

import type { BookingCancelDialogContent } from "../types/booking-details-content.types"

export function createBookingCancelSchema(
  messages: BookingCancelDialogContent["validation"]
) {
  return z.object({
    bankAccount: z.string().trim().min(1, messages.bankAccountRequired),
    bankName: z.string().trim().min(1, messages.bankNameRequired),
  })
}

export type BookingCancelFormValues = z.infer<
  ReturnType<typeof createBookingCancelSchema>
>
