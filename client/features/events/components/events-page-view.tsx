import { PageBreadcrumb } from "@/features/site-shell"

import type { EventsPageContent } from "../types/events-content.types"
import { EventsFeaturedSection } from "./events-featured-section"
import { EventsGrid } from "./events-grid"

interface EventsPageViewProps {
  content: EventsPageContent
}

export function EventsPageView({ content }: EventsPageViewProps) {
  return (
    <main className="bg-page-surface">
      <PageBreadcrumb items={content.breadcrumbs} />

      <div className="mx-auto w-full max-w-[1640px] space-y-12 px-5 py-10 sm:px-8 sm:py-12 lg:px-14">
        <h1 className="text-3xl font-extrabold text-neutral-950 sm:text-4xl">
          {content.title}
        </h1>
        <EventsFeaturedSection content={content} />
        <EventsGrid content={content} />
      </div>
    </main>
  )
}
