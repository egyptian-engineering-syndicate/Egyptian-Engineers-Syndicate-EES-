"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"

import type {
  NavigationItem,
  SiteShellContent,
} from "../types/site-shell.types"

interface MobileNavigationProps {
  items: NavigationItem[]
  login: SiteShellContent["login"]
}

export function MobileNavigation({ items, login }: MobileNavigationProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="lg:hidden">
      <Button
        type="button"
        variant="outline"
        size="icon-lg"
        aria-label="فتح قائمة التنقل"
        aria-expanded={open}
        className="size-11 rounded-md border-brand/20 text-brand focus-visible:outline-brand"
        onClick={() => setOpen((visible) => !visible)}
      >
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </Button>
      {open ? (
        <div className="absolute inset-x-0 top-full z-50 border-t border-neutral-100 bg-white px-5 py-5 shadow-xl">
          <nav aria-label="التنقل عبر الهاتف">
            <ul className="grid gap-1">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-3 text-sm font-medium text-neutral-700 hover:bg-brand/5 hover:text-brand"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href={login.href}
              onClick={() => setOpen(false)}
              className="mt-3 flex h-12 items-center justify-center rounded-md bg-brand font-semibold text-white"
            >
              {login.label}
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  )
}
