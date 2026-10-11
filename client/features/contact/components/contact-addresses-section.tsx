import type { ContactPageContent } from "../types/contact-content.types"
import { ContactAddressCard } from "./contact-address-card"

interface ContactAddressesSectionProps {
  content: ContactPageContent
}

export function ContactAddressesSection({
  content,
}: ContactAddressesSectionProps) {
  return (
    <section>
      <h1 className="text-center text-3xl font-extrabold text-neutral-950 sm:text-4xl">
        {content.addressesTitle}
      </h1>
      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
        {content.addresses.map((address) => (
          <li key={address.id}>
            <ContactAddressCard
              address={address}
              emailLabel={content.emailLabel}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
