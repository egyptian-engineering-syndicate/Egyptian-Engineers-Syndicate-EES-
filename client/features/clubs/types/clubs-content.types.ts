import type { BreadcrumbItem } from "@/features/site-shell"

export interface ClubImage {
  src: string
  alt: string
}

export interface Club {
  id: string
  title: string
  description: string
  excerpt: string
  detailsHref: string
  image: ClubImage
}

export interface ClubsPageContent {
  breadcrumbs: BreadcrumbItem[]
  title: string
  intro: string
  introImage: ClubImage
  clubsTitle: string
  detailsLabel: string
  clubs: Club[]
}

export interface ClubCulturalActivity {
  id: string
  title: string
  description: string
}

export interface ClubSportActivity {
  id: string
  title: string
  description: string
}

export interface ClubDetailsPageContent {
  breadcrumbs: BreadcrumbItem[]
  title: string
  intro: string
  introImage: ClubImage
  cultural: {
    title: string
    image: ClubImage
    activities: ClubCulturalActivity[]
  }
  sports: {
    title: string
    description: string
    activities: ClubSportActivity[]
  }
}
