import { CircleCheck } from "lucide-react"

import type { CourseTopicsContent } from "../types/course-details-content.types"

interface CourseTopicsSectionProps {
  content: CourseTopicsContent
}

export function CourseTopicsSection({ content }: CourseTopicsSectionProps) {
  return (
    <section className="ees-grey-pattern py-14 sm:py-16">
      <div className="mx-auto w-full max-w-[1640px] px-5 sm:px-8 lg:px-14">
        <h2 className="text-center text-2xl font-extrabold text-neutral-950 sm:text-3xl">
          {content.title}
        </h2>

        <ul className="mt-10 flex flex-wrap justify-center gap-x-10 gap-y-5 lg:mt-14">
          {content.topics.map((topic) => (
            <li
              key={topic}
              className="flex items-center gap-2.5 text-sm font-medium text-neutral-700 sm:text-base"
            >
              <CircleCheck
                aria-hidden="true"
                className="size-5 shrink-0 text-brand"
                strokeWidth={1.8}
              />
              <span>{topic}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
