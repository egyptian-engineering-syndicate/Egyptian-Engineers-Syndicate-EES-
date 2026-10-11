import Image from "next/image"

import { SurfaceCard } from "@/components/surface-card"
import { PageBreadcrumb } from "@/features/site-shell"

import type { AboutMemberDetailsPageContent } from "../types/about-content.types"

interface AboutMemberDetailsPageViewProps {
  content: AboutMemberDetailsPageContent
}

export function AboutMemberDetailsPageView({
  content,
}: AboutMemberDetailsPageViewProps) {
  return (
    <main className="bg-page-surface">
      <PageBreadcrumb items={content.breadcrumbs} />

      <div className="mx-auto w-full max-w-[1640px] px-5 py-10 sm:px-8 sm:py-12 lg:px-14">
        <h1 className="text-3xl font-extrabold text-neutral-950 sm:text-4xl">
          {content.pageTitle}
        </h1>

        <div className="mt-8 grid items-start gap-4 lg:grid-cols-[minmax(260px,420px)_minmax(0,1fr)] lg:gap-5">
          <div className="relative w-full ps-5 sm:ps-7">
            <div className="relative h-[300px] overflow-hidden rounded-xl bg-white shadow-[0_12px_28px_rgba(0,0,0,.06)] sm:h-[340px] lg:h-[380px]">
              <div className="absolute inset-4 sm:inset-6">
                <Image
                  src={content.image.src}
                  alt={content.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-contain object-bottom"
                  priority
                />
              </div>
            </div>
            <span
              aria-hidden="true"
              className="absolute top-[12%] start-0 z-10 h-[76%] w-6 rounded-full bg-brand sm:w-8"
            />
          </div>

          <SurfaceCard className="px-6 py-8 sm:px-8 sm:py-10">
            <h2 className="text-2xl font-extrabold text-neutral-950 sm:text-3xl">
              {content.name}
            </h2>
            {content.accentTitles.length > 0 ? (
              <ul className="mt-4 space-y-1">
                {content.accentTitles.map((title) => (
                  <li
                    key={title}
                    className="text-sm font-bold leading-7 text-brand sm:text-base"
                  >
                    {title}
                  </li>
                ))}
              </ul>
            ) : null}
            {content.membershipTitles.length > 0 ? (
              <ul className="mt-2 space-y-1">
                {content.membershipTitles.map((title) => (
                  <li
                    key={title}
                    className="text-sm font-extrabold leading-7 text-neutral-950 sm:text-base"
                  >
                    {title}
                  </li>
                ))}
              </ul>
            ) : null}
            <div className="mt-6 space-y-4 text-sm leading-8 text-neutral-600 sm:text-base">
              {content.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </SurfaceCard>
        </div>
      </div>
    </main>
  )
}
