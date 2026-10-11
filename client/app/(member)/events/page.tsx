import type { Metadata } from "next"

import { eventsPageContent, EventsPageView } from "@/features/events"
import { siteShellContent } from "@/features/site-shell"

export const metadata: Metadata = {
  title: `${eventsPageContent.title} | ${siteShellContent.brand.name}`,
  description: "فعاليات نقابة المهندسين بالقاهرة.",
}

export default function EventsPage() {
  return <EventsPageView content={eventsPageContent} />
}
