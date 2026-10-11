import { PageBreadcrumb } from "@/features/site-shell"

import type { PensionPageContent } from "../types/pensions-content.types"
import { PensionDocumentsCard } from "./pension-documents-card"
import { PensionPlanCard } from "./pension-plan-card"

interface PensionsPageViewProps {
  content: PensionPageContent
}

export function PensionsPageView({ content }: PensionsPageViewProps) {
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

        <ul className="mt-8 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {content.plans.map((plan) => (
            <li key={plan.id}>
              <PensionPlanCard plan={plan} />
            </li>
          ))}
        </ul>
      </div>

      <section className="ees-green-pattern relative">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[55%] rounded-b-[2rem] bg-page-surface sm:rounded-b-[2.5rem]"
        />
        <div className="relative mx-auto w-full max-w-[1640px] px-5 py-10 sm:px-8 sm:py-14 lg:px-14">
          <PensionDocumentsCard
            title={content.requiredDocuments.title}
            items={content.requiredDocuments.items}
          />
        </div>
      </section>
    </main>
  )
}
