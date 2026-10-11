import { notFound } from "next/navigation"

import type {
  SubscriptionDetailsPageContent,
  SubscriptionDocument,
} from "../types/subscription-details-content.types"
import { profilePageContent } from "./profile-page.content"

function documentsFromTitles(titles: string[]): SubscriptionDocument[] {
  return titles.map((title, index) => ({
    id: `${index + 1}-${title}`,
    title,
    date: "09/14/2024",
  }))
}

const personal: SubscriptionDetailsPageContent["personal"] = {
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
}

const pages: Record<string, SubscriptionDetailsPageContent> = {
  syndicate: {
    breadcrumbs: [
      { label: "الرئيسية", href: "/" },
      { label: "الملف الشخصي", href: "/profile" },
      { label: "اشتراك النقابة" },
    ],
    title: "بيانات اشتراك النقابة",
    personal,
    professional: {
      title: "بيانات الاشتراك",
      fields: [
        { label: "نوع الاشتراك", value: "الاشتراك السنوي", wide: true },
        { label: "رقم القيد بالنقابة", value: "#2232321" },
        { label: "التخصص الهندسي", value: "هندسة مدنية" },
        { label: "تاريخ الانتهاء", value: "31 / 12 / 2024", emphasis: true },
        { label: "قيمة الاشتراك", value: "600 جنيه", emphasis: true },
      ],
    },
    documents: {
      title: "المستندات المرفقة",
      checklist: [
        "صورة كارنيه النقابة",
        "صورة بطاقة الرقم القومي سارية",
        "إيصال سداد اشتراك النقابة للعام الحالي",
        "2 صورة شخصية حديثة",
      ],
      documents: documentsFromTitles([
        "صورة كارنيه النقابة",
        "بطاقة الرقم القومي",
        "إيصال سداد الاشتراك",
        "صورة شخصية",
      ]),
    },
  },
  pension: {
    breadcrumbs: [
      { label: "الرئيسية", href: "/" },
      { label: "الملف الشخصي", href: "/profile" },
      { label: "معاش التقاعد" },
    ],
    title: "بيانات معاش التقاعد",
    personal,
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
      documents: documentsFromTitles([
        "شهادة الميلاد",
        "استمارة 1 و6 من هيئة التأمينات",
        "شهادة الراتب الأخير",
        "بيانات الخدمة",
        "صورة عقد الزواج",
        "بطاقة عضوية النقابة",
      ]),
    },
  },
  "health-care": {
    breadcrumbs: [
      { label: "الرئيسية", href: "/" },
      { label: "الملف الشخصي", href: "/profile" },
      { label: "الرعاية الصحية" },
    ],
    title: "بيانات الرعاية الصحية",
    personal,
    professional: {
      title: "بيانات الخطة",
      fields: [
        { label: "نوع الخطة", value: "الرعاية الصحية الأساسية", wide: true },
        { label: "رقم القيد بالنقابة", value: "#2232321" },
        { label: "عدد الأفراد", value: "4 أفراد" },
        { label: "تاريخ الانتهاء", value: "31 / 12 / 2024", emphasis: true },
        { label: "قيمة الاشتراك", value: "600 جنيه", emphasis: true },
      ],
    },
    documents: {
      title: "المستندات المرفقة",
      checklist: [
        "صورة كارنيه النقابة",
        "صورة بطاقة الرقم القومي",
        "إيصال سداد اشتراك النقابة للعام الحالي",
        "صورة شخصية لكل عضو",
        "إثبات صلة القرابة للأعضاء التابعين",
      ],
      documents: documentsFromTitles([
        "صورة كارنيه النقابة",
        "بطاقة الرقم القومي",
        "إيصال سداد الاشتراك",
        "صورة شخصية",
        "إثبات صلة القرابة",
      ]),
    },
  },
}

export function getSubscriptionDetailsPageContent(
  subscriptionId: string
): SubscriptionDetailsPageContent {
  const fromProfile = profilePageContent.subscriptions.find(
    (item) => item.id === subscriptionId
  )
  const content = pages[subscriptionId]

  if (!fromProfile || !content) {
    notFound()
  }

  return content
}
