import type { Metadata } from "next"

import {
  EventDetailsPageView,
  getEventDetailsPageContent,
} from "@/features/events"
import { siteShellContent } from "@/features/site-shell"

interface EventDetailsPageProps {
  params: Promise<{ eventId: string }>
}

export async function generateMetadata({
  params,
}: EventDetailsPageProps): Promise<Metadata> {
  const { eventId } = await params
  const content = getEventDetailsPageContent(eventId)

  return {
    title: `${content.title} | ${siteShellContent.brand.name}`,
    description: content.paragraphs[0],
  }
}

export default async function EventDetailsPage({
  params,
}: EventDetailsPageProps) {
  const { eventId } = await params

  return (
    <EventDetailsPageView content={getEventDetailsPageContent(eventId)} />
  )
}
