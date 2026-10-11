import { PageBreadcrumb } from "@/features/site-shell"

import type { ContactPageContent } from "../types/contact-content.types"
import { ContactAddressesSection } from "./contact-addresses-section"
import { ContactForm } from "./contact-form"
import { ContactInfoSection } from "./contact-info-section"

interface ContactPageViewProps {
  content: ContactPageContent
}

export function ContactPageView({ content }: ContactPageViewProps) {
  return (
    <main className="bg-page-surface">
      <PageBreadcrumb items={content.breadcrumbs} />

      <div className="mx-auto w-full max-w-[1640px] px-5 py-10 sm:px-8 sm:py-12 lg:px-14">
        <ContactAddressesSection content={content} />

        <div className="relative my-12 flex h-10 items-start justify-center overflow-hidden sm:my-14">
          <div className="absolute inset-x-0 top-0 h-2 bg-brand" />
          <div
            aria-hidden="true"
            className="relative mt-2 h-0 w-0 border-x-[36px] border-t-[22px] border-x-transparent border-t-brand"
          />
        </div>

        <section className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-14">
          <ContactInfoSection
            title={content.infoTitle}
            description={content.infoDescription}
            items={content.infoItems}
          />
          <ContactForm content={content.form} />
        </section>
      </div>
    </main>
  )
}
