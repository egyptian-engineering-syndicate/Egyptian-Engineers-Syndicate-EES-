import type { PaymentMethod } from "@/components/payment-method-selector"
import type { BreadcrumbItem } from "@/features/site-shell"

export interface PracticeImage {
  src: string
  alt: string
}

export interface PracticeService {
  id: string
  title: string
  description: string
  href: string
  image: PracticeImage
}

export interface PracticePageContent {
  breadcrumbs: BreadcrumbItem[]
  title: string
  paragraphs: string[]
  introImage: PracticeImage
  servicesTitle: string
  learnMoreLabel: string
  loadMoreLabel: string
  services: PracticeService[]
}

export interface PracticeNumberedLine {
  marker: string
  text: string
}

export interface PracticeDetailsPageContent {
  breadcrumbs: BreadcrumbItem[]
  title: string
  description: string
  image: PracticeImage
  specialists: {
    title: string
    items: string[]
  }
  requiredDocuments: {
    title: string
    items: PracticeNumberedLine[]
  }
  fees: {
    title: string
    description: string
  }
  extraInfo: {
    title: string
    items: PracticeNumberedLine[]
  }
  apply: {
    title: string
    label: string
    href: string
  }
}

export interface PracticeMemberSummary {
  nameLabel: string
  name: string
  expiryLabel: string
  expiryDate: string
  membershipNumberLabel: string
  membershipNumber: string
  specialization: string
}

export interface PracticeApplyValidationMessages {
  emailRequired: string
  emailInvalid: string
  phoneRequired: string
  phoneInvalid: string
  nationalIdRequired: string
  syndicateCardRequired: string
  cardExpiryRequired: string
  fullNameRequired: string
  cardNameRequired: string
  cardNumberRequired: string
  cardNumberInvalid: string
  expiryRequired: string
  expiryInvalid: string
  cvvRequired: string
  cvvInvalid: string
}

export interface PracticeApplyPageContent {
  breadcrumbs: BreadcrumbItem[]
  title: string
  description: string
  member: PracticeMemberSummary
  personal: {
    title: string
    emailLabel: string
    emailPlaceholder: string
    phoneLabel: string
    phonePlaceholder: string
    nationalIdLabel: string
    nationalIdPlaceholder: string
    syndicateCardLabel: string
    syndicateCardPlaceholder: string
    cardExpiryLabel: string
    cardExpiryPlaceholder: string
    fullNameLabel: string
    fullNamePlaceholder: string
  }
  professional: {
    title: string
    options: { id: string; label: string }[]
  }
  documents: {
    title: string
    options: { id: string; label: string }[]
    uploadLabel: string
    selectedFilesLabel: string
    removeFileLabel: string
  }
  payment: {
    title: string
    totalLabel: string
    totalPrice: number
    currency: string
    methodsLabel: string
    paymentMethods: PaymentMethod[]
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
  validation: PracticeApplyValidationMessages
}
