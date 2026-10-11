import type { Metadata } from "next"

import {
  departmentsPageContent,
  DepartmentsPageView,
} from "@/features/departments"
import { siteShellContent } from "@/features/site-shell"

export const metadata: Metadata = {
  title: `${departmentsPageContent.title} | ${siteShellContent.brand.name}`,
  description: "إدارات نقابة المهندسين بالقاهرة وخدماتها.",
}

export default function DepartmentsPage() {
  return <DepartmentsPageView content={departmentsPageContent} />
}
