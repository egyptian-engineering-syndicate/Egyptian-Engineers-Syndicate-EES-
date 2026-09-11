import { PageBreadcrumb } from "@/features/site-shell"

import type { SubscriptionDetailsPageContent } from "../types/subscription-details-content.types"
import { SubscriptionDocumentsCard } from "./subscription-documents-card"
import { SubscriptionSectionCard } from "./subscription-section-card"

interface SubscriptionDetailsPageViewProps {
  content: SubscriptionDetailsPageContent
}

export function SubscriptionDetailsPageView({
  content,
}: SubscriptionDetailsPageViewProps) {
  return (
    <main className="bg-page-surface">
      <PageBreadcrumb items={content.breadcrumbs} />

      <div className="mx-auto w-full max-w-[1640px] space-y-6 px-5 py-10 sm:space-y-8 sm:px-8 sm:py-12 lg:px-14">
        {/* The design opens straight on the cards; the page still needs a heading. */}
        <h1 className="sr-only">{content.title}</h1>

        <SubscriptionSectionCard section={content.personal} />
        <SubscriptionSectionCard section={content.professional} />
        <SubscriptionDocumentsCard content={content.documents} />
      </div>
    </main>
  )
}
