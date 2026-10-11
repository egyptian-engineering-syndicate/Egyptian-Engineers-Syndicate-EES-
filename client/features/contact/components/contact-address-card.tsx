import { Mail, MapPin, Phone } from "lucide-react"

import { SurfaceCard } from "@/components/surface-card"

import type { ContactAddress } from "../types/contact-content.types"

interface ContactAddressCardProps {
  address: ContactAddress
  emailLabel: string
}

export function ContactAddressCard({
  address,
  emailLabel,
}: ContactAddressCardProps) {
  const rows = [
    { icon: MapPin, text: address.address, dir: "rtl" as const },
    { icon: Phone, text: address.phones, dir: "ltr" as const },
  ]

  return (
    <SurfaceCard className="h-full px-6 py-6 text-center sm:px-7">
      <h3 className="text-sm font-extrabold text-neutral-950 sm:text-base">
        {address.title}
      </h3>
      <p className="mt-3 text-sm font-semibold text-neutral-700">
        {address.branch}
      </p>
      <ul className="mt-4 space-y-2.5 text-sm text-neutral-600">
        {rows.map(({ icon: Icon, text, dir }) => (
          <li
            key={text}
            className="flex items-center justify-center gap-2 leading-6"
          >
            <span dir={dir}>{text}</span>
            <Icon
              aria-hidden="true"
              className="size-4 shrink-0 text-brand"
              strokeWidth={1.8}
            />
          </li>
        ))}
        <li className="flex items-center justify-center gap-2 leading-6">
          <span>
            {emailLabel}:{" "}
            <span dir="ltr">{address.email}</span>
          </span>
          <Mail
            aria-hidden="true"
            className="size-4 shrink-0 text-brand"
            strokeWidth={1.8}
          />
        </li>
      </ul>
    </SurfaceCard>
  )
}
