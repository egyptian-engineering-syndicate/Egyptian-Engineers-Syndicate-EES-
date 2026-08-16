import type { ReactNode } from "react"

import { siteShellContent } from "../data/site-shell.content"
import { SiteFooter } from "./site-footer"
import { SiteHeader } from "./site-header"

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div
      className="grid min-h-svh grid-rows-[auto_1fr_auto] bg-white"
      dir="rtl"
    >
      <SiteHeader content={siteShellContent} />
      {children}
      <SiteFooter content={siteShellContent} />
    </div>
  )
}
