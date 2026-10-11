import { FileText } from "lucide-react"

import type { Publication } from "../types/publications-content.types"

interface PublicationCardProps {
  publication: Publication
}

export function PublicationCard({ publication }: PublicationCardProps) {
  return (
    <article className="flex h-full items-center gap-4 rounded-xl border border-neutral-200 bg-white px-5 py-5 sm:gap-5 sm:px-6">
      <span className="grid size-16 shrink-0 place-items-center rounded-full bg-[#edf8f4] text-brand sm:size-[4.5rem]">
        <FileText aria-hidden="true" className="size-8" strokeWidth={1.6} />
      </span>
      <div className="min-w-0">
        <h2 className="text-sm leading-7 font-semibold text-neutral-800 sm:text-base">
          {publication.title}
        </h2>
        <p className="mt-2 text-sm text-neutral-400">{publication.date}</p>
      </div>
    </article>
  )
}
