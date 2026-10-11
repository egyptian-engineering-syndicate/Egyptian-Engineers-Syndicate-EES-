import type { Metadata } from "next"

import { PaymentSuccessPageView } from "@/features/payments"
import { siteShellContent } from "@/features/site-shell"

export const metadata: Metadata = {
  title: `تأكيد الدفع | ${siteShellContent.brand.name}`,
  description: "تم إتمام عملية الدفع بنجاح.",
}

export default function PaymentSuccessPage() {
  return <PaymentSuccessPageView />
}
