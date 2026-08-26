import Link from "next/link"
import Image from "next/image"
import { CalendarDays, MapPin, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

import type { Trip } from "../types/trips-content.types"

interface TripCardProps {
  trip: Trip
  bookLabel: string
  priceUnitLabel: string
}

export function TripCard({ trip, bookLabel, priceUnitLabel }: TripCardProps) {
  const meta = [
    { icon: MapPin, text: trip.destination },
    { icon: CalendarDays, text: trip.departureDate },
    { icon: Users, text: `${trip.durationLabel} · ${trip.seatsLabel}` },
  ]

  return (
    <Card className="h-full flex-row gap-0 rounded-xl bg-white py-0 shadow-[0_12px_28px_rgba(0,0,0,.06)] ring-neutral-200">
      <div className="relative w-[38%] max-w-[230px] shrink-0 self-stretch">
        <Image
          src={trip.image.src}
          alt={trip.image.alt}
          fill
          sizes="(max-width: 1024px) 40vw, 230px"
          className="object-cover"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col px-5 py-5 sm:px-6">
        <h3 className="truncate text-lg font-extrabold text-neutral-950 sm:text-xl">
          {trip.title}
        </h3>

        <ul className="mt-3 flex flex-wrap gap-2">
          {trip.features.map((feature) => (
            <li
              key={feature}
              className="rounded-full border border-brand/30 px-3 py-1 text-xs font-medium text-brand"
            >
              {feature}
            </li>
          ))}
        </ul>

        <ul className="mt-4 space-y-1.5 text-sm text-neutral-500">
          {meta.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-center gap-2">
              <Icon
                aria-hidden="true"
                className="size-4 shrink-0 text-neutral-400"
                strokeWidth={1.8}
              />
              <span className="truncate">{text}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-neutral-100 pt-4">
          <p className="text-xl font-extrabold text-brand">
            {trip.price}
            <span className="ms-1.5 text-sm font-medium text-neutral-500">
              {priceUnitLabel}
            </span>
          </p>

          <Button
            asChild
            className="h-11 rounded-md bg-brand px-7 text-sm font-semibold text-white hover:bg-brand-strong"
          >
            <Link href={trip.bookingHref}>
              {bookLabel}
              <span className="sr-only"> — {trip.title}</span>
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  )
}
