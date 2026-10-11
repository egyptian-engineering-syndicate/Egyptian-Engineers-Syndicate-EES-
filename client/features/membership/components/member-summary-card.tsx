import { CalendarDays, CircleAlert, Hash, UserRound } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

import type {
  MemberSummary,
  RenewalPageContent,
} from "../types/membership-content.types"

interface MemberSummaryCardProps {
  member: MemberSummary
  labels: RenewalPageContent["memberCardLabels"]
}

export function MemberSummaryCard({ member, labels }: MemberSummaryCardProps) {
  return (
    <Card className="gap-0 rounded-xl border-0 bg-white py-0 shadow-[0_12px_28px_rgba(0,0,0,.07)]">
      <CardContent className="flex flex-col gap-5 px-6 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex items-center gap-4">
          <div>
            <p className="text-sm text-neutral-500">{labels.memberNameLabel}</p>
            <p className="text-xl font-extrabold text-brand sm:text-2xl">
              {member.name}
            </p>
          </div>
          <div className="grid size-12 shrink-0 place-items-center rounded-md bg-[#edf8f4] text-brand">
            <UserRound
              aria-hidden="true"
              className="size-6"
              strokeWidth={1.8}
            />
          </div>
        </div>

        <div className="flex items-center gap-2 text-red-600">
          <CircleAlert aria-hidden="true" className="size-5" />
          <span className="font-semibold">{member.statusLabel}</span>
        </div>
      </CardContent>

      <CardContent className="flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-neutral-100 px-6 py-4 text-sm text-neutral-600 sm:px-8 sm:text-base">
        <div className="flex items-center gap-2">
          <UserRound
            aria-hidden="true"
            className="size-4 text-brand"
            strokeWidth={1.8}
          />
          <span>{member.specialization}</span>
        </div>
        <div className="flex items-center gap-2">
          <Hash
            aria-hidden="true"
            className="size-4 text-brand"
            strokeWidth={1.8}
          />
          <span>
            {labels.membershipNumberLabel}: {member.membershipNumber}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <CalendarDays
            aria-hidden="true"
            className="size-4 text-brand"
            strokeWidth={1.8}
          />
          <span>
            {member.expiryLabel}: {member.expiryDate}
          </span>
        </div>
      </CardContent>
    </Card>
  )
}
