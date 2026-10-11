import Image from "next/image"

import type { CourseOverviewContent } from "../types/course-details-content.types"

interface CourseOverviewSectionProps {
  content: CourseOverviewContent
}

export function CourseOverviewSection({ content }: CourseOverviewSectionProps) {
  return (
    <section className="bg-page-surface">
      <div className="mx-auto grid w-full max-w-[1640px] items-center gap-12 px-5 py-12 sm:px-8 sm:py-14 lg:grid-cols-2 lg:gap-16 lg:px-14">
        {/* `lg:order-last` puts the photo in the second column — the left half in RTL. */}
        <div className="relative aspect-[16/10] w-full lg:order-last">
          <span
            aria-hidden="true"
            className="absolute inset-x-6 -top-4 -bottom-4 rounded-xl bg-brand"
          />
          <div className="absolute inset-0 overflow-hidden rounded-xl">
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

        <div>
          <h1 className="text-3xl font-extrabold text-neutral-950 sm:text-4xl">
            {content.title}
          </h1>

          <div className="mt-6 space-y-5 text-sm leading-8 text-neutral-600 sm:text-base">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-justify">
                {paragraph}
              </p>
            ))}
          </div>

          <h2 className="mt-8 text-lg font-extrabold text-neutral-950 sm:text-xl">
            {content.outcomesTitle}
          </h2>
          <p className="mt-4 text-justify text-sm leading-8 text-neutral-600 sm:text-base">
            {content.outcomes}
          </p>
        </div>
      </div>
    </section>
  )
}
