import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"

import type { TripsPromoContent } from "../types/trips-content.types"

interface TripsPromoBannerProps {
  content: TripsPromoContent
}

export function TripsPromoBanner({ content }: TripsPromoBannerProps) {
  return (
    <section className="overflow-hidden rounded-2xl bg-[linear-gradient(90deg,#e6f4ed_0%,#f6fbf8_45%,#ffffff_100%)] ring-1 ring-neutral-200/80">
      <div className="flex flex-col-reverse items-center gap-8 px-6 py-8 sm:px-10 lg:flex-row lg:gap-14 lg:px-14 lg:py-12">
        <div className="flex-1">
          <h2 className="text-2xl font-extrabold text-neutral-950 sm:text-3xl lg:text-4xl">
            {content.title}
          </h2>
          <p className="mt-4 text-sm leading-8 text-neutral-500 sm:text-base">
            {content.description}
          </p>

          <Button
            asChild
            className="mt-7 h-12 rounded-md bg-brand px-10 text-base font-semibold text-white hover:bg-brand-strong"
          >
            <Link href={content.actionHref}>{content.actionLabel}</Link>
          </Button>
        </div>

        <div className="relative aspect-square w-full max-w-[230px] shrink-0 overflow-hidden rounded-xl border-4 border-white shadow-[0_10px_30px_rgba(0,0,0,.12)] ring-2 ring-brand">
          <Image
            src={content.image.src}
            alt={content.image.alt}
            fill
            sizes="230px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
