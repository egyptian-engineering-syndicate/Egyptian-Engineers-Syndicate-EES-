import type { Metadata } from "next"

import {
  getPracticeApplyPageContent,
  PracticeApplyPageView,
} from "@/features/practice"
import { siteShellContent } from "@/features/site-shell"

interface PracticeApplyPageProps {
  params: Promise<{ serviceId: string }>
}

export async function generateMetadata({
  params,
}: PracticeApplyPageProps): Promise<Metadata> {
  const { serviceId } = await params
  const content = getPracticeApplyPageContent(serviceId)

  return {
    title: `${content.title} | ${siteShellContent.brand.name}`,
    description: content.description,
  }
}

export default async function PracticeApplyPage({
  params,
}: PracticeApplyPageProps) {
  const { serviceId } = await params

  return (
    <PracticeApplyPageView content={getPracticeApplyPageContent(serviceId)} />
  )
}
