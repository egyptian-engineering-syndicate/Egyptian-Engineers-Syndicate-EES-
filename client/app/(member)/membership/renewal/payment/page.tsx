import type { Metadata } from "next"

import {
  getSubscriptionPlan,
  paymentPageContent,
  PaymentPageView,
} from "@/features/membership"
import { siteShellContent } from "@/features/site-shell"

export const metadata: Metadata = {
  title: `${paymentPageContent.title} | ${siteShellContent.brand.name}`,
  description: paymentPageContent.subtitle,
}

interface MembershipPaymentPageProps {
  searchParams: Promise<{ plan?: string | string[] }>
}

export default async function MembershipPaymentPage({
  searchParams,
}: MembershipPaymentPageProps) {
  const { plan: requestedPlan } = await searchParams
  const planId = Array.isArray(requestedPlan) ? requestedPlan[0] : requestedPlan
  const plan = getSubscriptionPlan(planId)

  return <PaymentPageView content={paymentPageContent} plan={plan} />
}
