import Link from "next/link"
import Image from "next/image"

import { Card } from "@/components/ui/card"

import type { Committee } from "../types/committees-content.types"

interface CommitteeCardProps {
  committee: Committee
  detailsLabel: string
}

export function CommitteeCard({ committee, detailsLabel }: CommitteeCardProps) {
  return (
    <Card className="h-full flex-row gap-0 rounded-xl bg-white py-0 shadow-[0_12px_28px_rgba(0,0,0,.06)] ring-0">
      <div className="relative w-[35%] max-w-[190px] shrink-0 self-stretch">
        <Image
          src={committee.image.src}
          alt={committee.image.alt}
          fill
          sizes="(max-width: 1024px) 40vw, 190px"
          className="object-cover"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col px-5 py-5 sm:px-6">
        <h3 className="line-clamp-2 text-lg font-extrabold text-neutral-950 sm:text-xl">
          {committee.title}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-neutral-500">
          {committee.description}
        </p>

        <div className="mt-auto border-t border-neutral-100 pt-4">
          <Link
            href={committee.detailsHref}
            className="text-sm font-medium text-neutral-500 transition-colors hover:text-brand"
          >
            {detailsLabel}
            <span className="sr-only"> — {committee.title}</span>
          </Link>
        </div>
      </div>
    </Card>
  )
}
