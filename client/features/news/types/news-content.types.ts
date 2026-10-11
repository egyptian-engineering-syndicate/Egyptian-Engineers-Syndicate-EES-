import type { BreadcrumbItem } from "@/features/site-shell"

export interface NewsImage {
  src: string
  alt: string
}

export interface NewsArticle {
  id: string
  title: string
  excerpt: string
  date: string
  detailsHref: string
  image: NewsImage
}

export interface NewsPageContent {
  breadcrumbs: BreadcrumbItem[]
  title: string
  searchLabel: string
  searchPlaceholder: string
  detailsLabel: string
  loadMoreLabel: string
  noResultsMessage: string
  articles: NewsArticle[]
}

export interface NewsBodyLine {
  marker: string
  text: string
}

export interface NewsDetailsPageContent {
  breadcrumbs: BreadcrumbItem[]
  title: string
  date: string
  paragraphs: NewsBodyLine[]
  image: NewsImage
  relatedTitle: string
  related: NewsArticle[]
}
