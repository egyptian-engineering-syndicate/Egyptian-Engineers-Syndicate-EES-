import type { ClubsPageContent } from "../types/clubs-content.types"
import { ClubCard } from "./club-card"

interface ClubsGridProps {
  content: Pick<ClubsPageContent, "clubsTitle" | "detailsLabel" | "clubs">
}

export function ClubsGrid({ content }: ClubsGridProps) {
  return (
    <section className="ees-light-pattern bg-white">
      <div className="mx-auto w-full max-w-[1640px] px-5 py-12 sm:px-8 sm:py-16 lg:px-14">
        <h2 className="text-end text-3xl font-extrabold text-neutral-950 sm:text-4xl">
          {content.clubsTitle}
        </h2>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {content.clubs.map((club) => (
            <li key={club.id}>
              <ClubCard club={club} detailsLabel={content.detailsLabel} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
