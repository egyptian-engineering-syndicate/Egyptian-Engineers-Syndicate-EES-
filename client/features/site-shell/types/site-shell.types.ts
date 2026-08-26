export interface BreadcrumbItem {
  label: string
  href?: string
}

export interface NavigationItem {
  label: string
  href: string
  hasMenu?: boolean
}

export interface SiteShellUser {
  greeting: string
  name: string
}

export interface SiteShellContent {
  brand: {
    name: string
    shortName: string
    description: string
  }
  navigation: NavigationItem[]
  login: {
    label: string
    href: string
  }
  footer: {
    quickLinksTitle: string
    quickLinks: NavigationItem[]
    contactTitle: string
    address: string
    email: string
    phone: string
    newsletterTitle: string
    newsletterDescription: string
    emailLabel: string
    emailPlaceholder: string
    subscribeLabel: string
    copyright: string
  }
}
