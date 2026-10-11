import Image from "next/image"

import { SurfaceCard } from "@/components/surface-card"

import type { ClubImage } from "../types/clubs-content.types"

interface ClubIntroSectionProps {
  title: string
  description: string
  image: ClubImage
}

export function ClubIntroSection({
  title,
  description,
  image,
}: ClubIntroSectionProps) {
  return (
    <section className="bg-page-surface">
      <div className="mx-auto w-full max-w-[1640px] px-5 py-10 sm:px-8 sm:py-12 lg:px-14">
        <div className="relative grid items-center lg:grid-cols-2">
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl lg:min-h-[380px]">
            <span
              aria-hidden="true"
              className="absolute inset-y-6 -start-1 z-10 hidden w-2.5 rounded-s-md bg-brand lg:block"
            />
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
              priority
            />
            <span
              aria-hidden="true"
              className="absolute end-0 bottom-0 h-12 w-28 rounded-ss-xl bg-brand"
            />
          </div>

          <SurfaceCard className="relative z-10 -mt-16 px-6 py-8 sm:px-8 sm:py-9 lg:-ms-20 lg:mt-0 lg:min-h-[280px] lg:self-center">
            <h1 className="text-2xl font-extrabold text-neutral-950 sm:text-3xl">
              {title}
            </h1>
            <p className="mt-4 text-sm leading-8 text-neutral-600 sm:text-base">
              {description}
            </p>
          </SurfaceCard>
        </div>
      </div>
    </section>
  )
}
