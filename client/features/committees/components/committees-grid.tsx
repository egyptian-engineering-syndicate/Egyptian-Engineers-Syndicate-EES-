"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"

import type { CommitteesPageContent } from "../types/committees-content.types"
import { CommitteeCard } from "./committee-card"

const PAGE_SIZE = 12

interface CommitteesGridProps {
  content: CommitteesPageContent
}

export function CommitteesGrid({ content }: CommitteesGridProps) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const visibleCommittees = content.committees.slice(0, visibleCount)

  return (
    <>
      <ul className="mt-8 grid gap-6 lg:grid-cols-2 xl:grid-cols-3 xl:gap-8">
        {visibleCommittees.map((committee) => (
          <li key={committee.id}>
            <CommitteeCard
              committee={committee}
              detailsLabel={content.detailsLabel}
            />
          </li>
        ))}
      </ul>

      {visibleCount < content.committees.length ? (
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
    </>
  )
}
