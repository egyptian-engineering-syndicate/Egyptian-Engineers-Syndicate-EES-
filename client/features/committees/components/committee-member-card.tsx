import Image from "next/image"

import type { CommitteeMember } from "../types/committees-content.types"

interface CommitteeMemberCardProps {
  member: CommitteeMember
}

export function CommitteeMemberCard({ member }: CommitteeMemberCardProps) {
  return (
    <article className="text-center">
      <div className="relative mx-auto size-36 overflow-hidden rounded-full bg-neutral-100 sm:size-40">
        <Image
          src={member.image.src}
          alt={member.image.alt}
          fill
          sizes="160px"
          className="object-cover object-top"
        />
      </div>
      <h3 className="mt-4 text-sm font-extrabold text-neutral-950 sm:text-base">
        {member.name}
      </h3>
      <p className="mt-1 text-xs leading-6 text-neutral-500 sm:text-sm">
        {member.role}
      </p>
    </article>
  )
}
