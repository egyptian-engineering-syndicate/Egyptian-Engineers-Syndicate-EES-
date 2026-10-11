import type { Metadata } from "next"

import {
  AboutMemberDetailsPageView,
  getAboutMemberDetailsPageContent,
} from "@/features/about"
import { siteShellContent } from "@/features/site-shell"

interface AboutMemberDetailsPageProps {
  params: Promise<{ memberId: string }>
}

export async function generateMetadata({
  params,
}: AboutMemberDetailsPageProps): Promise<Metadata> {
  const { memberId } = await params
  const content = getAboutMemberDetailsPageContent(memberId)

  return {
    title: `${content.name} | ${siteShellContent.brand.name}`,
    description: content.bio[0],
  }
}

export default async function AboutMemberDetailsPage({
  params,
}: AboutMemberDetailsPageProps) {
  const { memberId } = await params

  return (
    <AboutMemberDetailsPageView
      content={getAboutMemberDetailsPageContent(memberId)}
    />
  )
}
