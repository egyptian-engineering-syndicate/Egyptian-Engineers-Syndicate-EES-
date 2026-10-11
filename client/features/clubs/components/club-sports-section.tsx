import type { ClubDetailsPageContent } from "../types/clubs-content.types"

interface ClubSportsSectionProps {
  content: ClubDetailsPageContent["sports"]
}

function FootballMark() {
  return (
    <span className="grid size-12 shrink-0 place-items-center rounded-full bg-brand text-white">
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="size-6 fill-current"
      >
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm3.2 3.1 1.7 3.1-2.4 1.5-1.8-2.7 2.5-1.9ZM12 4.2c.3 0 .7 0 1 .1L11.2 7.2 9 5.6c.9-.8 2-.1 3-1.4Zm-5.9 4.4 2.6-.4 1.1 2.8-2 2.3-2.4-1.6c.1-1.1.4-2.1.7-3.1Zm.7 8.3 1.5-2.8 2.6.9.3 3.1c-1.6-.1-3.1-.5-4.4-1.2Zm8.4 1.2.3-3.1 2.6-.9 1.5 2.8c-1.3.7-2.8 1.1-4.4 1.2Zm3.7-5.2-2.4 1.6-2-2.3 1.1-2.8 2.6.4c.3 1 .6 2 .7 3.1Zm-6.1-6.4 1.8 2.7-2.2 1.6h-1.4L9.1 8.2l1.8-2.7c.4-.1.7-.1 1.1-.1Z" />
      </svg>
    </span>
  )
}

export function ClubSportsSection({ content }: ClubSportsSectionProps) {
  return (
    <section className="ees-light-pattern bg-white">
      <div className="mx-auto w-full max-w-[1640px] px-5 py-12 sm:px-8 sm:py-16 lg:px-14">
        <h2 className="text-center text-3xl font-extrabold text-neutral-950 sm:text-4xl">
          {content.title}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-7 text-neutral-500">
          {content.description}
        </p>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:gap-x-16 lg:gap-y-10">
          {content.activities.map((activity) => (
            <li key={activity.id} className="flex items-start gap-4">
              <FootballMark />
              <div>
                <h3 className="text-base font-extrabold text-neutral-950">
                  {activity.title}
                </h3>
                <p className="mt-1 text-sm leading-7 text-neutral-500">
                  {activity.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
