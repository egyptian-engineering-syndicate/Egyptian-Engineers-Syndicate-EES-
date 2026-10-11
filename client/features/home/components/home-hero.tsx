import Image from "next/image"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import type { HomePageContent } from "../types/home-content.types"

interface HomeHeroProps {
  content: HomePageContent["hero"]
}

export function HomeHero({ content }: HomeHeroProps) {
  return (
    <section className="relative isolate min-h-[590px] overflow-hidden bg-[#00563d] text-white sm:min-h-[650px] lg:min-h-[720px]">
      <Image
        src="/images/login-construction.jpg"
        alt={content.imageAlt}
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,68,49,.9)_0%,rgba(0,108,73,.82)_60%,rgba(0,148,96,.94)_100%)]" />

      <div className="mx-auto grid min-h-[590px] w-full max-w-[1640px] items-center gap-12 px-5 py-16 sm:min-h-[650px] sm:px-8 lg:min-h-[720px] lg:grid-cols-[1.18fr_.82fr] lg:px-14 lg:py-20">
        <div className="max-w-[760px] lg:justify-self-start">
          <p className="text-lg font-bold text-[#55ed8f] sm:text-xl">
            {content.eyebrow}
          </p>
          <h1 className="mt-5 text-[clamp(2.4rem,4.3vw,4.75rem)] leading-[1.25] font-extrabold tracking-[-0.035em]">
            {content.title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-9 text-white/82 sm:text-lg lg:text-xl">
            {content.description}
          </p>

          <div
            role="search"
            aria-label={content.searchLabel}
            className="mt-8 flex h-[68px] w-full max-w-[650px] items-center gap-3 rounded-lg border border-white/30 bg-white/48 p-2.5 shadow-[0_8px_24px_rgba(0,0,0,.08)] backdrop-blur-sm"
          >
            <Search aria-hidden="true" className="mr-2 size-6 shrink-0 text-white" />
            <label htmlFor="home-service-search" className="sr-only">
              {content.searchLabel}
            </label>
            <Input
              id="home-service-search"
              type="search"
              placeholder={content.searchPlaceholder}
              className="h-full flex-1 border-0 bg-transparent px-1 text-base text-white shadow-none placeholder:text-white/90 focus-visible:ring-0"
            />
            <Button
              type="button"
              className="h-full min-w-28 rounded-md bg-brand px-8 text-base font-semibold text-white hover:bg-brand-strong sm:min-w-36"
            >
              {content.searchButton}
            </Button>
          </div>
        </div>

        <div className="flex items-end justify-center gap-5 self-end pb-4 lg:justify-end lg:pb-24">
          {content.stats.map((stat) => (
            <div
              key={stat.label}
              className="grid size-28 place-items-center rounded-full border border-white/10 bg-white/22 text-center shadow-[inset_0_0_20px_rgba(255,255,255,.08)] backdrop-blur-sm sm:size-32"
            >
              <div>
                <strong className="block text-3xl leading-none font-extrabold text-[#56f19a] sm:text-4xl">
                  {stat.value}
                </strong>
                <span className="mt-2 block text-xs leading-5 font-medium text-white sm:text-sm">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
