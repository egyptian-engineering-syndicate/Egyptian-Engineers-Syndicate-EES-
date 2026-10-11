import type { Metadata } from "next"

import {
  getPracticeDetailsPageContent,
  PracticeDetailsPageView,
} from "@/features/practice"
import { siteShellContent } from "@/features/site-shell"

interface PracticeDetailsPageProps {
  params: Promise<{ serviceId: string }>
}

export async function generateMetadata({
  params,
}: PracticeDetailsPageProps): Promise<Metadata> {
  const { serviceId } = await params
  const content = getPracticeDetailsPageContent(serviceId)

  return {
    title: `${content.title} | ${siteShellContent.brand.name}`,
    description: content.description,
  }
}

export default async function PracticeDetailsPage({
  params,
}: PracticeDetailsPageProps) {
  const { serviceId } = await params

  return (
    <PracticeDetailsPageView
      content={getPracticeDetailsPageContent(serviceId)}
    />
  )
}
