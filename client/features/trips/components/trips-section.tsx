"use client"

import { useId, useMemo, useState } from "react"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { normalizeArabicText } from "@/lib/arabic-text"

import type { TripsPageContent } from "../types/trips-content.types"
import { TripCard } from "./trip-card"

const PAGE_SIZE = 6

interface TripsSectionProps {
  content: TripsPageContent
}

export function TripsSection({ content }: TripsSectionProps) {
  const searchInputId = useId()
  const [query, setQuery] = useState("")
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  const matchingTrips = useMemo(() => {
    const term = normalizeArabicText(query)

    if (!term) {
      return content.trips
    }

    return content.trips.filter((trip) =>
      normalizeArabicText(`${trip.title} ${trip.destination}`).includes(term)
    )
  }, [content.trips, query])

  const visibleTrips = matchingTrips.slice(0, visibleCount)

  return (
    <section className="pt-12 pb-16 sm:pt-16">
      <div className="flex flex-col gap-6 lg:flex-row-reverse lg:items-center lg:justify-between lg:gap-10">
        <div className="lg:text-start">
          <h1 className="text-3xl font-extrabold text-neutral-950 sm:text-4xl">
            {content.title}
          </h1>
          <p className="mt-2 text-sm text-neutral-500 sm:text-base">
            {content.description}
          </p>
        </div>

        <div className="relative w-full lg:max-w-[535px]">
          <Label htmlFor={searchInputId} className="sr-only">
            {content.searchLabel}
          </Label>
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 start-4 my-auto size-5 text-neutral-400"
            strokeWidth={1.8}
          />
          <Input
            id={searchInputId}
            type="search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value)
              setVisibleCount(PAGE_SIZE)
            }}
            placeholder={content.searchPlaceholder}
            className="h-14 rounded-lg border-neutral-200 bg-neutral-100 ps-12 text-base placeholder:text-neutral-400"
          />
        </div>
      </div>

      {visibleTrips.length > 0 ? (
        <ul className="mt-8 grid gap-6 lg:grid-cols-2">
          {visibleTrips.map((trip) => (
            <li key={trip.id}>
              <TripCard
                trip={trip}
                bookLabel={content.bookLabel}
                priceUnitLabel={content.priceUnitLabel}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-12 text-center text-base text-neutral-500">
          {content.noResultsMessage}
        </p>
      )}

      {visibleCount < matchingTrips.length ? (
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
