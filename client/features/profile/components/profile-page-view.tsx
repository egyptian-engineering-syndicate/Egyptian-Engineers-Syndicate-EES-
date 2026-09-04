import { PageBreadcrumb } from "@/features/site-shell"

import type { ProfilePageContent } from "../types/profile-content.types"
import { ProfileBookingCard } from "./profile-booking-card"
import { ProfileMemberCard } from "./profile-member-card"

interface ProfilePageViewProps {
  content: ProfilePageContent
}

export function ProfilePageView({ content }: ProfilePageViewProps) {
  return (
    <main className="bg-page-surface">
      <PageBreadcrumb items={content.breadcrumbs} />

      <div className="mx-auto w-full max-w-[1640px] px-5 py-10 sm:px-8 sm:py-12 lg:px-14">
        <ProfileMemberCard
          member={content.member}
          subscriptionsTitle={content.subscriptionsTitle}
          subscriptions={content.subscriptions}
        />

        <section className="mt-10 sm:mt-14">
          <h2 className="text-3xl font-extrabold text-neutral-950 sm:text-4xl">
            {content.bookingsTitle}
          </h2>

          <ul className="mt-6 grid gap-6 lg:grid-cols-2 lg:gap-8">
            {content.bookings.map((booking) => (
              <li key={booking.id}>
                <ProfileBookingCard
                  booking={booking}
                  detailsLabel={content.bookingDetailsLabel}
                  priceUnitLabel={content.priceUnitLabel}
                />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  )
}
