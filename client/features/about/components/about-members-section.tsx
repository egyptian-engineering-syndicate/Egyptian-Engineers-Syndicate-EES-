import type { AboutPageContent } from "../types/about-content.types"
import { AboutMemberCard } from "./about-member-card"

interface AboutMembersSectionProps {
  title: string
  members: AboutPageContent["members"]
}

export function AboutMembersSection({
  title,
  members,
}: AboutMembersSectionProps) {
  return (
    <section className="relative overflow-hidden bg-page-surface">
      <span
        aria-hidden="true"
        className="absolute top-16 -end-8 hidden h-40 w-24 rounded-s-md bg-brand lg:block"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-24 -start-8 hidden h-48 w-24 rounded-e-md bg-brand lg:block"
      />

      <div className="relative mx-auto w-full max-w-[1640px] px-5 py-10 sm:px-8 sm:py-16 lg:px-14">
        <h2 className="text-center text-3xl font-extrabold text-neutral-950 sm:text-4xl">
          {title}
        </h2>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {members.map((member) => (
            <li key={member.id}>
              <AboutMemberCard member={member} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
