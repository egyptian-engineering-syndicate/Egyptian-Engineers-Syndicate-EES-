export type HomeIconName =
  | "airplane"
  | "book"
  | "card"
  | "health"
  | "pension"
  | "practice"

export interface HomeService {
  title: string
  description: string
  details: string[]
  icon: HomeIconName
}

export interface DepartmentCardContent {
  title: string
  description: string
  imageAlt: string
  imagePosition: string
}

export interface NewsCardContent {
  title: string
  excerpt: string
  imageAlt: string
  imagePosition: string
  date?: string
}

export interface HomePageContent {
  hero: {
    eyebrow: string
    title: string
    description: string
    imageAlt: string
    searchLabel: string
    searchPlaceholder: string
    searchButton: string
    stats: { value: string; label: string }[]
  }
  services: {
    title: string
    description: string
    learnMore: string
    items: HomeService[]
  }
  advertisement: {
    accent: string
    title: string
    description: string
    imageAlt: string
    offer: string
    offerDescription: string
    offerNote: string
  }
  departments: {
    title: string
    description: string
    learnMore: string
    items: DepartmentCardContent[]
  }
  news: {
    accent: string
    title: string
    description: string
    viewMore: string
    readMore: string
    featured: NewsCardContent
    items: NewsCardContent[]
  }
  contact: {
    infoTitle: string
    description: string
    addressLabel: string
    address: string
    phoneLabel: string
    phone: string
    emailLabel: string
    email: string
    formTitle: string
    formDescription: string
    nameLabel: string
    namePlaceholder: string
    emailPlaceholder: string
    phonePlaceholder: string
    subjectLabel: string
    subjectPlaceholder: string
    messageLabel: string
    messagePlaceholder: string
    sendLabel: string
  }
}
