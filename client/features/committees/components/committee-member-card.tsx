import Image from "next/image"

import type { CommitteeMember } from "../types/committees-content.types"

interface CommitteeMemberCardProps {
  member: CommitteeMember
}

export function CommitteeMemberCard({ member }: CommitteeMemberCardProps) {
  return (
    <article className="relative aspect-[4/5] overflow-hidden rounded-xl bg-neutral-900">
      <Image
        src={member.image.src}
        alt={member.image.alt}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 380px"
        className="object-cover"
      />

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent px-4 pt-12 pb-4 sm:px-5 sm:pt-16 sm:pb-5">
        <h3 className="text-base font-bold text-white sm:text-lg">
          {member.name}
        </h3>
        <p className="mt-1 text-xs text-white/75 sm:text-sm">{member.role}</p>
      </div>
    </article>
  )
}
