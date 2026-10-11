import type { Metadata } from "next"

import { pensionPageContent, PensionsPageView } from "@/features/pensions"
import { siteShellContent } from "@/features/site-shell"

export const metadata: Metadata = {
  title: `${pensionPageContent.title} | ${siteShellContent.brand.name}`,
  description: pensionPageContent.description,
}

export default function PensionsPage() {
  return <PensionsPageView content={pensionPageContent} />
}
