import Link from "next/link"
import { ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"

import type { SiteShellContent } from "../types/site-shell.types"
import { HeaderClock } from "./header-clock"
import { MobileNavigation } from "./mobile-navigation"
import { SiteLogo } from "./site-logo"

interface SiteHeaderProps {
  content: SiteShellContent
}

export function SiteHeader({ content }: SiteHeaderProps) {
  return (
    <header className="ees-light-pattern relative z-40 bg-white">
      <div className="border-b border-neutral-200/80">
        <div className="mx-auto flex h-[76px] w-full max-w-[1640px] items-center px-5 sm:px-8 lg:px-14">
          <HeaderClock />
        </div>
      </div>

      <div className="relative">
        <div className="mx-auto flex h-[110px] w-full max-w-[1640px] items-center justify-between gap-7 px-5 sm:px-8 lg:px-14">
          <Link href="/" aria-label={content.brand.name}>
            <SiteLogo name={content.brand.name} />
          </Link>

          <nav className="hidden flex-1 lg:block" aria-label="التنقل الرئيسي">
            <ul className="flex items-center justify-center gap-5 xl:gap-8">
              {content.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-1.5 text-sm font-medium whitespace-nowrap text-neutral-700 transition-colors hover:text-brand xl:text-base"
                  >
                    {item.label}
                    {item.hasMenu ? (
                      <ChevronDown aria-hidden="true" className="size-4" />
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Button
            asChild
            className="hidden h-14 min-w-44 rounded-md bg-brand px-7 text-base font-semibold text-white hover:bg-brand-strong lg:inline-flex"
          >
            <Link href={content.login.href}>{content.login.label}</Link>
          </Button>

          <MobileNavigation items={content.navigation} login={content.login} />
        </div>
      </div>
    </header>
  )
}
