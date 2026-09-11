import type {
  AuthPageContent,
  RegistrationConfirmationPageContent,
  RegistrationConfirmationView,
} from "../types/auth-content.types"
import { AuthPageLayout } from "./auth-page-layout"
import { NewPasswordConfirmationPanel } from "./new-password-confirmation-panel"
import { OtpConfirmationPanel } from "./otp-confirmation-panel"

interface RegistrationConfirmationPageViewProps {
  content: RegistrationConfirmationPageContent
  view: RegistrationConfirmationView
}

export function RegistrationConfirmationPageView({
  content,
  view,
}: RegistrationConfirmationPageViewProps) {
  const variant = content.variants[view]
  const layoutContent: AuthPageContent = {
    title: variant.title,
    description:
      variant.kind === "otp"
        ? `${variant.description} \u2066${variant.phoneNumber}\u2069`
        : variant.description,
    breadcrumbs: content.breadcrumbs,
    image: content.image,
  }

  return (
    <AuthPageLayout
      content={layoutContent}
      cardClassName="max-w-[938px]"
      cardContentClassName="px-6 py-6 sm:px-6 sm:py-6 lg:px-6"
      imageClassName="object-[center_48%]"
      showImageOverlay={false}
    >
      {variant.kind === "otp" ? (
        <OtpConfirmationPanel content={variant} />
      ) : (
        <NewPasswordConfirmationPanel content={variant} />
      )}
    </AuthPageLayout>
  )
}
