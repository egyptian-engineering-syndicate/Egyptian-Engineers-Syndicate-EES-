import Image from "next/image"

import type { HomePageContent } from "../types/home-content.types"
import { CarouselPagination } from "./carousel-pagination"
import { SectionHeading } from "./section-heading"

interface AdvertisementSectionProps {
  content: HomePageContent["advertisement"]
}

export function AdvertisementSection({ content }: AdvertisementSectionProps) {
  return (
    <section className="border-t border-brand/60 bg-[linear-gradient(180deg,#edf7f3_0%,#ffffff_80%)] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1640px] px-5 sm:px-8 lg:px-14">
        <SectionHeading
          accent={content.accent}
          title={content.title}
          description={content.description}
        />

        <div className="relative mx-auto mt-10 max-w-[1510px] rounded-[22px] border-[18px] border-brand bg-brand shadow-[0_18px_50px_rgba(0,94,65,.15)] sm:border-[26px] lg:mt-12 lg:border-[38px]">
          <div className="relative min-h-[360px] overflow-hidden rounded-md sm:min-h-[470px] lg:min-h-[590px]">
            <Image
              src="/images/login-construction.jpg"
              alt={content.imageAlt}
              fill
              sizes="(max-width: 1640px) 90vw, 1500px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,10,9,.9)_0%,rgba(8,10,9,.62)_45%,rgba(8,10,9,.12)_100%)]" />
            <div className="absolute inset-y-0 right-0 flex w-full items-center px-6 sm:px-12 lg:w-[58%] lg:px-20">
              <div className="max-w-2xl text-white">
                <p className="text-4xl leading-tight font-extrabold sm:text-6xl lg:text-7xl">
                  {content.offer}
                </p>
                <p className="mt-5 text-xl leading-9 sm:text-3xl lg:text-4xl">
                  {content.offerDescription}
                </p>
                <p className="mt-5 text-base leading-8 font-bold text-white/90 sm:text-xl lg:text-2xl">
                  {content.offerNote}
                </p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-t-lg bg-white px-3 py-2 shadow-sm">
            <CarouselPagination />
          </div>
        </div>
      </div>
    </section>
  )
}
