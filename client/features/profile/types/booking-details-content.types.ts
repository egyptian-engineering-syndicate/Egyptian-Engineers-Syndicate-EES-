import type { BreadcrumbItem } from "@/features/site-shell"

import type { ProfileImage } from "./profile-content.types"

export interface BookingDetailsSummary {
  title: string
  description: string
  price: number
  priceUnitLabel: string
  durationLabel: string
  travelersLabel: string
  departureDate: string
  destination: string
  image: ProfileImage
}

export interface BookingContactContent {
  title: string
  emailLabel: string
  email: string
  phoneLabel: string
  phone: string
}

export interface BookingTraveler {
  id: string
  /** Already prefixed with the traveler's title, e.g. "السيد/محمد". */
  firstName: string
  fatherName: string
  familyName: string
}

export interface BookingTravelersContent {
  title: string
  /** Prefixes the traveler index, e.g. "المسافر" + " 1". */
  travelerLabel: string
  firstNameLabel: string
  fatherNameLabel: string
  familyNameLabel: string
  cancelTravelerLabel: string
  travelers: BookingTraveler[]
}

export interface BookingCancellationContent {
  title: string
  description: string
  cancelBookingLabel: string
  feeLabel: string
}

export interface BookingDetailsPageContent {
  breadcrumbs: BreadcrumbItem[]
  summary: BookingDetailsSummary
  contact: BookingContactContent
  travelers: BookingTravelersContent
  cancellation: BookingCancellationContent
}
