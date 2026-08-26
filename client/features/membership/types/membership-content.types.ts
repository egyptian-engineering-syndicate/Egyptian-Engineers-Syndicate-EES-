export type SubscriptionPlanId = "annual" | "three-year" | "five-year"

export interface SubscriptionPlan {
  id: SubscriptionPlanId
  title: string
  description: string
  durationLabel: string
  price: number
  currency: string
  features: string[]
}

export interface BreadcrumbItem {
  label: string
  href?: string
}

export interface MemberSummary {
  name: string
  statusLabel: string
  expiryLabel: string
  expiryDate: string
  membershipNumber: string
  specialization: string
}

export interface RenewalPageContent {
  breadcrumbs: BreadcrumbItem[]
  title: string
  description: string
  member: MemberSummary
  memberCardLabels: {
    memberNameLabel: string
    membershipNumberLabel: string
  }
  plansSection: {
    title: string
  }
  plans: SubscriptionPlan[]
  selectPlanLabel: string
}

export interface PaymentMethod {
  id: "paytabs" | "fawry" | "card"
  label: string
}

export interface PaymentFormValidationMessages {
  cardNameRequired: string
  cardNumberRequired: string
  cardNumberInvalid: string
  cvvRequired: string
  cvvInvalid: string
  expiryRequired: string
  expiryInvalid: string
}

export interface PaymentFormContent {
  cardNameLabel: string
  cardNamePlaceholder: string
  cardNumberLabel: string
  cardNumberPlaceholder: string
  cvvLabel: string
  cvvPlaceholder: string
  expiryLabel: string
  expiryPlaceholder: string
  submitLabel: string
  validation: PaymentFormValidationMessages
}

export interface PaymentPageContent {
  breadcrumbs: BreadcrumbItem[]
  title: string
  subtitle: string
  selectedPackageLabel: string
  methodsLabel: string
  paymentMethods: PaymentMethod[]
  form: PaymentFormContent
}
