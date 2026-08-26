import type { RenewalPageContent } from "../types/membership-content.types"
import { MemberSummaryCard } from "./member-summary-card"
import { MembershipBreadcrumb } from "./membership-breadcrumb"
import { RenewalPlansSection } from "./renewal-plans-section"

interface RenewalPageViewProps {
  content: RenewalPageContent
}

export function RenewalPageView({ content }: RenewalPageViewProps) {
  return (
    <main>
      <MembershipBreadcrumb items={content.breadcrumbs} />

      <section className="bg-white pt-10 pb-14 sm:pt-12">
        <div className="mx-auto w-full max-w-[1640px] px-5 sm:px-8 lg:px-14">
          <h1 className="text-3xl font-extrabold text-neutral-950 sm:text-4xl">
            {content.title}
          </h1>
          <p className="mt-2 text-sm text-neutral-500 sm:text-base">
            {content.description}
          </p>

          <div className="mt-8">
            <MemberSummaryCard
              member={content.member}
              labels={content.memberCardLabels}
            />
          </div>
        </div>
      </section>

      <RenewalPlansSection content={content} />
    </main>
  )
}
