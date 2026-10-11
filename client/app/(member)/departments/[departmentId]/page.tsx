import type { Metadata } from "next"

import {
  DepartmentDetailsPageView,
  getDepartmentDetailsPageContent,
} from "@/features/departments"
import { siteShellContent } from "@/features/site-shell"

interface DepartmentDetailsPageProps {
  params: Promise<{ departmentId: string }>
}

export async function generateMetadata({
  params,
}: DepartmentDetailsPageProps): Promise<Metadata> {
  const { departmentId } = await params
  const content = getDepartmentDetailsPageContent(departmentId)

  return {
    title: `${content.title} | ${siteShellContent.brand.name}`,
    description: content.paragraphs[0],
  }
}

export default async function DepartmentDetailsPage({
  params,
}: DepartmentDetailsPageProps) {
  const { departmentId } = await params

  return (
    <DepartmentDetailsPageView
      content={getDepartmentDetailsPageContent(departmentId)}
    />
  )
}
