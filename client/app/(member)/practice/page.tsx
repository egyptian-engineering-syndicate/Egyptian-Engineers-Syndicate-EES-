import type { Metadata } from "next"

import { practicePageContent, PracticePageView } from "@/features/practice"
import { siteShellContent } from "@/features/site-shell"

export const metadata: Metadata = {
  title: `${practicePageContent.title} | ${siteShellContent.brand.name}`,
  description: practicePageContent.paragraphs[0],
}

export default function PracticePage() {
  return <PracticePageView content={practicePageContent} />
}
