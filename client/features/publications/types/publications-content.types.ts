import type { BreadcrumbItem } from "@/features/site-shell"

export interface Publication {
  id: string
  title: string
  date: string
}

export interface PublicationsPageContent {
  breadcrumbs: BreadcrumbItem[]
  title: string
  items: Publication[]
}
