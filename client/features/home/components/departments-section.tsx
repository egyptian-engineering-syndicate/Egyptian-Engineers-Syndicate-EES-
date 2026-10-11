import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"

import type { HomePageContent } from "../types/home-content.types"
import { CarouselPagination } from "./carousel-pagination"

interface DepartmentsSectionProps {
  content: HomePageContent["departments"]
}

export function DepartmentsSection({ content }: DepartmentsSectionProps) {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32 lg:py-44">
      <div className="absolute inset-y-28 right-0 hidden w-[57%] rounded-s-[100px] bg-brand lg:block" />

      <div className="relative mx-auto grid w-full max-w-[1640px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[.78fr_1.42fr] lg:gap-12 lg:px-14">
        <div className="order-1 rounded-[42px] bg-brand px-7 py-12 text-white sm:px-12 lg:rounded-none lg:bg-transparent lg:px-0 lg:py-0">
          <h2 className="text-3xl leading-tight font-extrabold sm:text-4xl lg:text-[2.65rem]">
            {content.title}
          </h2>
          <p className="mt-7 max-w-xl text-sm leading-8 text-white/75 sm:text-base sm:leading-9">
            {content.description}
          </p>
          <Button
            asChild
            className="mt-8 h-14 rounded-md bg-white px-9 text-base font-semibold text-neutral-600 hover:bg-white/90"
          >
            <Link href="/departments">{content.learnMore}</Link>
          </Button>
        </div>

        <div className="order-2">
          <div className="grid gap-7 md:grid-cols-2 lg:gap-10">
            {content.items.map((department) => (
              <Link
                key={department.title}
                href={department.href}
                className="overflow-hidden rounded-md bg-white shadow-[0_14px_35px_rgba(0,0,0,.1)] transition-shadow hover:shadow-[0_16px_36px_rgba(0,0,0,.12)]"
              >
                <article>
                  <div className="relative aspect-[1.7/1] overflow-hidden">
                    <Image
                      src="/images/login-construction.jpg"
                      alt={department.imageAlt}
                      fill
                      sizes="(max-width: 768px) 90vw, 35vw"
                      className="object-cover"
                      style={{ objectPosition: department.imagePosition }}
                    />
                    <div className="absolute inset-0 bg-brand/10" />
                  </div>
                  <div className="px-6 py-6 sm:px-8">
                    <h3 className="text-2xl leading-tight font-extrabold text-neutral-950">
                      {department.title}
                    </h3>
                    <p className="mt-4 line-clamp-4 text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
                      {department.description}
                    </p>
                    <p className="mt-5 border-t border-neutral-200 pt-4 text-sm text-neutral-500">
                      {content.learnMore}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <CarouselPagination />
          </div>
        </div>
      </div>
    </section>
  )
}
