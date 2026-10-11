import type { PublicationsPageContent } from "../types/publications-content.types"
import { PublicationCard } from "./publication-card"

interface PublicationsGridProps {
  content: PublicationsPageContent
}

export function PublicationsGrid({ content }: PublicationsGridProps) {
  return (
    <ul className="mt-8 grid gap-5 sm:gap-6 lg:grid-cols-2">
      {content.items.map((publication) => (
        <li key={publication.id}>
          <PublicationCard publication={publication} />
        </li>
      ))}
    </ul>
  )
}
