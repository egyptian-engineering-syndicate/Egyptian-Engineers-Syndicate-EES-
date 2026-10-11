import type { Metadata } from "next"

import {
  CommitteeDetailsPageView,
  getCommitteeDetailsPageContent,
} from "@/features/committees"
import { siteShellContent } from "@/features/site-shell"

interface CommitteeDetailsPageProps {
  params: Promise<{ committeeId: string }>
}

export async function generateMetadata({
  params,
}: CommitteeDetailsPageProps): Promise<Metadata> {
  const { committeeId } = await params
  const content = getCommitteeDetailsPageContent(committeeId)

  return {
    title: `${content.title} | ${siteShellContent.brand.name}`,
    description: content.paragraphs[0],
  }
}

export default async function CommitteeDetailsPage({
  params,
}: CommitteeDetailsPageProps) {
  const { committeeId } = await params

  return (
    <CommitteeDetailsPageView
      content={getCommitteeDetailsPageContent(committeeId)}
    />
  )
}
