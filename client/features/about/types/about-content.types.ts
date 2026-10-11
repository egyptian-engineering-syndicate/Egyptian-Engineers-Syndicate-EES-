import type { BreadcrumbItem } from "@/features/site-shell"

export interface AboutImage {
  src: string
  alt: string
}

export interface AboutBoardMember {
  id: string
  name: string
  role: string
  detailsHref: string
  image: AboutImage
}

export interface AboutPageContent {
  breadcrumbs: BreadcrumbItem[]
  intro: {
    title: string
    paragraphs: string[]
    image: AboutImage
  }
  goals: {
    title: string
    description: string
    image: AboutImage
  }
  vision: {
    title: string
    description: string
  }
  chairman: {
    id: string
    role: string
    name: string
    bio: string
    detailsHref: string
    image: AboutImage
  }
  membersTitle: string
  members: AboutBoardMember[]
}

export interface AboutMemberDetailsPageContent {
  breadcrumbs: BreadcrumbItem[]
  pageTitle: string
  name: string
  accentTitles: string[]
  membershipTitles: string[]
  bio: string[]
  image: AboutImage
}
