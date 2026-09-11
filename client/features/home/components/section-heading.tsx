import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  accent?: string
  description: string
  inverse?: boolean
  align?: "center" | "start"
  className?: string
}

export function SectionHeading({
  title,
  accent,
  description,
  inverse = false,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <header
      className={cn(
        align === "center" ? "mx-auto text-center" : "text-start",
        className
      )}
    >
      <h2
        className={cn(
          "text-3xl leading-tight font-extrabold sm:text-4xl lg:text-[2.65rem]",
          inverse ? "text-white" : "text-neutral-950"
        )}
      >
        {accent ? <span className="text-brand">{accent} </span> : null}
        {title}
      </h2>
      <p
        className={cn(
          "mt-3 text-sm leading-7 sm:text-base",
          inverse ? "text-white/75" : "text-neutral-500"
        )}
      >
        {description}
      </p>
    </header>
  )
}
