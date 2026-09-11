import type { RenewalPageContent } from "../types/membership-content.types"
import { SubscriptionPlanCard } from "./subscription-plan-card"

interface RenewalPlansSectionProps {
  content: RenewalPageContent
}

export function RenewalPlansSection({ content }: RenewalPlansSectionProps) {
  return (
    <section className="relative overflow-hidden bg-page-surface pb-16 sm:pb-20">
      <div className="ees-green-pattern absolute inset-y-0 right-0 w-full sm:w-[68%]" />
      <div className="relative mx-auto w-full max-w-[1640px] px-5 pt-12 sm:px-8 lg:px-14">
        <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
          {content.plansSection.title}
        </h2>

        <div className="mt-8 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {content.plans.map((plan) => (
            <SubscriptionPlanCard
              key={plan.id}
              plan={plan}
              selectLabel={content.selectPlanLabel}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
