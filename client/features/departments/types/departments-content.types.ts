import type { BreadcrumbItem } from "@/features/site-shell"

export interface DepartmentImage {
  src: string
  alt: string
}

export interface Department {
  id: string
  title: string
  description: string
  detailsHref: string
  image: DepartmentImage
}

export interface DepartmentsPageContent {
  breadcrumbs: BreadcrumbItem[]
  title: string
  detailsLabel: string
  departments: Department[]
}

export interface DepartmentDetailsPageContent {
  breadcrumbs: BreadcrumbItem[]
  title: string
  paragraphs: string[]
  image: DepartmentImage
}
