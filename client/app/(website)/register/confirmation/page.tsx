import type { Metadata } from "next"

import {
  RegistrationConfirmationPageView,
  registrationConfirmationPageContent,
  type RegistrationConfirmationView,
} from "@/features/auth"
import { siteShellContent } from "@/features/site-shell"

export const metadata: Metadata = {
  title: `تأكيد إنشاء الحساب | ${siteShellContent.brand.name}`,
  description: "تأكيد بيانات إنشاء الحساب",
}

interface RegistrationConfirmationPageProps {
  searchParams: Promise<{
    view?: string | string[]
  }>
}

const confirmationViews: RegistrationConfirmationView[] = [
  "account",
  "phone",
  "password",
]

export default async function RegistrationConfirmationPage({
  searchParams,
}: RegistrationConfirmationPageProps) {
  const { view: requestedView } = await searchParams
  const normalizedView = Array.isArray(requestedView)
    ? requestedView[0]
    : requestedView
  const view = confirmationViews.includes(
    normalizedView as RegistrationConfirmationView
  )
    ? (normalizedView as RegistrationConfirmationView)
    : "account"

  return (
    <RegistrationConfirmationPageView
      content={registrationConfirmationPageContent}
      view={view}
    />
  )
}
