import type { BreadcrumbItem } from "@/features/site-shell"

export interface ProfileImage {
  src: string
  alt: string
}

export interface ProfileMemberSummary {
  nameLabel: string
  name: string
  expiryLabel: string
  expiryDate: string
  membershipNumberLabel: string
  membershipNumber: string
  specialization: string
}

/** One chip in the "اشتراكاتي" row, linking to that subscription's data page. */
export interface ProfileSubscriptionLink {
  id: string
  label: string
  href: string
}

export interface ProfileBooking {
  id: string
  title: string
  destination: string
  departureDate: string
  durationLabel: string
  /** Party size, e.g. "40 افراد". */
  travelersLabel: string
  price: number
  detailsHref: string
  image: ProfileImage
}

export interface ProfilePageContent {
  breadcrumbs: BreadcrumbItem[]
  member: ProfileMemberSummary
  subscriptionsTitle: string
  subscriptions: ProfileSubscriptionLink[]
  bookingsTitle: string
  bookings: ProfileBooking[]
  bookingDetailsLabel: string
  priceUnitLabel: string
}
