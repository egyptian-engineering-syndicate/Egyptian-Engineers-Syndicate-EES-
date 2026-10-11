import Image from "next/image"
import { Landmark } from "lucide-react"

import { SurfaceCard } from "@/components/surface-card"

import type { AboutPageContent } from "../types/about-content.types"

interface AboutGoalsSectionProps {
  goals: AboutPageContent["goals"]
  vision: AboutPageContent["vision"]
}

function VisionPyramid() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 180 140"
      className="h-28 w-auto text-brand sm:h-36"
    >
      <polygon points="90,8 170,132 10,132" fill="currentColor" opacity="0.18" />
      <polygon points="90,28 150,132 30,132" fill="currentColor" opacity="0.35" />
      <polygon points="90,52 128,132 52,132" fill="currentColor" opacity="0.55" />
      <polygon points="90,78 108,132 72,132" fill="currentColor" />
    </svg>
  )
}

export function AboutGoalsSection({ goals, vision }: AboutGoalsSectionProps) {
  return (
    <section className="bg-page-surface">
      <div className="mx-auto grid w-full max-w-[1640px] gap-6 px-5 py-10 sm:px-8 sm:py-12 lg:grid-cols-2 lg:gap-8 lg:px-14">
        <SurfaceCard className="flex-col overflow-hidden px-0 py-0 sm:flex-row sm:px-0 sm:py-0">
          <div className="flex flex-col justify-center px-6 py-8 sm:px-8">
            <div className="grid size-14 place-items-center rounded-full border-2 border-brand/35 bg-white text-brand">
              <Landmark aria-hidden="true" className="size-7" strokeWidth={1.7} />
            </div>
            <h2 className="mt-5 text-2xl font-extrabold text-neutral-950 sm:text-3xl">
              {goals.title}
            </h2>
            <p className="mt-4 text-sm leading-8 text-neutral-600 sm:text-base">
              {goals.description}
            </p>
          </div>
          <div className="relative min-h-52 w-full sm:min-h-0 sm:w-[48%]">
            <Image
              src={goals.image.src}
              alt={goals.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 30vw"
              className="object-cover"
            />
          </div>
        </SurfaceCard>

        <SurfaceCard className="relative overflow-hidden bg-[#edf8f4] sm:px-8 sm:py-10">
          <h2 className="text-2xl font-extrabold text-neutral-950 sm:text-3xl">
            {vision.title}
          </h2>
          <p className="mt-4 max-w-md text-sm leading-8 text-neutral-600 sm:text-base">
            {vision.description}
          </p>
          <div className="mt-6 flex justify-end">
            <VisionPyramid />
          </div>
        </SurfaceCard>
      </div>
    </section>
  )
}
