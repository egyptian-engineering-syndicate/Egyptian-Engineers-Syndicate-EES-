import type { PaymentMethod } from "@/components/payment-method-selector"
import type { BreadcrumbItem } from "@/features/site-shell"

import type { TripImage } from "./trips-content.types"

export interface TripDetailsSummary {
  title: string
  description: string
  /** Short perks shown as pills, e.g. transfers, hotel rating, flight tickets. */
  features: string[]
  price: number
  priceUnitLabel: string
  durationLabel: string
  seatsLabel: string
  departureDate: string
  destination: string
  image: TripImage
}

export interface CancellationPolicyContent {
  title: string
  description: string
  feeLabel: string
}

export interface ContactDetailsContent {
  title: string
  phoneLabel: string
  phonePlaceholder: string
  emailLabel: string
  emailPlaceholder: string
}

export interface TravelerTitleOption {
  value: string
  label: string
}

export interface TravelersContent {
  title: string
  /** Prefixes the traveler index, e.g. "المسافر" + " 1". */
  travelerLabel: string
  titleLabel: string
  titleOptions: TravelerTitleOption[]
  firstNameLabel: string
  firstNamePlaceholder: string
  fatherNameLabel: string
  fatherNamePlaceholder: string
  familyNameLabel: string
  familyNamePlaceholder: string
  addTravelerLabel: string
  removeTravelerLabel: string
  /** Traveler rows rendered before the visitor adds any. */
  initialCount: number
}

export interface TripPaymentFormContent {
  cardNameLabel: string
  cardNamePlaceholder: string
  cardNumberLabel: string
  cardNumberPlaceholder: string
  expiryLabel: string
  expiryPlaceholder: string
  cvvLabel: string
  cvvPlaceholder: string
  submitLabel: string
}

export interface TripPaymentContent {
  title: string
  subtitle: string
  totalLabel: string
  totalPrice: number
  currency: string
  methodsLabel: string
  paymentMethods: PaymentMethod[]
  form: TripPaymentFormContent
}

export interface TripBookingValidationMessages {
  phoneRequired: string
  phoneInvalid: string
  emailRequired: string
  emailInvalid: string
  firstNameRequired: string
  fatherNameRequired: string
  familyNameRequired: string
  cardNameRequired: string
  cardNumberRequired: string
  cardNumberInvalid: string
  expiryRequired: string
  expiryInvalid: string
  cvvRequired: string
  cvvInvalid: string
}

export interface TripDetailsPageContent {
  breadcrumbs: BreadcrumbItem[]
  summary: TripDetailsSummary
  cancellationPolicy: CancellationPolicyContent
  contact: ContactDetailsContent
  travelers: TravelersContent
  payment: TripPaymentContent
  validation: TripBookingValidationMessages
}
