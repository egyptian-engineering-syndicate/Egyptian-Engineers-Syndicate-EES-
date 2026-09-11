import {
  BookOpen,
  BriefcaseMedical,
  CreditCard,
  HandHeart,
  Plane,
  WalletCards,
} from "lucide-react"

import type {
  HomeIconName,
  HomePageContent,
} from "../types/home-content.types"
import { SectionHeading } from "./section-heading"

const iconMap = {
  airplane: Plane,
  book: BookOpen,
  card: CreditCard,
  health: BriefcaseMedical,
  pension: WalletCards,
  practice: HandHeart,
} satisfies Record<HomeIconName, typeof Plane>

interface ServicesSectionProps {
  content: HomePageContent["services"]
}

export function ServicesSection({ content }: ServicesSectionProps) {
  return (
    <section className="ees-light-pattern relative overflow-hidden pb-24 sm:pb-32 lg:pb-36">
      <div className="ees-green-pattern absolute inset-x-0 top-0 h-[300px] rounded-b-[38px] lg:h-[330px]" />
      <div className="relative mx-auto w-full max-w-[1640px] px-5 pt-10 sm:px-8 lg:px-14 lg:pt-12">
        <SectionHeading
          title={content.title}
          description={content.description}
          inverse
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:mt-7 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-10">
          {content.items.map((service) => {
            const Icon = iconMap[service.icon]

            return (
              <article
                key={service.title}
                className="flex min-h-[320px] flex-col rounded-md border border-neutral-200 bg-white px-8 py-7 text-center shadow-[0_12px_28px_rgba(0,0,0,.07)] sm:px-10"
              >
                <div className="mx-auto grid size-14 place-items-center rounded-lg bg-[#ecfaf5] text-brand">
                  <Icon aria-hidden="true" className="size-6" strokeWidth={1.8} />
                </div>
                <h3 className="mt-4 text-xl font-extrabold text-neutral-950 lg:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-neutral-500 sm:text-base">
                  {service.description}
                </p>
                <ul className="mx-auto mt-3 w-fit list-disc space-y-2 pe-5 text-start text-sm leading-6 text-neutral-500 sm:text-base">
                  {service.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                <div className="mt-auto border-t border-neutral-200 pt-4 text-sm text-neutral-400 sm:text-base">
                  {content.learnMore}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
