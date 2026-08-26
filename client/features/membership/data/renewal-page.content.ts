import type { RenewalPageContent } from "../types/membership-content.types"
import { membershipPlans } from "./membership-plans.content"

export const renewalPageContent: RenewalPageContent = {
  breadcrumbs: [{ label: "الرئيسية", href: "/" }, { label: "تجديد الاشتراك" }],
  title: "تجديد الاشتراك",
  description: "جدد عضويتك في نقابة المهندسين بالقاهرة بكل سهولة",
  member: {
    name: "م.محمد عمرو خليفة",
    statusLabel: "منتهي الصلاحية",
    expiryLabel: "انتهاء",
    expiryDate: "2024/12/31",
    membershipNumber: "2232321",
    specialization: "هندسة مدنية",
  },
  memberCardLabels: {
    memberNameLabel: "اسم العضو",
    membershipNumberLabel: "رقم القيد",
  },
  plansSection: {
    title: "اختر نوع الاشتراك",
  },
  plans: membershipPlans,
  selectPlanLabel: "اختيار الاشتراك",
}
