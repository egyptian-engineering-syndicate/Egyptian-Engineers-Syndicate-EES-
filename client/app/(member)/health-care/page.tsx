import type { Metadata } from "next"

import {
  healthCarePageContent,
  HealthCarePageView,
} from "@/features/health-care"
import { siteShellContent } from "@/features/site-shell"

export const metadata: Metadata = {
  title: `${healthCarePageContent.title} | ${siteShellContent.brand.name}`,
  description: healthCarePageContent.description,
}

export default function HealthCarePage() {
  return <HealthCarePageView content={healthCarePageContent} />
}
