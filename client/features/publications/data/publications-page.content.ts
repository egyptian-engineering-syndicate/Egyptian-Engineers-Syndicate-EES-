import type {
  Publication,
  PublicationsPageContent,
} from "../types/publications-content.types"

const title =
  "دليل الشركات الهندسية العربية ومكاتب ومؤسسات الهندسة الإستشارية المصنفة (أ و ب) في الوطن العربي"

const items: Publication[] = Array.from({ length: 8 }, (_, index) => ({
  id: `arab-engineering-directory-${index + 1}`,
  title,
  date: "29 مايو 2024",
}))

export const publicationsPageContent: PublicationsPageContent = {
  breadcrumbs: [{ label: "الرئيسية", href: "/" }, { label: "المنشورات" }],
  title: "منشورات",
  items,
}
