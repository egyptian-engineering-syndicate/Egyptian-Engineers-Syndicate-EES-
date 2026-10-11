import Link from "next/link"
import Image from "next/image"

import { Card } from "@/components/ui/card"

import type { Department } from "../types/departments-content.types"

interface DepartmentCardProps {
  department: Department
  detailsLabel: string
}

export function DepartmentCard({
  department,
  detailsLabel,
}: DepartmentCardProps) {
  return (
    <Card className="h-full flex-row gap-0 rounded-xl bg-white py-0 shadow-[0_12px_28px_rgba(0,0,0,.06)] ring-0">
      <div className="relative w-[35%] max-w-[190px] shrink-0 self-stretch">
        <Image
          src={department.image.src}
          alt={department.image.alt}
          fill
          sizes="(max-width: 1024px) 40vw, 190px"
          className="object-cover"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col px-5 py-5 sm:px-6">
        <h3 className="line-clamp-2 text-lg font-extrabold text-neutral-950 sm:text-xl">
          {department.title}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-neutral-500">
          {department.description}
        </p>

        <div className="mt-auto border-t border-neutral-100 pt-4">
          <Link
            href={department.detailsHref}
            className="text-sm font-medium text-neutral-500 transition-colors hover:text-brand"
          >
            {detailsLabel}
            <span className="sr-only"> — {department.title}</span>
          </Link>
        </div>
      </div>
    </Card>
  )
}
