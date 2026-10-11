import { PageBreadcrumb } from "@/features/site-shell"

import type { PracticePageContent } from "../types/practice-content.types"
import { PracticeIntroSection } from "./practice-intro-section"
import { PracticeServicesSection } from "./practice-services-section"

interface PracticePageViewProps {
  content: PracticePageContent
}

export function PracticePageView({ content }: PracticePageViewProps) {
  return (
    <main className="bg-page-surface">
      <PageBreadcrumb items={content.breadcrumbs} />
      <PracticeIntroSection content={content} />
      <PracticeServicesSection content={content} />
    </main>
  )
}
