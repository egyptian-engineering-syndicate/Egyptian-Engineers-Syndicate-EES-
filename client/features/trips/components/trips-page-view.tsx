import { PageBreadcrumb } from "@/features/site-shell"

import type { TripsPageContent } from "../types/trips-content.types"
import { TripsPromoBanner } from "./trips-promo-banner"
import { TripsSection } from "./trips-section"

interface TripsPageViewProps {
  content: TripsPageContent
}

export function TripsPageView({ content }: TripsPageViewProps) {
  return (
    <main className="bg-page-surface">
      <PageBreadcrumb items={content.breadcrumbs} />

      <div className="mx-auto w-full max-w-[1640px] px-5 pt-10 sm:px-8 sm:pt-12 lg:px-14">
        <TripsPromoBanner content={content.promo} />
        <TripsSection content={content} />
      </div>
    </main>
  )
}
