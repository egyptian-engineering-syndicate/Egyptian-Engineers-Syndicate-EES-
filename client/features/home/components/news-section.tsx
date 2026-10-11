import Link from "next/link"
import Image from "next/image"
import { CalendarDays } from "lucide-react"

import { Button } from "@/components/ui/button"

import type { HomePageContent } from "../types/home-content.types"
import { SectionHeading } from "./section-heading"

interface NewsSectionProps {
  content: HomePageContent["news"]
}

export function NewsSection({ content }: NewsSectionProps) {
  return (
    <section className="bg-[#fafafa] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-[1640px] px-5 sm:px-8 lg:px-14">
        <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            accent={content.accent}
            title={content.title}
            description={content.description}
            align="start"
            className="max-w-5xl"
          />
          <Button
            asChild
            variant="outline"
            className="h-13 w-fit rounded-md border-neutral-300 bg-white px-8 text-base font-medium text-neutral-600 hover:bg-neutral-50"
          >
            <Link href="/news">{content.viewMore}</Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.12fr_.88fr] lg:items-start">
          <article className="relative">
            <div className="relative aspect-[1.42/1] min-h-[420px] overflow-hidden rounded-xl sm:min-h-[540px]">
              <Image
                src="/images/login-construction.jpg"
                alt={content.featured.imageAlt}
                fill
                sizes="(max-width: 1024px) 92vw, 57vw"
                className="object-cover"
                style={{ objectPosition: content.featured.imagePosition }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(0,0,0,.22)_100%)]" />
            </div>
            <div className="relative z-10 mx-4 -mt-14 rounded-xl border border-brand bg-white px-5 py-6 shadow-[0_16px_34px_rgba(0,0,0,.08)] sm:mx-6 sm:-mt-24 sm:px-8">
              <h3 className="text-xl leading-8 font-extrabold text-neutral-950 sm:text-2xl lg:text-[1.7rem]">
                {content.featured.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-600 sm:text-base">
                {content.featured.excerpt}
              </p>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-200 pt-4 text-sm text-neutral-500">
                <span className="flex items-center gap-2">
                  <CalendarDays aria-hidden="true" className="size-5 text-brand" />
                  {content.featured.date}
                </span>
                <span>{content.readMore}</span>
              </div>
            </div>
          </article>

          <div className="grid gap-6 sm:grid-cols-2">
            {content.items.map((article, index) => (
              <article
                key={`${article.title}-${index}`}
                className="overflow-hidden rounded-md bg-white shadow-[0_10px_26px_rgba(0,0,0,.07)]"
              >
                <div className="relative aspect-[1.75/1]">
                  <Image
                    src="/images/login-construction.jpg"
                    alt={article.imageAlt}
                    fill
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 22vw"
                    className="object-cover"
                    style={{ objectPosition: article.imagePosition }}
                  />
                  <div className="absolute inset-0 bg-brand/5" />
                </div>
                <div className="px-5 py-5">
                  <h3 className="line-clamp-1 text-lg leading-7 font-extrabold text-neutral-950 sm:text-xl">
                    {article.title}
                  </h3>
                  <p className="mt-2 line-clamp-1 text-sm leading-6 text-neutral-500">
                    {article.excerpt}
                  </p>
                  <p className="mt-4 border-t border-neutral-200 pt-4 text-sm text-neutral-500">
                    {content.readMore}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
