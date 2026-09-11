import { PageBreadcrumb } from "@/features/site-shell"

import type { CourseDetailsPageContent } from "../types/course-details-content.types"
import { CourseOverviewSection } from "./course-overview-section"
import { CourseSubscriptionForm } from "./course-subscription-form"
import { CourseTopicsSection } from "./course-topics-section"

interface CourseDetailsPageViewProps {
  content: CourseDetailsPageContent
}

export function CourseDetailsPageView({ content }: CourseDetailsPageViewProps) {
  return (
    <main className="bg-page-surface">
      <PageBreadcrumb items={content.breadcrumbs} />

      <CourseOverviewSection content={content.overview} />
      <CourseTopicsSection content={content.topics} />

      {/* The green band runs behind the lower part of the subscription card,
          with the page surface rounded off where the two meet. */}
      <section className="ees-green-pattern relative">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[70%] rounded-b-[2rem] bg-page-surface sm:rounded-b-[2.5rem]"
        />

        <div className="relative mx-auto w-full max-w-[1640px] px-5 py-12 sm:px-8 sm:py-14 lg:px-14">
          <CourseSubscriptionForm content={content.subscription} />
        </div>
      </section>
    </main>
  )
}
