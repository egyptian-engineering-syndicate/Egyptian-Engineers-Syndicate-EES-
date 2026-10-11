import type { BreadcrumbItem } from "@/features/site-shell"

export interface PensionPlan {
  id: string
  title: string
  description: string
  eligibilityLabel: string
  eligibility: string
  href: string
}

export interface PensionPageContent {
  breadcrumbs: BreadcrumbItem[]
  title: string
  description: string
  plans: PensionPlan[]
  requiredDocuments: {
    title: string
    items: string[]
  }
}

export interface PensionEligibilityOption {
  id: string
  label: string
}

export interface PensionApplyValidationMessages {
  eligibilityRequired: string
  fullNameRequired: string
  emailRequired: string
  emailInvalid: string
  nationalIdRequired: string
  phoneRequired: string
  phoneInvalid: string
  birthDateRequired: string
  lastEmployerRequired: string
  specializationRequired: string
  membershipNumberRequired: string
  serviceYearsRequired: string
  basicSalaryRequired: string
  notesTooLong: string
}

export interface PensionApplyPageContent {
  breadcrumbs: BreadcrumbItem[]
  applyPrefix: string
  title: string
  description: string
  eligibilityLabel: string
  eligibility: string
  eligibilityOptions: PensionEligibilityOption[]
  personal: {
    title: string
    fullNameLabel: string
    fullNamePlaceholder: string
    emailLabel: string
    emailPlaceholder: string
    nationalIdLabel: string
    nationalIdPlaceholder: string
    phoneLabel: string
    phonePlaceholder: string
    birthDateLabel: string
    birthDatePlaceholder: string
  }
  professional: {
    title: string
    lastEmployerLabel: string
    lastEmployerPlaceholder: string
    specializationLabel: string
    specializationPlaceholder: string
    membershipNumberLabel: string
    membershipNumberPlaceholder: string
    serviceYearsLabel: string
    serviceYearsPlaceholder: string
    basicSalaryLabel: string
    basicSalaryPlaceholder: string
  }
  documents: {
    title: string
    options: { id: string; label: string }[]
    uploadLabel: string
    selectedFilesLabel: string
    removeFileLabel: string
    notesLabel: string
    notesPlaceholder: string
    submitLabel: string
    backLabel: string
    backHref: string
  }
  validation: PensionApplyValidationMessages
}
