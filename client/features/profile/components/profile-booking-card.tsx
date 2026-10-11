import Link from "next/link"
import Image from "next/image"
import { CalendarDays, MapPin, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

import type { ProfileBooking } from "../types/profile-content.types"

interface ProfileBookingCardProps {
  booking: ProfileBooking
  detailsLabel: string
  priceUnitLabel: string
}

export function ProfileBookingCard({
  booking,
  detailsLabel,
  priceUnitLabel,
}: ProfileBookingCardProps) {
  const party = [booking.durationLabel, booking.travelersLabel]
    .filter((part) => part.trim().length > 0)
    .join(" - ")

  const meta = [
    { icon: MapPin, text: booking.destination },
    { icon: CalendarDays, text: booking.departureDate },
    { icon: Users, text: party },
  ]

  return (
    <Card className="h-full flex-row gap-0 overflow-hidden rounded-xl border-0 bg-white py-0 shadow-[0_12px_28px_rgba(0,0,0,.06)] ring-0">
      <div className="relative w-[38%] max-w-[280px] shrink-0 self-stretch">
        <Image
          src={booking.image.src}
          alt={booking.image.alt}
          fill
          sizes="(max-width: 1024px) 40vw, 280px"
          className="object-cover"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col px-5 py-5 sm:px-6">
        <h3 className="text-lg font-extrabold text-neutral-950 sm:text-xl">
          {booking.title}
        </h3>

        <ul className="mt-3 space-y-1.5 text-sm text-neutral-500">
          {meta
            .filter((item) => item.text.trim().length > 0)
            .map(({ icon: Icon, text }) => (
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

        <div className="mt-auto flex items-end justify-between gap-3 pt-5">
          <Button
            asChild
            className="h-11 rounded-md bg-brand px-6 text-sm font-semibold text-white hover:bg-brand-strong"
          >
            <Link href={booking.detailsHref}>
              {detailsLabel}
              <span className="sr-only"> — {booking.title}</span>
            </Link>
          </Button>

          <p className="text-xl font-extrabold text-brand">
            {booking.price}
            <span className="ms-1.5 text-sm font-medium text-neutral-500">
              {priceUnitLabel}
            </span>
          </p>
        </div>
      </div>
    </Card>
  )
}
