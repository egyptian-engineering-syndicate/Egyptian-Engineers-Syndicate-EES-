import type { SiteShellContent } from "../types/site-shell.types"

export const siteShellContent: SiteShellContent = {
  brand: {
    name: "نقابة المهندسين بالقاهرة",
    shortName: "نقابة القاهرة",
    description:
      "نعمل على خدمة المهندسين وتطوير المهنة من خلال باقة متكاملة من الخدمات النقابية والمهنية.",
  },
  navigation: [
    { label: "الرئيسية", href: "/" },
    { label: "من نحن", href: "/about" },
    { label: "الخدمات", href: "/services", hasMenu: true },
    { label: "إدارات النقابة", href: "/departments", hasMenu: true },
    { label: "اللجان", href: "/committees" },
    { label: "آخر الأخبار", href: "/news" },
    { label: "الفعاليات", href: "/events" },
    { label: "تواصل معنا", href: "/contact" },
  ],
  login: {
    label: "تسجيل الدخول",
    href: "/login",
  },
  footer: {
    quickLinksTitle: "روابط سريعة",
    quickLinks: [
      { label: "الرئيسية", href: "/" },
      { label: "آخر الأخبار", href: "/news" },
      { label: "الخدمات", href: "/services" },
      { label: "عن النقابة", href: "/about" },
      { label: "إدارات النقابة", href: "/departments" },
      { label: "تواصل معنا", href: "/contact" },
    ],
    contactTitle: "تواصل معنا",
    address: "شارع رمسيس، القاهرة، جمهورية مصر العربية",
    email: "info@eng-syndicate.eg",
    phone: "+20 2 1234 5678",
    newsletterTitle: "النشرة البريدية",
    newsletterDescription: "اشترك ليصلك كل جديد من أخبار وخدمات النقابة.",
    emailLabel: "البريد الإلكتروني",
    emailPlaceholder: "بريدك الإلكتروني",
    subscribeLabel: "اشتراك",
    copyright: "© 2026 نقابة المهندسين بالقاهرة. جميع الحقوق محفوظة.",
  },
}
