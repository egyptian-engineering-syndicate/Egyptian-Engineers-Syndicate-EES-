"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { CalendarDays } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import type { EventsPageContent } from "../types/events-content.types"

interface EventsFeaturedSectionProps {
  content: EventsPageContent
}

export function EventsFeaturedSection({ content }: EventsFeaturedSectionProps) {
  const featured = content.events.slice(0, 3)
  const [activeIndex, setActiveIndex] = useState(0)
  const event = featured[activeIndex] ?? featured[0]

  if (!event) return null

  return (
    <div className="overflow-hidden rounded-xl bg-[#edf8f4] lg:grid lg:grid-cols-2 lg:items-stretch">
      <div className="flex flex-col justify-center px-6 py-8 sm:px-10 sm:py-12">
        <p className="text-sm font-medium text-brand">{content.featuredEyebrow}</p>
        <h2 className="mt-3 text-2xl font-extrabold text-neutral-950 sm:text-3xl">
          {event.title}
        </h2>
        <p className="mt-3 flex items-center gap-2 text-sm text-neutral-500">
          <CalendarDays aria-hidden="true" className="size-4 text-brand" />
          {event.date}
        </p>
        <p className="mt-4 text-sm leading-8 text-neutral-600 sm:text-base">
          {event.excerpt}
        </p>

        <div className="mt-6 flex items-center gap-2">
          {featured.map((item, index) => (
            <button
              key={item.id}
              type="button"
              aria-label={`عرض الفعالية ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "size-2.5 rounded-full transition-colors",
                index === activeIndex ? "bg-brand" : "bg-brand/25"
              )}
            />
          ))}
        </div>

        <Button
          asChild
          className="mt-6 h-12 w-fit rounded-md bg-brand px-8 text-base font-semibold text-white hover:bg-brand-strong"
        >
          <Link href={event.detailsHref}>{content.featuredCtaLabel}</Link>
        </Button>
      </div>

      <div className="relative min-h-64 lg:min-h-[340px]">
        <Image
          src={event.image.src}
          alt={event.image.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          priority
        />
      </div>
    </div>
  )
}
