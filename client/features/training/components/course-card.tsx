import Link from "next/link"
import Image from "next/image"
import { Clock, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

import type { Course } from "../types/training-content.types"

interface CourseCardProps {
  course: Course
  subscribeLabel: string
  priceUnitLabel: string
}

export function CourseCard({
  course,
  subscribeLabel,
  priceUnitLabel,
}: CourseCardProps) {
  const meta = [
    { icon: Clock, text: course.durationLabel },
    { icon: Users, text: course.seatsLabel },
  ]

  return (
    <Card className="h-full gap-0 overflow-hidden rounded-xl border-0 bg-white py-0 shadow-[0_12px_28px_rgba(0,0,0,.06)] ring-0">
      <div className="relative aspect-[16/9] w-full">
        <Image
          src={course.image.src}
          alt={course.image.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col px-5 py-5 sm:px-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="truncate text-lg font-extrabold text-neutral-950 sm:text-xl">
            {course.title}
          </h3>
          <span className="shrink-0 rounded-full bg-[#edf8f4] px-3 py-1 text-xs font-medium text-brand">
            {course.level}
          </span>
        </div>

        <ul className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-neutral-500">
          {meta.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-center gap-2">
              <Icon
                aria-hidden="true"
                className="size-4 shrink-0 text-neutral-400"
                strokeWidth={1.8}
              />
              <span>{text}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-neutral-100 pt-4">
          <p className="text-xl font-extrabold text-brand">
            {course.price}
            <span className="ms-1.5 text-sm font-medium text-neutral-500">
              {priceUnitLabel}
            </span>
          </p>

          <Button
            asChild
            className="h-11 rounded-md bg-brand px-7 text-sm font-semibold text-white hover:bg-brand-strong"
          >
            <Link href={course.subscribeHref}>
              {subscribeLabel}
              <span className="sr-only"> — {course.title}</span>
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  )
}
