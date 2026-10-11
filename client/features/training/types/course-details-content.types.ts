import type { PaymentMethod } from "@/components/payment-method-selector"
import type { BreadcrumbItem } from "@/features/site-shell"

import type { CourseImage } from "./training-content.types"

export interface CourseOverviewContent {
  title: string
  paragraphs: string[]
  outcomesTitle: string
  outcomes: string
  image: CourseImage
}

export interface CourseTopicsContent {
  title: string
  topics: string[]
}

export interface CourseSubscriptionFormContent {
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

export interface CourseSubscriptionValidationMessages {
  cardNameRequired: string
  cardNumberRequired: string
  cardNumberInvalid: string
  expiryRequired: string
  expiryInvalid: string
  cvvRequired: string
  cvvInvalid: string
}

export interface CourseSubscriptionContent {
  title: string
  subtitle: string
  priceLabel: string
  price: number
  currency: string
  methodsLabel: string
  paymentMethods: PaymentMethod[]
  form: CourseSubscriptionFormContent
  validation: CourseSubscriptionValidationMessages
}

export interface CourseDetailsPageContent {
  breadcrumbs: BreadcrumbItem[]
  overview: CourseOverviewContent
  topics: CourseTopicsContent
  subscription: CourseSubscriptionContent
}
