import type { PaymentMethod } from "@/components/payment-method-selector"
import type { BreadcrumbItem } from "@/features/site-shell"

export type HealthCarePlanId = "family" | "individual"
export type HealthCarePlanIcon = "family" | "individual"

export interface HealthCarePlan {
  id: HealthCarePlanId
  icon: HealthCarePlanIcon
  title: string
  description: string
  price: number
  currency: string
  subscribeHref: string
}

export interface HealthCarePageContent {
  breadcrumbs: BreadcrumbItem[]
  title: string
  description: string
  subscribeLabel: string
  plans: HealthCarePlan[]
}

export interface HealthCareDetailsSummary {
  icon: HealthCarePlanIcon
  title: string
  description: string
  price: number
  currency: string
}

export interface ContactDetailsContent {
  title: string
  phoneLabel: string
  phonePlaceholder: string
  emailLabel: string
  emailPlaceholder: string
}

export interface AssignedEngineerContent {
  title: string
  youBadgeLabel: string
  registrationNumberLabel: string
  registrationNumberPlaceholder: string
  nationalIdLabel: string
  nationalIdPlaceholder: string
  cardNameLabel: string
  cardNamePlaceholder: string
}

export interface FamilyMemberRelationOption {
  value: string
  label: string
}

export interface FamilyMembersContent {
  title: string
  memberLabel: string
  relationLabel: string
  relationOptions: FamilyMemberRelationOption[]
  nationalIdLabel: string
  nationalIdPlaceholder: string
  cardNamePlaceholder: string
  addMemberLabel: string
  removeMemberLabel: string
  /** Family member rows rendered before the visitor adds any. */
  initialCount: number
}

export interface HealthCarePaymentFormContent {
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

export interface HealthCarePaymentContent {
  title: string
  subtitle: string
  totalLabel: string
  totalPrice: number
  currency: string
  methodsLabel: string
  paymentMethods: PaymentMethod[]
  form: HealthCarePaymentFormContent
}

export interface HealthCareBookingValidationMessages {
  phoneRequired: string
  phoneInvalid: string
  emailRequired: string
  emailInvalid: string
  registrationNumberRequired: string
  nationalIdRequired: string
  engineerCardNameRequired: string
  memberNationalIdRequired: string
  memberCardNameRequired: string
  cardNameRequired: string
  cardNumberRequired: string
  cardNumberInvalid: string
  expiryRequired: string
  expiryInvalid: string
  cvvRequired: string
  cvvInvalid: string
}

export interface HealthCareDetailsPageContent {
  breadcrumbs: BreadcrumbItem[]
  summary: HealthCareDetailsSummary
  contact: ContactDetailsContent
  assignedEngineer: AssignedEngineerContent
  familyMembers: FamilyMembersContent
  payment: HealthCarePaymentContent
  validation: HealthCareBookingValidationMessages
}
