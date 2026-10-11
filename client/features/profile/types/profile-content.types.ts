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

export interface ProfileSubscriptionLink {
  id: string
  label: string
  href: string
  expiryDate: string
}

export type ProfileBookingTab = "trip" | "training" | "annual"

export interface ProfileBooking {
  id: string
  category: ProfileBookingTab
  title: string
  destination: string
  departureDate: string
  durationLabel: string
  travelersLabel: string
  price: number
  detailsHref: string
  image: ProfileImage
}

export interface ProfileBookingTabItem {
  id: ProfileBookingTab
  label: string
}

export interface ProfileEditFormContent {
  title: string
  description: string
  emailLabel: string
  emailPlaceholder: string
  nameLabel: string
  namePlaceholder: string
  phoneLabel: string
  phonePlaceholder: string
  passwordTitle: string
  newPasswordLabel: string
  newPasswordPlaceholder: string
  currentPasswordLabel: string
  currentPasswordPlaceholder: string
  submitLabel: string
  cancelLabel: string
  validation: {
    emailRequired: string
    emailInvalid: string
    nameRequired: string
    phoneRequired: string
    phoneInvalid: string
    newPasswordRequired: string
    newPasswordTooShort: string
    currentPasswordRequired: string
  }
}

export interface ProfilePageContent {
  breadcrumbs: BreadcrumbItem[]
  member: ProfileMemberSummary
  editLabel: string
  logoutLabel: string
  logoutHref: string
  editForm: ProfileEditFormContent
  subscriptionsTitle: string
  subscriptions: ProfileSubscriptionLink[]
  bookingsTitle: string
  bookingTabs: ProfileBookingTabItem[]
  bookings: ProfileBooking[]
  bookingDetailsLabel: string
  priceUnitLabel: string
  emptyBookingsLabel: string
}
