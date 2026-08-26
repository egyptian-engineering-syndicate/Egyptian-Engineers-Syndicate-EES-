import type { Metadata } from "next"

import { renewalPageContent, RenewalPageView } from "@/features/membership"
import { siteShellContent } from "@/features/site-shell"

export const metadata: Metadata = {
  title: `${renewalPageContent.title} | ${siteShellContent.brand.name}`,
  description: renewalPageContent.description,
}

export default function MembershipRenewalPage() {
  return <RenewalPageView content={renewalPageContent} />
}
