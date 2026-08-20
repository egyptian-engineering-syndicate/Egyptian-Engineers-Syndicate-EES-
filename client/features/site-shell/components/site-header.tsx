"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  ChevronDown,
  Eye,
  UserRound,
  ZoomIn,
  ZoomOut,
} from "lucide-react"

import { Button } from "@/components/ui/button"

import type { SiteShellContent, SiteShellUser } from "../types/site-shell.types"
import { HeaderClock } from "./header-clock"
import { MobileNavigation } from "./mobile-navigation"
import { SiteLogo } from "./site-logo"

interface SiteHeaderProps {
  content: SiteShellContent
  user?: SiteShellUser
}

export function SiteHeader({ content, user }: SiteHeaderProps) {
  const pathname = usePathname()

  return (
    <header className="ees-light-pattern relative z-40 bg-white">
      <div className="border-b border-neutral-200/80">
        <div className="mx-auto flex h-[74px] w-full max-w-[1640px] items-center justify-between px-5 sm:px-8 lg:px-14">
          <HeaderClock />
          <div
            className="hidden items-center gap-2 sm:flex"
            aria-label="أدوات سهولة الوصول"
          >
            <button
              type="button"
              aria-label="عرض الصفحة"
              className="grid size-10 place-items-center rounded-sm bg-[#edf8f4] text-brand transition-colors hover:bg-brand hover:text-white"
            >
              <Eye aria-hidden="true" className="size-5" />
            </button>
            <button
              type="button"
              aria-label="تصغير حجم العرض"
              className="grid size-10 place-items-center rounded-sm bg-[#edf8f4] text-brand transition-colors hover:bg-brand hover:text-white"
            >
              <ZoomOut aria-hidden="true" className="size-5" />
            </button>
            <button
              type="button"
              aria-label="تكبير حجم العرض"
              className="grid size-10 place-items-center rounded-sm bg-[#edf8f4] text-brand transition-colors hover:bg-brand hover:text-white"
            >
              <ZoomIn aria-hidden="true" className="size-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="mx-auto flex h-[112px] w-full max-w-[1640px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-14">
          <Link href="/" aria-label={content.brand.name}>
            <SiteLogo name={content.brand.name} />
          </Link>

          <nav
            className="hidden flex-1 2xl:block"
            aria-label="التنقل الرئيسي"
          >
            <ul className="flex items-center justify-center gap-2 2xl:gap-4">
              {content.navigation.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === item.href
                    : pathname.startsWith(item.href)

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`flex h-14 items-center gap-1.5 rounded-md px-3 text-sm font-medium whitespace-nowrap transition-colors xl:px-4 xl:text-base ${
                        isActive
                          ? "bg-[#eaf5f1] font-bold text-brand"
                          : "text-neutral-700 hover:bg-brand/5 hover:text-brand"
                      }`}
                    >
                      {item.label}
                      {item.hasMenu ? (
                        <ChevronDown aria-hidden="true" className="size-4" />
                      ) : null}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {user ? (
            <div className="hidden min-w-44 items-center gap-3 2xl:flex">
              <div className="grid size-14 place-items-center rounded-md bg-[#edf8f4] text-brand">
                <UserRound
                  aria-hidden="true"
                  className="size-7"
                  strokeWidth={1.8}
                />
              </div>
              <div className="text-sm leading-6">
                <p className="text-neutral-500">{user.greeting}</p>
                <p className="font-semibold text-neutral-800">{user.name}</p>
              </div>
            </div>
          ) : (
            <Button
              asChild
              className="hidden h-14 min-w-44 rounded-md bg-brand px-7 text-base font-semibold text-white hover:bg-brand-strong 2xl:inline-flex"
            >
              <Link href={content.login.href}>{content.login.label}</Link>
            </Button>
          )}

          <MobileNavigation
            items={content.navigation}
            login={content.login}
            user={user}
          />
        </div>
      </div>
    </header>
  )
}
