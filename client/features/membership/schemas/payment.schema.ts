import { z } from "zod"

import type { PaymentFormValidationMessages } from "../types/membership-content.types"

const cardNumberPattern = /^\d{4}(\s?\d{4}){3}$/
const cvvPattern = /^\d{3,4}$/
const expiryPattern = /^(0[1-9]|1[0-2])\/\d{2}$/

export function createPaymentSchema(messages: PaymentFormValidationMessages) {
  return z
    .object({
      method: z.enum(["paytabs", "fawry", "card"]),
      cardName: z.string().trim().optional(),
      cardNumber: z.string().trim().optional(),
      cvv: z.string().trim().optional(),
      expiry: z.string().trim().optional(),
    })
    .superRefine((values, ctx) => {
      if (values.method !== "card") return

      if (!values.cardName) {
        ctx.addIssue({
          code: "custom",
          path: ["cardName"],
          message: messages.cardNameRequired,
        })
      }

      if (!values.cardNumber) {
        ctx.addIssue({
          code: "custom",
          path: ["cardNumber"],
          message: messages.cardNumberRequired,
        })
      } else if (!cardNumberPattern.test(values.cardNumber)) {
        ctx.addIssue({
          code: "custom",
          path: ["cardNumber"],
          message: messages.cardNumberInvalid,
        })
      }

      if (!values.cvv) {
        ctx.addIssue({
          code: "custom",
          path: ["cvv"],
          message: messages.cvvRequired,
        })
      } else if (!cvvPattern.test(values.cvv)) {
        ctx.addIssue({
          code: "custom",
          path: ["cvv"],
          message: messages.cvvInvalid,
        })
      }

      if (!values.expiry) {
        ctx.addIssue({
          code: "custom",
          path: ["expiry"],
          message: messages.expiryRequired,
        })
      } else if (!expiryPattern.test(values.expiry)) {
        ctx.addIssue({
          code: "custom",
          path: ["expiry"],
          message: messages.expiryInvalid,
        })
      }
    })
}

export type PaymentFormValues = z.infer<ReturnType<typeof createPaymentSchema>>
