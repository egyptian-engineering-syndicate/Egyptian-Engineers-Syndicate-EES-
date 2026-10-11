import Image from "next/image"

import type { ClubDetailsPageContent } from "../types/clubs-content.types"

interface ClubCulturalSectionProps {
  content: ClubDetailsPageContent["cultural"]
}

export function ClubCulturalSection({ content }: ClubCulturalSectionProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto grid w-full max-w-[1640px] items-start gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-2 lg:gap-14 lg:px-14">
        <div>
          <h2 className="text-3xl font-extrabold text-neutral-950 sm:text-4xl">
            {content.title}
          </h2>
          <ul className="mt-6 space-y-3">
            {content.activities.map((activity) => (
              <li
                key={activity.id}
                className="rounded-xl bg-neutral-50 px-5 py-4 shadow-[0_8px_20px_rgba(0,0,0,.04)]"
              >
                <h3 className="text-sm font-extrabold text-neutral-950 sm:text-base">
                  {activity.title}
                </h3>
                <p className="mt-1 text-sm leading-7 text-neutral-500">
                  {activity.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-xl lg:min-h-[640px] lg:aspect-auto">
          <Image
            src={content.image.src}
            alt={content.image.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
