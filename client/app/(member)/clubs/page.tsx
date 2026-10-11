import type { Metadata } from "next"

import { clubsPageContent, ClubsPageView } from "@/features/clubs"
import { siteShellContent } from "@/features/site-shell"

export const metadata: Metadata = {
  title: `${clubsPageContent.title} | ${siteShellContent.brand.name}`,
  description: clubsPageContent.intro,
}

export default function ClubsPage() {
  return <ClubsPageView content={clubsPageContent} />
}
