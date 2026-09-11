import type { ReactNode } from "react"
import Image from "next/image"
import { ChevronLeft, House } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

import type { AuthPageContent } from "../types/auth-content.types"

interface AuthPageLayoutProps {
  content: AuthPageContent
  children: ReactNode
  cardClassName?: string
  cardContentClassName?: string
  imageClassName?: string
  showImageOverlay?: boolean
}

export function AuthPageLayout({
  content,
  children,
  cardClassName,
  cardContentClassName,
  imageClassName,
  showImageOverlay = true,
}: AuthPageLayoutProps) {
  return (
    <main className="grid min-h-0 grid-rows-[auto_1fr]">
      <section className="ees-green-pattern text-white">
        <div className="mx-auto flex h-[74px] w-full max-w-[1640px] items-center px-5 sm:px-8 lg:px-14">
          <nav aria-label="مسار الصفحة">
            <ol className="flex items-center gap-2 text-sm sm:text-base">
              <li className="flex items-center gap-2">
                <House
                  aria-hidden="true"
                  className="size-5"
                  strokeWidth={1.8}
                />
                <span>{content.breadcrumbs.home}</span>
              </li>
              <li aria-hidden="true">
                <ChevronLeft className="size-5" />
              </li>
              <li className="font-semibold" aria-current="page">
                {content.breadcrumbs.current}
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <section
        className="flex min-h-0 flex-col bg-page-surface lg:flex-row"
        dir="ltr"
      >
        <div className="relative h-64 shrink-0 overflow-hidden sm:h-80 lg:h-auto lg:min-h-0 lg:basis-[41.75%]">
          <Image
            src={content.image.src}
            alt={content.image.alt}
            fill
            priority
            sizes="(min-width: 1024px) 41.75vw, 100vw"
            className={cn("object-cover object-center", imageClassName)}
          />
          {showImageOverlay ? (
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent"
            />
          ) : null}
        </div>

        <div
          className="flex items-center justify-center px-5 py-10 sm:px-10 sm:py-12 lg:basis-[58.25%] lg:py-10 lg:pr-[max(2.5rem,calc((100vw-1640px)/2))] lg:pl-10"
          dir="rtl"
        >
          <Card
            className={cn(
              "w-full max-w-[900px] gap-0 rounded-xl border-0 bg-white py-0 shadow-[0_16px_50px_rgb(0_0_0/0.07)]",
              cardClassName
            )}
          >
            <CardContent
              className={cn(
                "px-6 py-7 sm:px-9 sm:py-8 lg:px-10",
                cardContentClassName
              )}
            >
              <h1 className="text-[clamp(2.25rem,3.2vw,3.15rem)] leading-tight font-extrabold tracking-tight text-neutral-900">
                {content.title}
              </h1>
              <p className="mt-1 max-w-3xl text-sm leading-7 text-neutral-600 sm:text-base">
                {content.description}
              </p>
              {children}
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
