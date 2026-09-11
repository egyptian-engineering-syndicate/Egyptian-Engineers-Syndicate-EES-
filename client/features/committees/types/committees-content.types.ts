import type { BreadcrumbItem } from "@/features/site-shell"

export interface CommitteeImage {
  src: string
  alt: string
}

export interface Committee {
  id: string
  title: string
  description: string
  detailsHref: string
  image: CommitteeImage
}

export interface CommitteesPageContent {
  breadcrumbs: BreadcrumbItem[]
  title: string
  loadMoreLabel: string
  detailsLabel: string
  committees: Committee[]
}

export interface CommitteeMember {
  id: string
  name: string
  role: string
  image: CommitteeImage
}

export interface CommitteeDetailsPageContent {
  breadcrumbs: BreadcrumbItem[]
  title: string
  /** Body copy of the committee brief, one entry per rendered paragraph. */
  paragraphs: string[]
  image: CommitteeImage
  membersTitle: string
  members: CommitteeMember[]
}
