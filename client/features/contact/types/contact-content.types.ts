import type { BreadcrumbItem } from "@/features/site-shell"

export interface ContactAddress {
  id: string
  title: string
  branch: string
  address: string
  phones: string
  email: string
}

export interface ContactInfoItem {
  label: string
  value: string
  type: "address" | "phone" | "email"
}

export interface ContactPageContent {
  breadcrumbs: BreadcrumbItem[]
  addressesTitle: string
  addressLabel: string
  phoneLabel: string
  emailLabel: string
  addresses: ContactAddress[]
  infoTitle: string
  infoDescription: string
  infoItems: ContactInfoItem[]
  form: {
    title: string
    description: string
    nameLabel: string
    namePlaceholder: string
    emailLabel: string
    emailPlaceholder: string
    phoneLabel: string
    phonePlaceholder: string
    subjectLabel: string
    subjectPlaceholder: string
    subjectOptions: { value: string; label: string }[]
    messageLabel: string
    messagePlaceholder: string
    sendLabel: string
    validation: {
      nameRequired: string
      emailRequired: string
      emailInvalid: string
      phoneRequired: string
      phoneInvalid: string
      subjectRequired: string
      messageRequired: string
    }
  }
}
