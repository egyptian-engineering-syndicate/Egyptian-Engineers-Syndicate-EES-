import type {
  SubscriptionPlan,
  SubscriptionPlanId,
} from "../types/membership-content.types"

export const membershipPlans: SubscriptionPlan[] = [
  {
    id: "annual",
    title: "الاشتراك السنوي",
    description: "تجديد العضوية لمدة عام كامل مع كامل مزايا النقابة",
    durationLabel: "سنة كاملة",
    price: 600,
    currency: "جنيه",
    features: [
      "الوصول لجميع خدمات النقابة",
      "عضوية نشطة في نقابة المهندسين",
      "الاشتراك في رحلات النقابة",
      "تخفيضات على الدورات التدريبية",
      "الخدمات الإلكترونية والاستشارات",
    ],
  },
  {
    id: "three-year",
    title: "الاشتراك لـ 3 سنوات",
    description: "تجديد العضوية لمدة عام كامل مع كامل مزايا النقابة",
    durationLabel: "3 سنين",
    price: 1500,
    currency: "جنيه",
    features: [
      "جميع مزايا الاشتراك السنوي",
      "توفير 300 جنيه مقارنة بالسنوي",
      "بطاقة عضوية مميزة",
      "أولوية في التسجيل بالدورات",
      "إشعارات تجديد مبكرة",
    ],
  },
  {
    id: "five-year",
    title: "الاشتراك لـ 5 سنوات",
    description: "أفضل قيمة – اشتراك طويل الأمد بأقل سعر سنوي",
    durationLabel: "5 سنوات",
    price: 2200,
    currency: "جنيه",
    features: [
      "عضوية نشطة في نقابة المهندسين",
      "جميع مزايا الاشتراك الثلاثي",
      "تخفيضات على الدورات التدريبية",
      "الاشتراك في رحلات النقابة",
      "الخدمات الإلكترونية والاستشارات",
    ],
  },
]

export function getSubscriptionPlan(id?: string | null): SubscriptionPlan {
  const plan = membershipPlans.find(
    (candidate) => candidate.id === (id as SubscriptionPlanId)
  )

  return plan ?? membershipPlans[0]
}
