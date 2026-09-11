import Link from "next/link"
import { CalendarCheck, ChevronDown, Hash, UserRound } from "lucide-react"

import { SurfaceCard } from "@/components/surface-card"

import type {
  ProfileMemberSummary,
  ProfileSubscriptionLink,
} from "../types/profile-content.types"

interface ProfileMemberCardProps {
  member: ProfileMemberSummary
  subscriptionsTitle: string
  subscriptions: ProfileSubscriptionLink[]
}

export function ProfileMemberCard({
  member,
  subscriptionsTitle,
  subscriptions,
}: ProfileMemberCardProps) {
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
    <SurfaceCard className="sm:px-8 sm:py-8">
      <div className="flex items-start gap-4">
        <div className="grid size-14 shrink-0 place-items-center rounded-md bg-[#edf8f4] text-brand">
          <UserRound aria-hidden="true" className="size-7" strokeWidth={1.8} />
        </div>

        <div className="min-w-0">
          <p className="text-sm text-neutral-500">{member.nameLabel}</p>
          <h1 className="text-2xl font-extrabold text-brand sm:text-3xl">
            {member.name}
          </h1>

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

      <h2 className="mt-8 text-xl font-extrabold text-neutral-950 sm:text-2xl">
        {subscriptionsTitle}
      </h2>

      <ul className="mt-4 flex flex-wrap gap-3">
        {subscriptions.map((subscription) => (
          <li key={subscription.id}>
            <Link
              href={subscription.href}
              className="flex h-12 items-center gap-3 rounded-md border border-neutral-200 bg-white px-5 text-sm font-semibold text-neutral-800 transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand sm:text-base"
            >
              {subscription.label}
              <ChevronDown
                aria-hidden="true"
                className="size-4 text-neutral-400"
              />
            </Link>
          </li>
        ))}
      </ul>
    </SurfaceCard>
  )
}
