import { CalendarCheck, Hash, UserRound } from "lucide-react"

import { SurfaceCard } from "@/components/surface-card"

import type { PracticeMemberSummary } from "../types/practice-content.types"

interface PracticeMemberBannerProps {
  member: PracticeMemberSummary
}

export function PracticeMemberBanner({ member }: PracticeMemberBannerProps) {
  const meta = [
    {
      icon: CalendarCheck,
      text: `${member.expiryLabel}: ${member.expiryDate}`,
    },
    {
      icon: Hash,
      text: `${member.membershipNumberLabel}: ${member.membershipNumber}`,
    },
    { icon: UserRound, text: member.specialization },
  ]

  return (
    <SurfaceCard>
      <div className="flex items-start gap-4">
        <div className="grid size-14 shrink-0 place-items-center rounded-md bg-[#edf8f4] text-brand">
          <UserRound aria-hidden="true" className="size-7" strokeWidth={1.8} />
        </div>
        <div className="min-w-0">
          <p className="text-sm text-neutral-500">{member.nameLabel}</p>
          <p className="text-2xl font-extrabold text-brand sm:text-3xl">
            {member.name}
          </p>
          <ul className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-neutral-600 sm:text-base">
            {meta.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-2">
                <Icon
                  aria-hidden="true"
                  className="size-4 shrink-0 text-brand"
                  strokeWidth={1.8}
                />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SurfaceCard>
  )
}
