import type { Metadata } from "next"

import { ProfilePageView, profilePageContent } from "@/features/profile"
import { siteShellContent } from "@/features/site-shell"

export const metadata: Metadata = {
  title: `الملف الشخصي | ${siteShellContent.brand.name}`,
  description: "بيانات العضوية والاشتراكات والحجوزات الخاصة بعضو النقابة.",
}

export default function ProfilePage() {
  return <ProfilePageView content={profilePageContent} />
}
