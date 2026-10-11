import { PageBreadcrumb } from "@/features/site-shell"

import type { ClubsPageContent } from "../types/clubs-content.types"
import { ClubIntroSection } from "./club-intro-section"
import { ClubsGrid } from "./clubs-grid"

interface ClubsPageViewProps {
  content: ClubsPageContent
}

export function ClubsPageView({ content }: ClubsPageViewProps) {
  return (
    <main className="bg-page-surface">
      <PageBreadcrumb items={content.breadcrumbs} />
      <ClubIntroSection
        title={content.title}
        description={content.intro}
        image={content.introImage}
      />
      <ClubsGrid content={content} />
    </main>
  )
}
