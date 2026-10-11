import Image from "next/image"

import type { PracticeDetailsPageContent } from "../types/practice-content.types"

interface PracticeDetailsHeroProps {
  content: Pick<PracticeDetailsPageContent, "title" | "description" | "image">
}

export function PracticeDetailsHero({ content }: PracticeDetailsHeroProps) {
  return (
    <section>
      <h1 className="text-3xl font-extrabold text-neutral-950 sm:text-4xl">
        {content.title}
      </h1>
      <p className="mt-4 max-w-4xl text-sm leading-8 text-neutral-600 sm:text-base">
        {content.description}
      </p>

      <div className="relative mt-8 aspect-[21/7] min-h-[180px] w-full overflow-hidden rounded-xl">
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 z-10 h-3 bg-brand"
        />
        <Image
          src={content.image.src}
          alt={content.image.alt}
          fill
          sizes="(max-width: 1640px) 100vw, 1640px"
          className="object-cover"
          priority
        />
      </div>
    </section>
  )
}
