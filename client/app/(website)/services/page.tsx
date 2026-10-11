import type { Metadata } from "next"

import { homePageContent, ServicesPageView } from "@/features/home"
import { siteShellContent } from "@/features/site-shell"

export const metadata: Metadata = {
  title: `${homePageContent.services.title} | ${siteShellContent.brand.name}`,
  description: homePageContent.services.description,
}

export default function ServicesPage() {
  return <ServicesPageView />
}
