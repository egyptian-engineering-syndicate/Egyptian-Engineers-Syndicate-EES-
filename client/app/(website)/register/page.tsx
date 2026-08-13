import type { Metadata } from "next"

import { RegisterPageView, registerPageContent } from "@/features/auth"
import { siteShellContent } from "@/features/site-shell"

export const metadata: Metadata = {
  title: `${registerPageContent.title} | ${siteShellContent.brand.name}`,
  description: registerPageContent.description,
}

export default function RegisterPage() {
  return <RegisterPageView content={registerPageContent} />
}
