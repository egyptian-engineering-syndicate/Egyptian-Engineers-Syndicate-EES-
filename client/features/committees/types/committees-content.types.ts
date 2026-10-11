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

export interface CommitteeChair {
  orgTitle: string
  name: string
  bio: string
  image: CommitteeImage
}

export interface CommitteeActivity {
  id: string
  title: string
  description: string
}

export interface CommitteeDetailsPageContent {
  breadcrumbs: BreadcrumbItem[]
  title: string
  paragraphs: string[]
  image: CommitteeImage
  chairTitle: string
  chair: CommitteeChair
  membersTitle: string
  members: CommitteeMember[]
  activitiesTitle: string
  activitiesImage: CommitteeImage
  activities: CommitteeActivity[]
}
