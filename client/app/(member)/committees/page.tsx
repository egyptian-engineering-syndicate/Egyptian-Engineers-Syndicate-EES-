import type { Metadata } from "next"

import {
  committeesPageContent,
  CommitteesPageView,
} from "@/features/committees"
import { siteShellContent } from "@/features/site-shell"

export const metadata: Metadata = {
  title: `${committeesPageContent.title} | ${siteShellContent.brand.name}`,
  description: "لجان نقابة المهندسين بالقاهرة ومجالات عمل كل لجنة وأعضاؤها.",
}

export default function CommitteesPage() {
  return <CommitteesPageView content={committeesPageContent} />
}
