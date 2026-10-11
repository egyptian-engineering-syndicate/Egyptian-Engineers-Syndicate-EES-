import Image from "next/image"
import Link from "next/link"

import { Card } from "@/components/ui/card"

import type { PracticeService } from "../types/practice-content.types"

interface PracticeServiceCardProps {
  service: PracticeService
  learnMoreLabel: string
}

export function PracticeServiceCard({
  service,
  learnMoreLabel,
}: PracticeServiceCardProps) {
  return (
    <Link href={service.href} className="block h-full">
      <Card className="h-full flex-row gap-0 overflow-hidden rounded-xl bg-white py-0 shadow-[0_12px_28px_rgba(0,0,0,.06)] ring-neutral-200 transition-shadow hover:shadow-[0_16px_36px_rgba(0,0,0,.12)]">
        <div className="relative w-[38%] max-w-[210px] shrink-0 self-stretch">
          <Image
            src={service.image.src}
            alt={service.image.alt}
            fill
            sizes="(max-width: 1024px) 40vw, 210px"
            className="object-cover"
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col px-5 py-5 sm:px-6">
          <h3 className="text-lg font-extrabold text-neutral-950 sm:text-xl">
            {service.title}
          </h3>
          <p className="mt-3 line-clamp-3 text-sm leading-7 text-neutral-500 sm:text-base">
            {service.description}
          </p>
          <p className="mt-auto border-t border-neutral-100 pt-4 text-sm text-neutral-500">
            {learnMoreLabel}
            <span className="sr-only"> — {service.title}</span>
          </p>
        </div>
      </Card>
    </Link>
  )
}
