"use client"

import { useEffect, useState } from "react"
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
import { isMemberSignedIn } from "@/lib/member-session"

import { signedInUser } from "../data/site-shell.content"
import type { SiteShellContent, SiteShellUser } from "../types/site-shell.types"
import { scrollToPageHash } from "./hash-scroll"
import { HeaderClock } from "./header-clock"
import { MobileNavigation } from "./mobile-navigation"
import { SiteLogo } from "./site-logo"

interface SiteHeaderProps {
  content: SiteShellContent
  user?: SiteShellUser
}

export function SiteHeader({ content, user }: SiteHeaderProps) {
  const pathname = usePathname()
  const [activeUser, setActiveUser] = useState<SiteShellUser | undefined>(user)

  useEffect(() => {
    setActiveUser(user ?? (isMemberSignedIn() ? signedInUser : undefined))
  }, [user, pathname])

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
        <div className="mx-auto flex h-[112px] w-full max-w-[1640px] items-center gap-3 px-4 sm:px-6 lg:px-8">
          <Link href="/" aria-label={content.brand.name} className="shrink-0">
            <SiteLogo name={content.brand.name} dense />
          </Link>

          <nav
            className="hidden min-w-0 flex-1 2xl:block"
            aria-label="التنقل الرئيسي"
          >
            <ul className="flex items-center justify-center gap-0.5">
              {content.navigation.map((item) => {
                const path = item.href.split("#")[0] || "/"
                const isActive =
                  path === "/"
                    ? pathname === "/" && !item.href.includes("#")
                    : pathname.startsWith(path)

                return (
                  <li key={item.href} className="min-w-0">
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => scrollToPageHash(item.href)}
                      className={`flex h-11 items-center gap-3 rounded-md px-2 text-lg font-medium whitespace-nowrap transition-colors ${
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

          {activeUser ? (
            <Link
              href={activeUser.profileHref}
              aria-label="الملف الشخصي"
              className="hidden shrink-0 items-center gap-2 rounded-md transition-colors hover:bg-brand/5 2xl:flex"
            >
              <div className="grid size-11 place-items-center rounded-md bg-[#edf8f4] text-brand">
                <UserRound
                  aria-hidden="true"
                  className="size-6"
                  strokeWidth={1.8}
                />
              </div>
              <div className="text-sm leading-6">
                <p className="text-neutral-500">{activeUser.greeting}</p>
                <p className="font-semibold text-neutral-800">
                  {activeUser.name}
                </p>
              </div>
            </Link>
          ) : (
            <Button
              asChild
              className="hidden h-11 shrink-0 rounded-md bg-brand px-4 text-base font-semibold text-white hover:bg-brand-strong 2xl:inline-flex"
            >
              <Link href={content.login.href}>{content.login.label}</Link>
            </Button>
          )}

          <MobileNavigation
            items={content.navigation}
            login={content.login}
            user={activeUser}
          />
        </div>
      </div>
    </header>
  )
}
