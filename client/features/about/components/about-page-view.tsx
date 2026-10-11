import { PageBreadcrumb } from "@/features/site-shell"

import type { AboutPageContent } from "../types/about-content.types"
import { AboutChairmanSection } from "./about-chairman-section"
import { AboutGoalsSection } from "./about-goals-section"
import { AboutIntroSection } from "./about-intro-section"
import { AboutMembersSection } from "./about-members-section"

interface AboutPageViewProps {
  content: AboutPageContent
}

export function AboutPageView({ content }: AboutPageViewProps) {
  return (
    <main className="overflow-x-clip bg-white">
      <PageBreadcrumb items={content.breadcrumbs} />
      <AboutIntroSection content={content.intro} />
      <AboutGoalsSection goals={content.goals} vision={content.vision} />
      <AboutChairmanSection chairman={content.chairman} />
      <AboutMembersSection
        title={content.membersTitle}
        members={content.members}
      />
    </main>
  )
}
