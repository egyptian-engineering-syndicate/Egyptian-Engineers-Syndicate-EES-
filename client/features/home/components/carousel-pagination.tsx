import { ArrowLeft, ArrowRight } from "lucide-react"

export function CarouselPagination({ inverse = false }: { inverse?: boolean }) {
  return (
    <div className="flex items-center justify-center gap-2" aria-hidden="true">
      <span
        className={`grid size-9 place-items-center rounded-sm border bg-white ${inverse ? "border-white/20 text-neutral-500" : "border-neutral-200 text-neutral-500"}`}
      >
        <ArrowRight className="size-4" />
      </span>
      <span className="size-2.5 rounded-full bg-neutral-200" />
      <span className="size-3.5 rounded-full bg-brand" />
      <span
        className={`grid size-9 place-items-center rounded-sm border bg-white ${inverse ? "border-white/20 text-neutral-500" : "border-neutral-200 text-neutral-500"}`}
      >
        <ArrowLeft className="size-4" />
      </span>
    </div>
  )
}
