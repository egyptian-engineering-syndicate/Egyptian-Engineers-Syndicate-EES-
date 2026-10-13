import { Info, Mail, MapPin, Phone } from "lucide-react"

import type { ContactInfoItem } from "../types/contact-content.types"

const icons = {
  address: MapPin,
  phone: Phone,
  email: Mail,
} as const

interface ContactInfoSectionProps {
  title: string
  description: string
  items: ContactInfoItem[]
}

export function ContactInfoSection({
  title,
  description,
  items,
}: ContactInfoSectionProps) {
  return (
    <div>
      <div className="grid size-12 place-items-center rounded-md bg-[#edf8f4] text-brand">
        <Info aria-hidden="true" className="size-6" strokeWidth={1.8} />
      </div>
      <h2 className="mt-4 text-3xl font-extrabold text-neutral-950 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-3 max-w-md text-sm leading-7 text-neutral-600 sm:text-base">
        {description}
      </p>

      <ul className="mt-6 max-w-md space-y-3">
        {items.map((item) => {
          const Icon = icons[item.type]

          return (
            <li
              key={item.label}
              className="flex items-center gap-3 rounded-md border border-neutral-200 bg-white px-3 py-3"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-md bg-[#edf8f4] text-brand">
                <Icon aria-hidden="true" className="size-5" strokeWidth={1.8} />
              </span>
              <div className="min-w-0">
                <p className="text-xs text-neutral-500">{item.label}</p>
                <p
                  className="mt-0.5 text-sm font-medium text-neutral-900"
                  dir={item.type === "email" ? "ltr" : "rtl"}
                >
                  {item.value}
                </p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
