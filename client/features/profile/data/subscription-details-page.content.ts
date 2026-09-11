import type {
  SubscriptionDetailsPageContent,
  SubscriptionDocument,
} from "../types/subscription-details-content.types"

/* Ten uploaded files, authored in the row-major order the two-column grid
   renders them: the designs alternate the two document kinds down the page. */
const attachedDocuments: SubscriptionDocument[] = Array.from({
  length: 5,
}).flatMap((_, index) => [
  {
    id: `birth-certificate-${index + 1}`,
    title: "شهادة الميلاد",
    date: "09/14/2024",
  },
  {
    id: `insurance-form-${index + 1}`,
    title: "استمارة 1 و6 من هيئة التأمينات",
    date: "09/14/2024",
  },
])

const subscriptionDetailsPageContent: SubscriptionDetailsPageContent = {
  breadcrumbs: [
    { label: "الرئيسية", href: "/" },
    { label: "الملف الشخصي", href: "/profile" },
    { label: "بيانات الاشتراك" },
  ],
  title: "بيانات الاشتراك",
  personal: {
    title: "البيانات الشخصية",
    fields: [
      {
        label: "الاسم الرباعي",
        value: "السيد/ م.محمد عمرو",
        emphasis: true,
        wide: true,
      },
      {
        label: "البريد الالكتروني",
        value: "mohammedalnagar00317@gmail.com",
      },
      { label: "رقم الهاتف", value: "01069407053" },
      { label: "الرقم القومي", value: "30310178800772" },
      { label: "تاريخ الميلاد", value: "23/4/1950" },
    ],
  },
  professional: {
    title: "البيانات المهنية",
    fields: [
      { label: "جهة العمل الأخيرة", value: "اينوفيرا", wide: true },
      { label: "رقم القيد بالنقابة", value: "#23354543" },
      { label: "التخصص الهندسي", value: "هندسة حاسب" },
      { label: "مدة الخدمة (بالسنوات)", value: "25 سنة", emphasis: true },
      {
        label: "آخر راتب أساسي (جنيه)",
        value: "10,000 جنيه",
        emphasis: true,
      },
    ],
  },
  documents: {
    title: "المستندات المرفقة",
    checklist: [
      "صور شهادات المؤهلات الدراسية",
      "شهادة الميلاد",
      "صورة بطاقة الرقم القومي سارية",
      "شهادة بالراتب الأخير",
      "استمارة 1 و6 من هيئة التأمينات",
      "بيانات الخدمة من جهة العمل الأخيرة",
      "شهادات الميلاد للأبناء",
      "صورة عقد الزواج (للمتزوجين)",
      "صورة بطاقة عضوية النقابة",
      "2 صورة شخصية حديثة",
    ],
    documents: attachedDocuments,
  },
}

/**
 * Temporary adapter: every subscription resolves to the same hardcoded data
 * until the Directus queries land. Keep the `subscriptionId` argument so callers
 * already pass it.
 */
export function getSubscriptionDetailsPageContent(
  subscriptionId: string
): SubscriptionDetailsPageContent {
  void subscriptionId

  return subscriptionDetailsPageContent
}
