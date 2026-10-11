"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { CalendarDays, Check, Hash, Users, UserRound } from "lucide-react"

import { signOutMember } from "@/lib/member-session"

import { SurfaceCard } from "@/components/surface-card"

import type {
  ProfileEditFormContent,
  ProfileMemberSummary,
  ProfileSubscriptionLink,
} from "../types/profile-content.types"
import { ProfileEditDialog } from "./profile-edit-dialog"

interface ProfileMemberCardProps {
  member: ProfileMemberSummary
  editLabel: string
  editForm: ProfileEditFormContent
  logoutLabel: string
  logoutHref: string
  subscriptionsTitle: string
  subscriptions: ProfileSubscriptionLink[]
}

export function ProfileMemberCard({
  member,
  editLabel,
  editForm,
  logoutLabel,
  logoutHref,
  subscriptionsTitle,
  subscriptions,
}: ProfileMemberCardProps) {
  const router = useRouter()
  const [editOpen, setEditOpen] = useState(false)
  const meta = [
    {
      icon: CalendarDays,
      text: `${member.expiryLabel}: ${member.expiryDate}`,
    },
    {
      icon: Hash,
      text: `${member.membershipNumberLabel}: ${member.membershipNumber}`,
    },
    { icon: Users, text: member.specialization },
  ]

  return (
    <SurfaceCard className="sm:px-8 sm:py-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-4">
          <div className="grid size-16 shrink-0 place-items-center rounded-md bg-[#edf8f4] text-brand">
            <UserRound
              aria-hidden="true"
              className="size-8"
              strokeWidth={1.8}
            />
          </div>

          <div className="min-w-0">
            <p className="text-sm text-neutral-500">{member.nameLabel}</p>
            <h1 className="text-2xl font-extrabold text-brand sm:text-3xl">
              {member.name}
            </h1>

            <ul className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-neutral-600 sm:text-base">
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

        <div className="flex shrink-0 items-center gap-5 text-sm font-semibold sm:text-base">
          <button
            type="button"
            onClick={() => setEditOpen(true)}
            className="text-neutral-800 transition-colors hover:text-brand"
          >
            {editLabel}
          </button>
          <button
            type="button"
            onClick={() => {
              signOutMember()
              router.replace(logoutHref)
            }}
            className="text-red-600 transition-colors hover:text-red-700"
          >
            {logoutLabel}
          </button>
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
              className="flex h-12 cursor-pointer items-center gap-2.5 rounded-md border border-neutral-200 bg-white px-4 text-sm text-neutral-800 transition-colors hover:border-brand/40 hover:bg-brand/5 sm:px-5 sm:text-base"
            >
              <Check
                aria-hidden="true"
                className="size-4 shrink-0 text-brand"
                strokeWidth={2.4}
              />
              <span className="font-semibold">{subscription.label}</span>
              <span className="text-neutral-500">
                {member.expiryLabel}: {subscription.expiryDate}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <ProfileEditDialog
        open={editOpen}
        onClose={() => setEditOpen(false)}
        content={editForm}
      />
    </SurfaceCard>
  )
}
