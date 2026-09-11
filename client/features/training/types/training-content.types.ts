import type { BreadcrumbItem } from "@/features/site-shell"

export interface CourseImage {
  src: string
  alt: string
}

export interface Course {
  id: string
  title: string
  /** Difficulty pill shown on the card, e.g. مبتدئ / متوسط / متقدم. */
  level: string
  durationLabel: string
  seatsLabel: string
  price: number
  subscribeHref: string
  image: CourseImage
}

export interface TrainingPageContent {
  breadcrumbs: BreadcrumbItem[]
  title: string
  description: string
  searchLabel: string
  searchPlaceholder: string
  noResultsMessage: string
  loadMoreLabel: string
  subscribeLabel: string
  priceUnitLabel: string
  courses: Course[]
}
