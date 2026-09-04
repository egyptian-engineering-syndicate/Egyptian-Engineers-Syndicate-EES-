import type { Metadata } from "next"

import {
  BookingDetailsPageView,
  getBookingDetailsPageContent,
} from "@/features/profile"
import { siteShellContent } from "@/features/site-shell"

interface BookingDetailsPageProps {
  params: Promise<{ bookingId: string }>
}

export async function generateMetadata({
  params,
}: BookingDetailsPageProps): Promise<Metadata> {
  const { bookingId } = await params
  const { summary } = getBookingDetailsPageContent(bookingId)

  return {
    title: `${summary.title} | ${siteShellContent.brand.name}`,
    description: summary.description,
  }
}

export default async function BookingDetailsPage({
  params,
}: BookingDetailsPageProps) {
  const { bookingId } = await params

  return (
    <BookingDetailsPageView content={getBookingDetailsPageContent(bookingId)} />
  )
}
