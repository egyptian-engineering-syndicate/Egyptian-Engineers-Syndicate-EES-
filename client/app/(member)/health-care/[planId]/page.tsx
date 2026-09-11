import type { Metadata } from "next"

import {
  getHealthCareDetailsPageContent,
  HealthCareDetailsPageView,
} from "@/features/health-care"
import { siteShellContent } from "@/features/site-shell"

interface HealthCareDetailsPageProps {
  params: Promise<{ planId: string }>
}

export async function generateMetadata({
  params,
}: HealthCareDetailsPageProps): Promise<Metadata> {
  const { planId } = await params
  const { summary } = getHealthCareDetailsPageContent(planId)

  return {
    title: `${summary.title} | ${siteShellContent.brand.name}`,
    description: summary.description,
  }
}

export default async function HealthCareDetailsPage({
  params,
}: HealthCareDetailsPageProps) {
  const { planId } = await params

  return (
    <HealthCareDetailsPageView content={getHealthCareDetailsPageContent(planId)} />
  )
}
