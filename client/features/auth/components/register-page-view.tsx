import type { RegisterPageContent } from "../types/auth-content.types"
import { AuthPageLayout } from "./auth-page-layout"
import { RegisterForm } from "./register-form"

interface RegisterPageViewProps {
  content: RegisterPageContent
}

export function RegisterPageView({ content }: RegisterPageViewProps) {
  return (
    <AuthPageLayout content={content}>
      <RegisterForm content={content.form} />
    </AuthPageLayout>
  )
}
