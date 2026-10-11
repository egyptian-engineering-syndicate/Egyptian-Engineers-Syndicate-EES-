import { PageBreadcrumb } from "@/features/site-shell"

import type { ProfilePageContent } from "../types/profile-content.types"
import { ProfileActivityList } from "./profile-activity-list"
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
          editLabel={content.editLabel}
          editForm={content.editForm}
          logoutLabel={content.logoutLabel}
          logoutHref={content.logoutHref}
          subscriptionsTitle={content.subscriptionsTitle}
          subscriptions={content.subscriptions}
        />

        <ProfileActivityList
          title={content.bookingsTitle}
          tabs={content.bookingTabs}
          seedBookings={content.bookings}
          detailsLabel={content.bookingDetailsLabel}
          priceUnitLabel={content.priceUnitLabel}
          emptyLabel={content.emptyBookingsLabel}
        />
      </div>
    </main>
  )
}
