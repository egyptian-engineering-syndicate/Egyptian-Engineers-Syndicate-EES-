"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"

import type { EventsPageContent } from "../types/events-content.types"
import { EventCard } from "./event-card"

const PAGE_SIZE = 4

interface EventsGridProps {
  content: EventsPageContent
}

export function EventsGrid({ content }: EventsGridProps) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const visibleEvents = content.events.slice(0, visibleCount)

  return (
    <section>
      <h2 className="text-3xl font-extrabold text-neutral-950 sm:text-4xl">
        {content.allEventsTitle}
      </h2>

      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:gap-8">
        {visibleEvents.map((event) => (
          <li key={event.id}>
            <EventCard event={event} detailsLabel={content.detailsLabel} />
          </li>
        ))}
      </ul>

      {visibleCount < content.events.length ? (
        <div className="mt-10 flex justify-center">
          <Button
            variant="outline"
            onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
            className="h-12 rounded-md border-neutral-200 bg-white px-10 text-base font-medium text-neutral-700"
          >
            {content.loadMoreLabel}
          </Button>
        </div>
      ) : null}
    </section>
  )
}
