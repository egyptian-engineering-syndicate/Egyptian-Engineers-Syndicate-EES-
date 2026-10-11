import Link from "next/link"
import { Landmark } from "lucide-react"

import { Card } from "@/components/ui/card"

import type { Committee } from "../types/committees-content.types"

interface CommitteeCardProps {
  committee: Committee
  detailsLabel: string
}

export function CommitteeCard({ committee, detailsLabel }: CommitteeCardProps) {
  return (
    <Card className="h-full flex-row items-stretch gap-0 rounded-xl bg-white py-0 shadow-[0_12px_28px_rgba(0,0,0,.06)] ring-0">
      <div className="flex min-w-0 flex-1 flex-col px-5 py-5 sm:px-6">
        <h3 className="text-lg font-extrabold text-neutral-950 sm:text-xl">
          {committee.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-7 text-neutral-500">
          {committee.description}
        </p>
        <div className="mt-auto pt-4">
          <Link
            href={committee.detailsHref}
            className="text-sm font-medium text-neutral-500 transition-colors hover:text-brand"
          >
            {detailsLabel}
            <span className="sr-only"> — {committee.title}</span>
          </Link>
        </div>
      </div>

      <div className="flex w-[38%] max-w-[170px] shrink-0 items-center justify-center rounded-e-xl border border-brand/40 bg-[#edf8f4]">
        <Landmark aria-hidden="true" className="size-12 text-brand" strokeWidth={1.6} />
      </div>
    </Card>
  )
}
