"use client"

import { useId, useMemo, useState } from "react"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { normalizeArabicText } from "@/lib/arabic-text"
import { cn } from "@/lib/utils"

import type { TripsPageContent } from "../types/trips-content.types"
import { TripCard } from "./trip-card"

const PAGE_SIZE = 6

interface TripsSectionProps {
  content: TripsPageContent
}

export function TripsSection({ content }: TripsSectionProps) {
  const searchInputId = useId()
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState<
    TripsPageContent["filters"][number]["id"]
  >("all")
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  const matchingTrips = useMemo(() => {
    const term = normalizeArabicText(query)

    return content.trips.filter((trip) => {
      const matchesCategory = category === "all" || trip.category === category
      const matchesQuery =
        !term ||
        normalizeArabicText(`${trip.title} ${trip.destination}`).includes(term)

      return matchesCategory && matchesQuery
    })
  }, [category, content.trips, query])

  const visibleTrips = matchingTrips.slice(0, visibleCount)

  return (
    <section className="pt-12 pb-16 sm:pt-16">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
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

      <div
        className="mt-6 flex flex-wrap gap-3"
        role="group"
        aria-label={content.filtersLabel}
      >
        {content.filters.map((filter) => {
          const selected = category === filter.id

          return (
            <button
              key={filter.id}
              type="button"
              aria-pressed={selected}
              onClick={() => {
                setCategory(filter.id)
                setVisibleCount(PAGE_SIZE)
              }}
              className={cn(
                "h-11 rounded-full border px-5 text-sm font-semibold transition-colors",
                selected
                  ? "border-brand bg-brand text-white"
                  : "border-neutral-200 bg-white text-neutral-700 hover:border-brand/40 hover:text-brand"
              )}
            >
              {filter.label}
            </button>
          )
        })}
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
