import Link from "next/link"
import Image from "next/image"

import { Card } from "@/components/ui/card"

import type { SyndicateEvent } from "../types/events-content.types"

interface EventCardProps {
  event: SyndicateEvent
  detailsLabel: string
}

export function EventCard({ event, detailsLabel }: EventCardProps) {
  return (
    <Card className="h-full gap-0 overflow-hidden rounded-xl bg-white py-0 shadow-[0_12px_28px_rgba(0,0,0,.06)] ring-0">
      <div className="relative aspect-[16/9]">
        <Image
          src={event.image.src}
          alt={event.image.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col px-6 py-5">
        <h3 className="text-lg font-extrabold text-neutral-950 sm:text-xl">
          {event.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-7 text-neutral-500">
          {event.excerpt}
        </p>
        <div className="mt-auto border-t border-neutral-100 pt-4">
          <Link
            href={event.detailsHref}
            className="text-sm font-medium text-neutral-500 transition-colors hover:text-brand"
          >
            {detailsLabel}
            <span className="sr-only"> — {event.title}</span>
          </Link>
        </div>
      </div>
    </Card>
  )
}
