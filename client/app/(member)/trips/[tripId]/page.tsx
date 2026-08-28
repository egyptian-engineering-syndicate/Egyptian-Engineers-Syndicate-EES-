import type { Metadata } from "next"

import { siteShellContent } from "@/features/site-shell"
import {
  getTripDetailsPageContent,
  TripDetailsPageView,
} from "@/features/trips"

interface TripDetailsPageProps {
  params: Promise<{ tripId: string }>
}

export async function generateMetadata({
  params,
}: TripDetailsPageProps): Promise<Metadata> {
  const { tripId } = await params
  const { summary } = getTripDetailsPageContent(tripId)

  return {
    title: `${summary.title} | ${siteShellContent.brand.name}`,
    description: summary.description,
  }
}

export default async function TripDetailsPage({
  params,
}: TripDetailsPageProps) {
  const { tripId } = await params

  return <TripDetailsPageView content={getTripDetailsPageContent(tripId)} />
}
