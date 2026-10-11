"use client"

import { useEffect, useMemo, useState } from "react"

import {
  formatPaidAt,
  readMemberActivities,
  type MemberActivity,
  type MemberActivityCategory,
} from "@/lib/member-activity"
import { cn } from "@/lib/utils"

import type {
  ProfileBooking,
  ProfileBookingTab,
  ProfileBookingTabItem,
} from "../types/profile-content.types"
import { ProfileBookingCard } from "./profile-booking-card"

interface ProfileActivityListProps {
  title: string
  tabs: ProfileBookingTabItem[]
  seedBookings: ProfileBooking[]
  detailsLabel: string
  priceUnitLabel: string
  emptyLabel: string
}

function tabForCategory(category: MemberActivityCategory): ProfileBookingTab {
  if (category === "trip") return "trip"
  if (category === "training") return "training"
  return "annual"
}

function toBooking(activity: MemberActivity): ProfileBooking {
  return {
    id: activity.id,
    category: tabForCategory(activity.category),
    title: activity.title,
    destination: activity.categoryLabel,
    departureDate: formatPaidAt(activity.paidAt),
    durationLabel: "مدفوع",
    travelersLabel: "",
    price: activity.price,
    detailsHref: "/profile",
    image: activity.image,
  }
}

export function ProfileActivityList({
  title,
  tabs,
  seedBookings,
  detailsLabel,
  priceUnitLabel,
  emptyLabel,
}: ProfileActivityListProps) {
  const [stored, setStored] = useState<ProfileBooking[]>([])
  const [activeTab, setActiveTab] = useState<ProfileBookingTab>(
    tabs[0]?.id ?? "trip"
  )

  useEffect(() => {
    setStored(readMemberActivities().map(toBooking))
  }, [])

  const bookings = useMemo(() => {
    const merged = [...stored, ...seedBookings]
    return merged.filter((booking) => booking.category === activeTab)
  }, [stored, seedBookings, activeTab])

  return (
    <section className="mt-10 sm:mt-14">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-3xl font-extrabold text-neutral-950 sm:text-4xl">
          {title}
        </h2>

        <div
          className="flex w-fit rounded-full bg-white p-1 shadow-[0_8px_20px_rgba(0,0,0,.06)]"
          role="tablist"
          aria-label={title}
        >
          {tabs.map((tab) => {
            const isActive = tab.id === activeTab

            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "h-10 rounded-full px-5 text-sm font-semibold transition-colors",
                  isActive
                    ? "bg-brand text-white"
                    : "text-neutral-500 hover:text-brand"
                )}
              >
                {tab.label}
              </button>
            )
          })}
        </div>
      </div>

      {bookings.length === 0 ? (
        <p className="mt-6 text-sm text-neutral-500 sm:text-base">{emptyLabel}</p>
      ) : (
        <ul className="mt-6 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {bookings.map((booking) => (
            <li key={booking.id}>
              <ProfileBookingCard
                booking={booking}
                detailsLabel={detailsLabel}
                priceUnitLabel={priceUnitLabel}
              />
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
