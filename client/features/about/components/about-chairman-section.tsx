import Image from "next/image"
import Link from "next/link"

import type { AboutPageContent } from "../types/about-content.types"

interface AboutChairmanSectionProps {
  chairman: AboutPageContent["chairman"]
}

export function AboutChairmanSection({ chairman }: AboutChairmanSectionProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1640px] px-5 py-10 sm:px-8 sm:py-14 lg:px-14">
        <Link
          href={chairman.detailsHref}
          className="block overflow-hidden rounded-xl bg-white shadow-[0_12px_28px_rgba(0,0,0,.06)] transition-shadow hover:shadow-[0_16px_32px_rgba(0,0,0,.1)] lg:grid lg:grid-cols-[minmax(240px,320px)_1fr]"
        >
          <div className="relative mx-auto aspect-[4/5] w-56 bg-white lg:mx-0 lg:h-full lg:w-full lg:aspect-auto lg:min-h-[280px]">
            <Image
              src={chairman.image.src}
              alt={chairman.image.alt}
              fill
              sizes="320px"
              className="object-contain object-bottom"
              priority
            />
          </div>

          <div className="bg-brand px-6 py-8 text-center text-white lg:px-10 lg:py-12 lg:text-start">
            <p className="text-sm font-medium text-white/80 sm:text-base">
              {chairman.role}
            </p>
            <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl lg:text-4xl">
              {chairman.name}
            </h2>
            <p className="mt-5 max-w-3xl text-sm leading-8 text-white/85 sm:text-base">
              {chairman.bio}
            </p>
          </div>
        </Link>
      </div>
    </section>
  )
}