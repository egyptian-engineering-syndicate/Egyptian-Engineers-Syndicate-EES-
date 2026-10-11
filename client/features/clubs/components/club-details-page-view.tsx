import { PageBreadcrumb } from "@/features/site-shell"

import type { ClubDetailsPageContent } from "../types/clubs-content.types"
import { ClubCulturalSection } from "./club-cultural-section"
import { ClubIntroSection } from "./club-intro-section"
import { ClubSportsSection } from "./club-sports-section"

interface ClubDetailsPageViewProps {
  content: ClubDetailsPageContent
}

export function ClubDetailsPageView({ content }: ClubDetailsPageViewProps) {
  return (
    <main className="bg-page-surface">
      <PageBreadcrumb items={content.breadcrumbs} />
      <ClubIntroSection
        title={content.title}
        description={content.intro}
        image={content.introImage}
      />
      <ClubCulturalSection content={content.cultural} />
      <ClubSportsSection content={content.sports} />
    </main>
  )
}
