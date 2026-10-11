import type { Metadata } from "next"

import {
  getNewsDetailsPageContent,
  newsPageContent,
  NewsDetailsPageView,
} from "@/features/news"
import { siteShellContent } from "@/features/site-shell"

interface NewsDetailsPageProps {
  params: Promise<{ articleId: string }>
}

export async function generateMetadata({
  params,
}: NewsDetailsPageProps): Promise<Metadata> {
  const { articleId } = await params
  const content = getNewsDetailsPageContent(articleId)

  return {
    title: `${content.title} | ${siteShellContent.brand.name}`,
    description: content.paragraphs[0]?.text,
  }
}

export default async function NewsDetailsPage({
  params,
}: NewsDetailsPageProps) {
  const { articleId } = await params

  return (
    <NewsDetailsPageView
      content={getNewsDetailsPageContent(articleId)}
      detailsLabel={newsPageContent.detailsLabel}
    />
  )
}
