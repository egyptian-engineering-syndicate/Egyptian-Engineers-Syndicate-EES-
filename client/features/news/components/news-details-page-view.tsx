import Image from "next/image"
import { CalendarDays } from "lucide-react"

import { PageBreadcrumb } from "@/features/site-shell"

import type { NewsDetailsPageContent } from "../types/news-content.types"
import { NewsCard } from "./news-card"

interface NewsDetailsPageViewProps {
  content: NewsDetailsPageContent
  detailsLabel: string
}

export function NewsDetailsPageView({
  content,
  detailsLabel,
}: NewsDetailsPageViewProps) {
  return (
    <main className="bg-page-surface">
      <PageBreadcrumb items={content.breadcrumbs} />

      <div className="mx-auto w-full max-w-[1640px] px-5 py-10 sm:px-8 sm:py-12 lg:px-14">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h1 className="text-2xl font-extrabold text-neutral-950 sm:text-3xl">
              {content.title}
            </h1>
            <p className="mt-3 flex items-center gap-2 text-sm text-neutral-500">
              <CalendarDays aria-hidden="true" className="size-4 text-brand" />
              {content.date}
            </p>
            <ol className="mt-6 space-y-4 text-sm leading-8 text-neutral-600 sm:text-base">
              {content.paragraphs.map((paragraph) => (
                <li key={paragraph.marker} className="flex gap-3 text-justify">
                  <span
                    dir="ltr"
                    className="shrink-0 font-bold text-neutral-950"
                  >
                    {paragraph.marker}
                  </span>
                  <span>{paragraph.text}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-xl lg:min-h-[560px] lg:aspect-auto">
            <Image
              src={content.image.src}
              alt={content.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

        <section className="mt-14">
          <h2 className="text-2xl font-extrabold text-neutral-950 sm:text-3xl">
            {content.relatedTitle}
          </h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {content.related.map((article) => (
              <li key={article.id}>
                <NewsCard article={article} detailsLabel={detailsLabel} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  )
}
