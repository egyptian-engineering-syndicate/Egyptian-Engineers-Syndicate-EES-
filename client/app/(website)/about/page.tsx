import type { Metadata } from "next"

import { AboutPageView, aboutPageContent } from "@/features/about"
import { siteShellContent } from "@/features/site-shell"

export const metadata: Metadata = {
  title: `${aboutPageContent.intro.title} | ${siteShellContent.brand.name}`,
  description: aboutPageContent.intro.paragraphs[0],
}

export default function AboutPage() {
  return <AboutPageView content={aboutPageContent} />
}
