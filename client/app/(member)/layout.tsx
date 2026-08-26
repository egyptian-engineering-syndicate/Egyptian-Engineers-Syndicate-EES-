import type { ReactNode } from "react"

import { membershipDemoUser } from "@/features/membership"
import { SiteShell } from "@/features/site-shell"

export default function MemberLayout({ children }: { children: ReactNode }) {
  return <SiteShell user={membershipDemoUser}>{children}</SiteShell>
}
