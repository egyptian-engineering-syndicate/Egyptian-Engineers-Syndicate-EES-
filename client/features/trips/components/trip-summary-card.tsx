import Image from "next/image"
import { CalendarDays, MapPin, Users } from "lucide-react"

import { Card } from "@/components/ui/card"

import type { TripDetailsSummary } from "../types/trip-details-content.types"

interface TripSummaryCardProps {
  summary: TripDetailsSummary
}

export function TripSummaryCard({ summary }: TripSummaryCardProps) {
  const meta = [
    { icon: Users, text: `${summary.durationLabel} · ${summary.seatsLabel}` },
    { icon: CalendarDays, text: summary.departureDate },
    { icon: MapPin, text: summary.destination },
  ]

  return (
    <Card className="gap-0 rounded-xl border-0 bg-white p-4 shadow-[0_12px_28px_rgba(0,0,0,.06)] ring-0 sm:p-6">
      <div className="relative aspect-1588/465 w-full overflow-hidden rounded-xl">
        <Image
          src={summary.image.src}
          alt={summary.image.alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 1588px"
          className="object-cover"
        />
      </div>

      <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3 pt-6">
        <div>
          <h1 className="text-2xl font-extrabold text-neutral-950 sm:text-3xl">
            {summary.title}
          </h1>

          <ul className="mt-3 flex flex-wrap gap-2">
            {summary.features.map((feature) => (
              <li
                key={feature}
                className="rounded-full border border-brand/30 px-3 py-1 text-xs font-medium text-brand"
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {summary.price != null ? (
          <p className="text-2xl font-extrabold text-brand sm:text-3xl">
            {summary.price}
            <span className="ms-2 text-sm font-medium text-neutral-500">
              {summary.priceUnitLabel}
            </span>
          </p>
        ) : null}
      </div>

      <p className="mt-4 text-sm leading-7 text-neutral-500 sm:text-base sm:leading-8">
        {summary.description}
      </p>

      <ul className="mt-5 flex flex-wrap items-center gap-x-12 gap-y-3 border-t border-neutral-100 pt-5 text-sm text-neutral-500 lg:gap-x-28">
        {meta.map(({ icon: Icon, text }) => (
          <li key={text} className="flex items-center gap-2">
            <Icon
              aria-hidden="true"
              className="size-4 shrink-0 text-neutral-400"
              strokeWidth={1.8}
            />
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </Card>
  )
}
