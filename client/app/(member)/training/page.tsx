import type { Metadata } from "next"

import { siteShellContent } from "@/features/site-shell"
import { trainingPageContent, TrainingPageView } from "@/features/training"

export const metadata: Metadata = {
  title: `${trainingPageContent.title} | ${siteShellContent.brand.name}`,
  description: trainingPageContent.description,
}

export default function TrainingPage() {
  return <TrainingPageView content={trainingPageContent} />
}
