import type { Metadata } from "next"

import { LoginPageView, loginPageContent } from "@/features/auth"
import { siteShellContent } from "@/features/site-shell"

export const metadata: Metadata = {
  title: `${loginPageContent.title} | ${siteShellContent.brand.name}`,
  description: loginPageContent.description,
}

export default function LoginPage() {
  return <LoginPageView content={loginPageContent} />
}
