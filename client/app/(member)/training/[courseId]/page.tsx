import type { Metadata } from "next"

import { siteShellContent } from "@/features/site-shell"
import {
  CourseDetailsPageView,
  getCourseDetailsPageContent,
} from "@/features/training"

interface CourseDetailsPageProps {
  params: Promise<{ courseId: string }>
}

export async function generateMetadata({
  params,
}: CourseDetailsPageProps): Promise<Metadata> {
  const { courseId } = await params
  const { overview } = getCourseDetailsPageContent(courseId)

  return {
    title: `${overview.title} | ${siteShellContent.brand.name}`,
    description: overview.outcomes,
  }
}

export default async function CourseDetailsPage({
  params,
}: CourseDetailsPageProps) {
  const { courseId } = await params

  return (
    <CourseDetailsPageView content={getCourseDetailsPageContent(courseId)} />
  )
}
