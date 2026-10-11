import type { PensionPageContent } from "../types/pensions-content.types"

export const pensionPageContent: PensionPageContent = {
  breadcrumbs: [{ label: "الرئيسية", href: "/" }, { label: "المعاشات" }],
  title: "المعاشات",
  description: "رحلات مميزة لأعضاء نقابة المهندسين بأسعار تفضيلية حصرية",
  plans: [
    {
      id: "retirement",
      title: "معاش التقاعد",
      description:
        "المعاش الذي يستحقه المهندس عند بلوغه سن التقاعد القانونية أو عند إتمام المدة المقررة، ويُصرف شهريًا مدى الحياة.",
      eligibilityLabel: "الاستحقاق:",
      eligibility: "بلوغ سن 60 عاماً أو تقاعد أقل من 60 سنة",
      href: "/pensions/retirement",
    },
    {
      id: "disability",
      title: "معاش العجز",
      description:
        "يُمنح للمهندس الذي ثبت عجزه الكلي أو الجزئي عن مزاولة المهنة، بناءً على تقرير لجنة طبية متخصصة.",
      eligibilityLabel: "الاستحقاق:",
      eligibility: "العجز الكلي أو الجزئي عن العمل بسبب إصابة أو مرض",
      href: "/pensions/disability",
    },
    {
      id: "survivors",
      title: "معاش المستحقين",
      description:
        "يستحقه ذوو المهندس المتوفى (الزوجة والأبناء حتى سن 21 والبنات غير المتزوجات)، ويُصرف شهريًا.",
      eligibilityLabel: "الاستحقاق:",
      eligibility: "وفاة صاحب المعاش أو المهندس المؤمّن عليه",
      href: "/pensions/survivors",
    },
  ],
  requiredDocuments: {
    title: "المستندات المطلوبة",
    items: [
      "صور شهادات الحصول الدراسية",
      "شهادة بالراتب الأخير",
      "شهادات الميلاد للأبناء",
      "2 صورة شخصية حديثة",
      "شهادة الميلاد",
      "استمارة 1 و6 من هيئة التأمينات",
      "صورة عقد الزواج (للمتزوجين)",
      "صورة بطاقة الرقم القومي سارية",
      "بيانات الخدمة من جهة العمل الأخيرة",
      "صورة بطاقة عضوية النقابة",
    ],
  },
}
