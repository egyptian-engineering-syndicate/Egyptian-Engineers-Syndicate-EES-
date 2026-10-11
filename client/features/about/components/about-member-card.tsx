import Image from "next/image"
import Link from "next/link"

import { SurfaceCard } from "@/components/surface-card"

import type { AboutBoardMember } from "../types/about-content.types"

interface AboutMemberCardProps {
  member: AboutBoardMember
}

export function AboutMemberCard({ member }: AboutMemberCardProps) {
  return (
    <Link href={member.detailsHref} className="block h-full">
      <SurfaceCard className="h-full px-5 py-8 text-center transition-shadow hover:shadow-[0_16px_32px_rgba(0,0,0,.1)] sm:px-6">
        <div className="relative mx-auto size-36 overflow-hidden rounded-full bg-neutral-100 sm:size-40">
          <Image
            src={member.image.src}
            alt={member.image.alt}
            fill
            sizes="160px"
            className="object-cover object-top"
          />
        </div>
        <h3 className="mt-5 text-base font-extrabold text-neutral-950 sm:text-lg">
          {member.name}
        </h3>
        <p className="mt-2 text-xs leading-6 text-neutral-500 sm:text-sm">
          {member.role}
        </p>
      </SurfaceCard>
    </Link>
  )
}
