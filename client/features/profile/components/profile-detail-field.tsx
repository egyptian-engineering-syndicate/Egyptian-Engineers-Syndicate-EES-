import { cn } from "@/lib/utils"

interface ProfileDetailFieldProps {
  label: string
  value: string
  /** The designs print names, service length and amounts in brand green. */
  emphasis?: boolean
  className?: string
}

/**
 * A read-only label + value pair — the profile pages show stored data rather
 * than form fields, so they can't reuse `FormField`.
 */
export function ProfileDetailField({
  label,
  value,
  emphasis,
  className,
}: ProfileDetailFieldProps) {
  return (
    <div className={className}>
      <p className="text-sm text-neutral-500">{label}</p>
      <p
        className={cn(
          "mt-1.5 text-base font-bold break-words sm:text-lg",
          emphasis ? "text-brand" : "text-neutral-950"
        )}
      >
        {value}
      </p>
    </div>
  )
}
