import Image from "next/image"

import { SurfaceCard } from "@/components/surface-card"
import { PageBreadcrumb } from "@/features/site-shell"

import type { DepartmentDetailsPageContent } from "../types/departments-content.types"

interface DepartmentDetailsPageViewProps {
  content: DepartmentDetailsPageContent
}

export function DepartmentDetailsPageView({
  content,
}: DepartmentDetailsPageViewProps) {
  return (
    <main className="bg-page-surface">
      <PageBreadcrumb items={content.breadcrumbs} />

      <div className="mx-auto w-full max-w-[1640px] space-y-6 px-5 py-8 sm:px-8 sm:py-10 lg:px-14">
        <div className="relative aspect-[21/8] min-h-56 overflow-hidden rounded-xl sm:min-h-72">
          <Image
            src={content.image.src}
            alt={content.image.alt}
            fill
            sizes="(max-width: 1640px) 100vw, 1640px"
            className="object-cover"
            priority
          />
        </div>

        <SurfaceCard className="px-6 py-8 sm:px-10 sm:py-10">
          <h1 className="text-2xl font-extrabold text-neutral-950 sm:text-3xl">
            {content.title}
          </h1>
          <div className="mt-5 space-y-5 text-sm leading-8 text-neutral-600 sm:text-base">
            {content.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-justify">
                {paragraph}
              </p>
            ))}
          </div>
        </SurfaceCard>
      </div>
    </main>
  )
}
