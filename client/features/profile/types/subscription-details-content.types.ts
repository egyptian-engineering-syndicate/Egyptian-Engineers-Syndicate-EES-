import type { BreadcrumbItem } from "@/features/site-shell"

export interface SubscriptionDetailField {
  label: string
  value: string
  /** Names, service length and amounts are printed in brand green. */
  emphasis?: boolean
  /** Rows the design gives a line of their own (full name, last employer). */
  wide?: boolean
}

export interface SubscriptionDetailsSection {
  title: string
  fields: SubscriptionDetailField[]
}

export interface SubscriptionDocument {
  id: string
  title: string
  /** Upload date, printed as authored (Latin digits, isolated with dir="ltr"). */
  date: string
}

export interface SubscriptionDocumentsContent {
  title: string
  /** The ticked "what this file must contain" list above the uploaded files. */
  checklist: string[]
  documents: SubscriptionDocument[]
}

export interface SubscriptionDetailsPageContent {
  breadcrumbs: BreadcrumbItem[]
  title: string
  personal: SubscriptionDetailsSection
  professional: SubscriptionDetailsSection
  documents: SubscriptionDocumentsContent
}
