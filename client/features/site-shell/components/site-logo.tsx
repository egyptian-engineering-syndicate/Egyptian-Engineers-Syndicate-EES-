import { Landmark } from "lucide-react"

interface SiteLogoProps {
  name: string
  compact?: boolean
  inverse?: boolean
}

export function SiteLogo({
  name,
  compact = false,
  inverse = false,
}: SiteLogoProps) {
  return (
    <div className="flex shrink-0 items-center gap-3">
      <div
        className={
          inverse
            ? "grid size-14 place-items-center rounded-full border-2 border-white/70 bg-white text-brand"
            : "grid size-14 place-items-center rounded-full border-2 border-brand/35 bg-white text-brand shadow-sm"
        }
      >
        <Landmark aria-hidden="true" className="size-8" strokeWidth={1.7} />
      </div>
      {!compact ? (
        <span
          className={
            inverse
              ? "text-lg font-bold text-brand"
              : "text-lg font-extrabold text-brand lg:text-xl"
          }
        >
          {name}
        </span>
      ) : null}
    </div>
  )
}
