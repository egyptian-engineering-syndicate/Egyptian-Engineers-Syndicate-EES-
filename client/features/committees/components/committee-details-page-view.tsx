import Image from "next/image"

import { SurfaceCard } from "@/components/surface-card"
import { PageBreadcrumb } from "@/features/site-shell"

import type { CommitteeDetailsPageContent } from "../types/committees-content.types"
import { CommitteeMemberCard } from "./committee-member-card"

interface CommitteeDetailsPageViewProps {
  content: CommitteeDetailsPageContent
}

export function CommitteeDetailsPageView({
  content,
}: CommitteeDetailsPageViewProps) {
  return (
    <main className="bg-page-surface">
      <PageBreadcrumb items={content.breadcrumbs} />

      <div className="mx-auto grid w-full max-w-[1640px] items-center gap-10 px-5 py-10 sm:px-8 sm:py-12 lg:grid-cols-2 lg:gap-14 lg:px-14">
        <div>
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
        </div>
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
          <Image
            src={content.image.src}
            alt={content.image.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
            priority
          />
        </div>
      </div>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1640px] px-5 py-10 sm:px-8 sm:py-12 lg:px-14">
          <h2 className="text-2xl font-extrabold text-neutral-950 sm:text-3xl">
            {content.chairTitle}
          </h2>
          <SurfaceCard className="mt-6 flex max-w-3xl flex-row items-center gap-6 px-6 py-6 sm:px-8">
            <div className="relative size-28 shrink-0 overflow-hidden rounded-full bg-neutral-100 sm:size-36">
              <Image
                src={content.chair.image.src}
                alt={content.chair.image.alt}
                fill
                sizes="144px"
                className="object-cover object-top"
              />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-neutral-500">
                {content.chair.orgTitle}
              </p>
              <h3 className="mt-1 text-lg font-extrabold text-neutral-950 sm:text-xl">
                {content.chair.name}
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-600">
                {content.chair.bio}
              </p>
            </div>
          </SurfaceCard>

          <h2 className="mt-12 text-2xl font-extrabold text-neutral-950 sm:text-3xl">
            {content.membersTitle}
          </h2>
          <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {content.members.map((member) => (
              <li key={member.id}>
                <CommitteeMemberCard member={member} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ees-light-pattern bg-white">
        <div className="mx-auto grid w-full max-w-[1640px] items-start gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-2 lg:gap-14 lg:px-14">
          <div>
            <h2 className="text-3xl font-extrabold text-neutral-950 sm:text-4xl">
              {content.activitiesTitle}
            </h2>
            <ul className="mt-6 space-y-3">
              {content.activities.map((activity) => (
                <li
                  key={activity.id}
                  className="rounded-xl bg-neutral-50 px-5 py-4 shadow-[0_8px_20px_rgba(0,0,0,.04)]"
                >
                  <h3 className="text-sm font-extrabold text-neutral-950 sm:text-base">
                    {activity.title}
                  </h3>
                  <p className="mt-1 text-sm leading-7 text-neutral-500">
                    {activity.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl lg:min-h-[520px] lg:aspect-auto">
            <Image
              src={content.activitiesImage.src}
              alt={content.activitiesImage.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
