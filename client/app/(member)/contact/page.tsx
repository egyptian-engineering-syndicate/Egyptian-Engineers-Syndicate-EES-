import type { Metadata } from "next"

import { contactPageContent, ContactPageView } from "@/features/contact"
import { siteShellContent } from "@/features/site-shell"

export const metadata: Metadata = {
  title: `${contactPageContent.form.title} | ${siteShellContent.brand.name}`,
  description: contactPageContent.infoDescription,
}

export default function ContactPage() {
  return <ContactPageView content={contactPageContent} />
}
