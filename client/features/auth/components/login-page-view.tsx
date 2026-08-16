import type { LoginPageContent } from "../types/auth-content.types"
import { AuthPageLayout } from "./auth-page-layout"
import { LoginForm } from "./login-form"

interface LoginPageViewProps {
  content: LoginPageContent
}

export function LoginPageView({ content }: LoginPageViewProps) {
  return (
    <AuthPageLayout content={content}>
      <LoginForm content={content.form} />
    </AuthPageLayout>
  )
}
