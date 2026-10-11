import type { Metadata } from "next"

import { ClubDetailsPageView, getClubDetailsPageContent } from "@/features/clubs"
import { siteShellContent } from "@/features/site-shell"

interface ClubDetailsPageProps {
  params: Promise<{ clubId: string }>
}

export async function generateMetadata({
  params,
}: ClubDetailsPageProps): Promise<Metadata> {
  const { clubId } = await params
  const content = getClubDetailsPageContent(clubId)

  return {
    title: `${content.title} | ${siteShellContent.brand.name}`,
    description: content.intro,
  }
}

export default async function ClubDetailsPage({ params }: ClubDetailsPageProps) {
  const { clubId } = await params

  return <ClubDetailsPageView content={getClubDetailsPageContent(clubId)} />
}
