import type { Metadata } from "next"

import { siteShellContent } from "@/features/site-shell"
import { tripsPageContent, TripsPageView } from "@/features/trips"

export const metadata: Metadata = {
  title: `${tripsPageContent.title} | ${siteShellContent.brand.name}`,
  description: tripsPageContent.description,
}

export default function TripsPage() {
  return <TripsPageView content={tripsPageContent} />
}
