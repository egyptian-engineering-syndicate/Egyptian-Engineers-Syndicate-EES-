"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"

import type { PracticePageContent } from "../types/practice-content.types"
import { PracticeServiceCard } from "./practice-service-card"

const PAGE_SIZE = 4

interface PracticeServicesSectionProps {
  content: PracticePageContent
}

export function PracticeServicesSection({
  content,
}: PracticeServicesSectionProps) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const visibleServices = content.services.slice(0, visibleCount)

  return (
    <section className="ees-light-pattern pb-16 sm:pb-20">
      <div className="mx-auto w-full max-w-[1640px] px-5 sm:px-8 lg:px-14">
        <h2 className="text-3xl font-extrabold text-neutral-950 sm:text-4xl">
          {content.servicesTitle}
        </h2>

        <ul className="mt-8 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {visibleServices.map((service) => (
            <li key={service.id}>
              <PracticeServiceCard
                service={service}
                learnMoreLabel={content.learnMoreLabel}
              />
            </li>
          ))}
        </ul>

        {visibleCount < content.services.length ? (
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
      </div>
    </section>
  )
}
