import type { HealthCarePageContent } from "../types/health-care-content.types"

export const healthCarePageContent: HealthCarePageContent = {
  breadcrumbs: [{ label: "الرئيسية", href: "/" }, { label: "الرعاية الصحية" }],
  title: "الرعاية الصحية",
  description: "رحلات مميزة لأعضاء نقابة المهندسين بأسعار تفضيلية حصرية",
  subscribeLabel: "اشترك الان",
  plans: [
    {
      id: "family",
      icon: "family",
      title: "رعاية عائلية",
      description:
        "رعاية عائلية خاصة بالمهندس المتقدم واسرته لجميع النواحي الصحية",
      price: 1800,
      currency: "جنيه",
      subscribeHref: "/health-care/family",
    },
    {
      id: "individual",
      icon: "individual",
      title: "رعاية فردية",
      description: "رعاية فردية خاصة بالمهندس المتقدم فقط لجميع النواحي الصحية",
      price: 1800,
      currency: "جنيه",
      subscribeHref: "/health-care/individual",
    },
  ],
}
