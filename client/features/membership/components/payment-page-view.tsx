import { Card, CardContent } from "@/components/ui/card"
import { PageBreadcrumb } from "@/features/site-shell"

import type {
  PaymentPageContent,
  SubscriptionPlan,
} from "../types/membership-content.types"
import { PaymentForm } from "./payment-form"
import { PaymentSummaryCard } from "./payment-summary-card"

interface PaymentPageViewProps {
  content: PaymentPageContent
  plan: SubscriptionPlan
}

export function PaymentPageView({ content, plan }: PaymentPageViewProps) {
  return (
    <main>
      <PageBreadcrumb items={content.breadcrumbs} />

      <section className="ees-green-pattern relative">
        <div className="absolute inset-x-0 top-0 bottom-[160px] rounded-b-[40px] bg-page-surface" />

        <div className="relative mx-auto grid w-full max-w-[1640px] gap-6 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[3fr_2fr] lg:gap-10 lg:px-14">
          <Card className="gap-0 rounded-xl border-0 bg-white py-0 shadow-[0_12px_28px_rgba(0,0,0,.07)]">
            <CardContent className="px-6 py-7 sm:px-7">
              <h1 className="text-2xl font-extrabold text-neutral-950 sm:text-3xl">
                {content.title}
              </h1>
              <p className="mt-1 text-sm text-neutral-500 sm:text-base">
                {content.subtitle}
              </p>

              <div className="mt-6">
                <PaymentForm content={content} />
              </div>
            </CardContent>
          </Card>

          <div className="order-first lg:order-none">
            <PaymentSummaryCard
              plan={plan}
              selectedPackageLabel={content.selectedPackageLabel}
            />
          </div>
        </div>
      </section>
    </main>
  )
}
