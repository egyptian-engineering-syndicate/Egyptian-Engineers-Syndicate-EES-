import { Info } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

import { PageBreadcrumb } from "@/features/site-shell"

import type { PracticeDetailsPageContent } from "../types/practice-content.types"
import { PracticeDetailsHero } from "./practice-details-hero"
import { PracticeInfoCard } from "./practice-info-card"

interface PracticeDetailsPageViewProps {
  content: PracticeDetailsPageContent
}

export function PracticeDetailsPageView({
  content,
}: PracticeDetailsPageViewProps) {
  return (
    <main className="bg-page-surface">
      <PageBreadcrumb items={content.breadcrumbs} />

      <div className="mx-auto w-full max-w-[1640px] space-y-6 px-5 py-10 sm:space-y-8 sm:px-8 sm:py-12 lg:px-14">
      <PracticeDetailsHero content={content} />

      <PracticeInfoCard title={content.specialists.title}>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {content.specialists.items.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-neutral-400" />
              {item}
            </li>
          ))}
        </ul>
      </PracticeInfoCard>

      <div className="grid gap-6 lg:grid-cols-2">
        <PracticeInfoCard title={content.requiredDocuments.title}>
          <ol className="space-y-2">
            {content.requiredDocuments.items.map((item) => (
              <li key={item.marker} className="flex gap-2">
                <span dir="ltr" className="shrink-0 tabular-nums">
                  {item.marker})
                </span>
                <span>{item.text}</span>
              </li>
            ))}
          </ol>
        </PracticeInfoCard>

        <PracticeInfoCard
          title={content.fees.title}
          className="flex min-h-[220px] flex-col items-center justify-center text-center"
        >
         <div className="mx-auto grid size-16 place-items-center rounded-full bg-[#edf8f4] text-brand">
  <Info aria-hidden="true" className="size-8" strokeWidth={1.6} />
</div>
          <p className="mt-4 max-w-sm">{content.fees.description}</p>
        </PracticeInfoCard>
      </div>

      <PracticeInfoCard title={content.extraInfo.title}>
        <ol className="space-y-2">
          {content.extraInfo.items.map((item) => (
            <li key={item.marker} className="flex gap-2">
              <span dir="ltr" className="shrink-0 tabular-nums">
                {item.marker})
              </span>
              <span>{item.text}</span>
            </li>
          ))}
        </ol>
      </PracticeInfoCard>

      <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl bg-white px-6 py-6 shadow-[0_12px_28px_rgba(0,0,0,.06)] sm:px-8">
        <h2 className="text-lg font-extrabold text-neutral-950 sm:text-xl">
          {content.apply.title}
        </h2>
        <Button
          asChild
          className="h-12 rounded-md bg-brand px-8 text-base font-semibold text-white hover:bg-brand-strong"
        >
          <Link href={content.apply.href}>{content.apply.label}</Link>
        </Button>
      </div>
      </div>
    </main>
  )
}
