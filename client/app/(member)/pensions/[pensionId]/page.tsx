import type { Metadata } from "next"

import {
  getPensionApplyPageContent,
  PensionApplyPageView,
} from "@/features/pensions"
import { siteShellContent } from "@/features/site-shell"

interface PensionApplyPageProps {
  params: Promise<{ pensionId: string }>
}

export async function generateMetadata({
  params,
}: PensionApplyPageProps): Promise<Metadata> {
  const { pensionId } = await params
  const content = getPensionApplyPageContent(pensionId)

  return {
    title: `${content.title} | ${siteShellContent.brand.name}`,
    description: content.description,
  }
}

export default async function PensionApplyPage({
  params,
}: PensionApplyPageProps) {
  const { pensionId } = await params

  return (
    <PensionApplyPageView content={getPensionApplyPageContent(pensionId)} />
  )
}
