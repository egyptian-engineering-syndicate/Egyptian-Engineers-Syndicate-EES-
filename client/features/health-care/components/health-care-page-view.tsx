import { PageBreadcrumb } from "@/features/site-shell"

import type { HealthCarePageContent } from "../types/health-care-content.types"
import { HealthCarePlanCard } from "./health-care-plan-card"

interface HealthCarePageViewProps {
  content: HealthCarePageContent
}

export function HealthCarePageView({ content }: HealthCarePageViewProps) {
  return (
    <main className="bg-page-surface">
      <PageBreadcrumb items={content.breadcrumbs} />

      <div className="mx-auto w-full max-w-[1640px] px-5 py-10 sm:px-8 sm:py-12 lg:px-14">
        <h1 className="text-3xl font-extrabold text-neutral-950 sm:text-4xl">
          {content.title}
        </h1>
        <p className="mt-2 text-sm text-neutral-500 sm:text-base">
          {content.description}
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {content.plans.map((plan) => (
            <HealthCarePlanCard
              key={plan.id}
              plan={plan}
              subscribeLabel={content.subscribeLabel}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
