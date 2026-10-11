import Image from "next/image"

import type { AboutPageContent } from "../types/about-content.types"

interface AboutIntroSectionProps {
  content: AboutPageContent["intro"]
}

export function AboutIntroSection({ content }: AboutIntroSectionProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1640px] px-5 py-12 sm:px-8 sm:py-16 lg:px-14">
        <div className="mb-10 flex items-center justify-center gap-4">
          <span aria-hidden="true" className="h-px w-16 bg-brand sm:w-28" />
          <h1 className="text-3xl font-extrabold text-neutral-950 sm:text-4xl">
            {content.title}
          </h1>
          <span aria-hidden="true" className="h-px w-16 bg-brand sm:w-28" />
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-5 text-sm leading-8 text-neutral-600 sm:text-base">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-justify">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="relative aspect-[16/10] w-full">
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
        </div>
      </div>
    </section>
  )
}
