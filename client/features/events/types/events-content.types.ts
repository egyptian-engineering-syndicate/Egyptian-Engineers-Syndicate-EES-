import type { BreadcrumbItem } from "@/features/site-shell"

export interface EventImage {
  src: string
  alt: string
}

export interface SyndicateEvent {
  id: string
  title: string
  excerpt: string
  date: string
  detailsHref: string
  image: EventImage
}

export interface EventsPageContent {
  breadcrumbs: BreadcrumbItem[]
  title: string
  featuredEyebrow: string
  featuredCtaLabel: string
  allEventsTitle: string
  detailsLabel: string
  loadMoreLabel: string
  events: SyndicateEvent[]
}

export interface EventDetailsPageContent {
  breadcrumbs: BreadcrumbItem[]
  title: string
  date: string
  paragraphs: string[]
  image: EventImage
}
