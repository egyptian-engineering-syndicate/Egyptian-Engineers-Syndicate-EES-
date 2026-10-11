import type { Metadata } from "next"

import { HomePageView } from "@/features/home"
import { siteShellContent } from "@/features/site-shell"

export const metadata: Metadata = {
  title: siteShellContent.brand.name,
  description: siteShellContent.brand.description,
}

export default function HomePage() {
  return <HomePageView />
}
