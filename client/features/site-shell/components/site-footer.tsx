import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import type { SiteShellContent } from "../types/site-shell.types"
import { SiteLogo } from "./site-logo"

interface SiteFooterProps {
  content: SiteShellContent
}

export function SiteFooter({ content }: SiteFooterProps) {
  const { footer } = content

  return (
    <footer className="border-t-[3px] border-brand bg-[#171717] text-neutral-400">
      <div className="mx-auto grid w-full max-w-[1640px] gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.15fr_0.85fr_1fr_1.1fr] lg:px-14 lg:py-16">
        <section>
          <SiteLogo name={content.brand.name} inverse />
          <p className="mt-5 max-w-sm text-sm leading-8">
            {content.brand.description}
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-white">
            {footer.quickLinksTitle}
          </h2>
          <ul className="mt-5 grid grid-cols-2 gap-x-5 gap-y-3 text-sm">
            {footer.quickLinks.map((item) => (
              <li key={`${item.href}-${item.label}`}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-brand"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-base font-bold text-white">
            {footer.contactTitle}
          </h2>
          <address className="mt-5 space-y-3 text-sm not-italic">
            <p className="flex items-start gap-2.5 leading-7">
              <MapPin className="mt-1 size-4 shrink-0 text-brand" />
              {footer.address}
            </p>
            <a
              href={`mailto:${footer.email}`}
              className="flex items-center gap-2.5 transition-colors hover:text-brand"
              dir="ltr"
            >
              <Mail className="size-4 text-brand" />
              {footer.email}
            </a>
            <a
              href={`tel:${footer.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2.5 transition-colors hover:text-brand"
              dir="ltr"
            >
              <Phone className="size-4 text-brand" />
              {footer.phone}
            </a>
          </address>
        </section>

        <section>
          <h2 className="text-base font-bold text-white">
            {footer.newsletterTitle}
          </h2>
          <p className="mt-5 text-sm leading-7">
            {footer.newsletterDescription}
          </p>
          <div className="mt-5 flex gap-2" dir="rtl">
            <label htmlFor="newsletter-email" className="sr-only">
              {footer.emailLabel}
            </label>
            <Input
              id="newsletter-email"
              type="email"
              placeholder={footer.emailPlaceholder}
              className="h-12 min-w-0 flex-1 rounded-md border-white/10 bg-white/5 px-4 text-sm text-white shadow-none placeholder:text-neutral-500 focus-visible:border-brand focus-visible:ring-brand/20"
            />
            <Button
              type="button"
              className="h-12 rounded-md bg-brand px-6 text-sm font-semibold text-white transition-colors hover:bg-brand-strong"
            >
              {footer.subscribeLabel}
            </Button>
          </div>
        </section>
      </div>
      <div className="border-t border-white/5 px-5 py-7 text-center text-xs text-neutral-500 sm:text-sm">
        {footer.copyright}
      </div>
    </footer>
  )
}
