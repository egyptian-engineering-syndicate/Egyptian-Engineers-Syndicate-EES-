import Link from "next/link"
import Image from "next/image"

import { Card } from "@/components/ui/card"

import type { Club } from "../types/clubs-content.types"

interface ClubCardProps {
  club: Club
  detailsLabel: string
}

export function ClubCard({ club, detailsLabel }: ClubCardProps) {
  return (
    <Card className="h-full gap-0 overflow-hidden rounded-xl bg-white py-0 shadow-[0_12px_28px_rgba(0,0,0,.06)] ring-0">
      <div className="relative aspect-[16/10]">
        <Image
          src={club.image.src}
          alt={club.image.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col px-6 py-5">
        <h3 className="text-lg font-extrabold text-neutral-950 sm:text-xl">
          {club.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-7 text-neutral-500">
          {club.excerpt}
        </p>
        <div className="mt-auto border-t border-neutral-100 pt-4">
          <Link
            href={club.detailsHref}
            className="text-sm font-medium text-neutral-500 transition-colors hover:text-brand"
          >
            {detailsLabel}
            <span className="sr-only"> — {club.title}</span>
          </Link>
        </div>
      </div>
    </Card>
  )
}
