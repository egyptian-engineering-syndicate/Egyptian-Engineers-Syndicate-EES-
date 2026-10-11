import type { Metadata } from "next"

import {
  publicationsPageContent,
  PublicationsPageView,
} from "@/features/publications"
import { siteShellContent } from "@/features/site-shell"

export const metadata: Metadata = {
  title: `${publicationsPageContent.title} | ${siteShellContent.brand.name}`,
  description: "منشورات وأدلة نقابة المهندسين بالقاهرة.",
}

export default function PublicationsPage() {
  return <PublicationsPageView content={publicationsPageContent} />
}
