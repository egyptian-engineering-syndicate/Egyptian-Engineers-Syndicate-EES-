import type { ReactNode } from "react"

import { siteShellContent } from "../data/site-shell.content"
import type { SiteShellUser } from "../types/site-shell.types"
import { SiteFooter } from "./site-footer"
import { SiteHeader } from "./site-header"

interface SiteShellProps {
  children: ReactNode
  user?: SiteShellUser
}

export function SiteShell({ children, user }: SiteShellProps) {
  return (
    <div
      className="grid min-h-svh grid-rows-[auto_1fr_auto] bg-white"
      dir="rtl"
    >
      <SiteHeader content={siteShellContent} user={user} />
      {children}
      <SiteFooter content={siteShellContent} />
    </div>
  )
}
