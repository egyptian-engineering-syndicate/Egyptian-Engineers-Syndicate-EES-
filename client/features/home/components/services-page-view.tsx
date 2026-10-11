import { PageBreadcrumb } from "@/features/site-shell"

import { homePageContent } from "../data/home-page.content"
import { ServicesSection } from "./services-section"

const breadcrumbs = [
  { label: "الرئيسية", href: "/" },
  { label: "الخدمات" },
]

export function ServicesPageView() {
  return (
    <main className="overflow-x-clip bg-white">
      <PageBreadcrumb items={breadcrumbs} />
      <ServicesSection content={homePageContent.services} />
    </main>
  )
}
