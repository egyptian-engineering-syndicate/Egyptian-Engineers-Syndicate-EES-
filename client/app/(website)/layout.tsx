import type { ReactNode } from "react"

import { SiteShell } from "@/features/site-shell"

export default function WebsiteLayout({ children }: { children: ReactNode }) {
  return <SiteShell>{children}</SiteShell>
}
