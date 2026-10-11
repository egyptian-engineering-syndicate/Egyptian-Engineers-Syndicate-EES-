import type { BreadcrumbItem } from "@/features/site-shell"

export interface TripImage {
  src: string
  alt: string
}

export interface Trip {
  id: string
  title: string
  /** Short perks shown as pills, e.g. flight tickets, hotel rating, transfers. */
  features: string[]
  destination: string
  departureDate: string
  durationLabel: string
  seatsLabel: string
  price: number
  bookingHref: string
  image: TripImage
}

export interface TripsPromoContent {
  title: string
  description: string
  actionLabel: string
  actionHref: string
  image: TripImage
}

export interface TripsPageContent {
  breadcrumbs: BreadcrumbItem[]
  promo: TripsPromoContent
  title: string
  description: string
  searchLabel: string
  searchPlaceholder: string
  noResultsMessage: string
  loadMoreLabel: string
  bookLabel: string
  priceUnitLabel: string
  trips: Trip[]
}
