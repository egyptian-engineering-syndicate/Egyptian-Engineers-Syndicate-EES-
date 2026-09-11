import Image from "next/image"

import { PageBreadcrumb } from "@/features/site-shell"

import type { CommitteeDetailsPageContent } from "../types/committees-content.types"
import { CommitteeMemberCard } from "./committee-member-card"

/** Members shown beside the photo; the rest run full width underneath it. */
const MEMBERS_BESIDE_PHOTO = 2

interface CommitteeDetailsPageViewProps {
  content: CommitteeDetailsPageContent
}

export function CommitteeDetailsPageView({
  content,
}: CommitteeDetailsPageViewProps) {
  const membersBesidePhoto = content.members.slice(0, MEMBERS_BESIDE_PHOTO)
  const remainingMembers = content.members.slice(MEMBERS_BESIDE_PHOTO)

  return (
    /* `overflow-x-clip` contains the intro band's bleed without adding a scrollbar. */
    <main className="overflow-x-clip bg-white">
      <PageBreadcrumb items={content.breadcrumbs} />

      <div className="mx-auto w-full max-w-[1640px] px-5 pb-14 sm:px-8 sm:pb-16 lg:px-14">
        <div className="grid gap-x-10 lg:grid-cols-2">
          {/* Photo: overhangs the intro band down into the first members row. */}
          <div className="relative z-10 order-2 mb-10 lg:order-none lg:row-span-2 lg:mb-0">
            <div className="relative aspect-[3/4] lg:absolute lg:inset-x-0 lg:inset-y-8 lg:aspect-auto">
              <span
                aria-hidden="true"
                className="absolute inset-x-8 -top-4 -bottom-6 rounded-lg bg-brand"
              />
              <div className="absolute inset-0 overflow-hidden rounded-lg">
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
          </div>

          {/* Intro copy, on a grey band bled out past both viewport edges. */}
          <div className="relative order-1 py-10 lg:order-none lg:py-14">
            <div
              aria-hidden="true"
              className="absolute inset-y-0 left-1/2 w-[200vw] -translate-x-1/2 bg-[#e9e9e9]"
            />
            <div className="relative">
              <h1 className="text-2xl font-extrabold text-neutral-950 sm:text-3xl">
                {content.title}
              </h1>
              <div className="mt-6 space-y-5 text-sm leading-8 text-neutral-700 sm:text-base">
                {content.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-justify">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="order-3 pt-10 lg:order-none lg:pt-14">
            <h2 className="text-2xl font-extrabold text-neutral-950 sm:text-3xl">
              {content.membersTitle}
            </h2>

            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:gap-10">
              {membersBesidePhoto.map((member) => (
                <li key={member.id}>
                  <CommitteeMemberCard member={member} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {remainingMembers.length > 0 ? (
          <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-10">
            {remainingMembers.map((member) => (
              <li key={member.id}>
                <CommitteeMemberCard member={member} />
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </main>
  )
}
