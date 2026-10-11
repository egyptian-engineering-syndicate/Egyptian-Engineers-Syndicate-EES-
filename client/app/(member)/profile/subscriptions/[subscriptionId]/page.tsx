import type { Metadata } from "next"

import {
  getSubscriptionDetailsPageContent,
  SubscriptionDetailsPageView,
} from "@/features/profile"
import { siteShellContent } from "@/features/site-shell"

interface SubscriptionDetailsPageProps {
  params: Promise<{ subscriptionId: string }>
}

export async function generateMetadata({
  params,
}: SubscriptionDetailsPageProps): Promise<Metadata> {
  const { subscriptionId } = await params
  const { title } = getSubscriptionDetailsPageContent(subscriptionId)

  return {
    title: `${title} | ${siteShellContent.brand.name}`,
    description: title,
  }
}

export default async function SubscriptionDetailsPage({
  params,
}: SubscriptionDetailsPageProps) {
  const { subscriptionId } = await params

  return (
    <SubscriptionDetailsPageView
      content={getSubscriptionDetailsPageContent(subscriptionId)}
    />
  )
}
