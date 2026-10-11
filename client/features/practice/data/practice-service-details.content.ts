import { notFound } from "next/navigation"

import type { PracticeDetailsPageContent } from "../types/practice-content.types"
import { practicePageContent } from "./practice-page.content"

const sharedDescription =
  "ابدأ رحلتك في عالم الهندسة المدنية من الصفر وتعرف على المبادئ الأساسية التي يقوم عليها تصميم وتنفيذ المشروعات الإنشائية. تمنحك هذه الدورة فهماً شاملاً لمجالات الهندسة المدنية المختلفة، بدايةً من التعرف على المواد الإنشائية وقراءة الرسومات الهندسية، وصولاً إلى أساسيات التنفيذ وإدارة مواقع العمل. سواء كنت طالبًا حديث التخرج أو ترغب في استكشاف مجال الهندسة المدنية، فستوفر لك هذه الدورة قاعدة معرفية قوية تساعدك على الانطلاق بثقة."

export function getPracticeDetailsPageContent(
  serviceId: string
): PracticeDetailsPageContent {
  const service = practicePageContent.services.find(
    (item) => item.id === serviceId
  )

  if (!service) {
    notFound()
  }

  return {
    breadcrumbs: [
      { label: "الرئيسية", href: "/" },
      { label: "مزاولة المهنة", href: "/practice" },
    ],
    title: service.title,
    description: sharedDescription,
    image: {
      src: "/images/committees/committee-building.jpg",
      alt: service.image.alt,
    },
    specialists: {
      title: "المهندسون المختصون بالشهادة",
      items: [
        "بيت خبرة / مكتب متعدد",
        "مكتب نوعي",
        "استشاري",
        "مهندس خبرة أكثر من سنتين",
        "5 شهادات وقيمة أعمال 3 مليون للشهادة",
      ],
    },
    requiredDocuments: {
      title: "المستندات المطلوبة لشهادة الاشراف على التنفيذ",
      items: [
        {
          marker: "1",
          text: "وتخليص المبنى (أصل للاطلاع عليه).",
        },
        {
          marker: "2",
          text: "إيصال الدمغة الهندسية بقيمة 0.5 في الألف من قيمة الأعمال.",
        },
        {
          marker: "3",
          text: "حضور المالك بنفسه أو توكيل أحد الأشخاص للحضور نيابة عنه.",
        },
        {
          marker: "4",
          text: "عقد الاتفاق بين المهندس المشرف والمالك والموجود نموذج منه بالنقابة.",
        },
        {
          marker: "5",
          text: "حضور المهندس المشرف بالسجل وكارنيه مجدد والنقابة والرقم القومي الخاص به.",
        },
      ],
    },
    fees: {
      title: "الرسوم المقررة",
      description: "تحدد رسوم الشهادة على قيمة الأعمال حسب الجدول المرفق",
    },
    extraInfo: {
      title: "معلومات اضافية",
      items: [
        {
          marker: "1",
          text: "تخفيض رسوم الشهادات للمساجد والكنائس والأديرة بنسبة 60% (الأماكن المخصصة للصلاة فقط).",
        },
        {
          marker: "2",
          text: "دار الأيتام معفاة من الرسوم تماماً.",
        },
        {
          marker: "3",
          text: "إذا كان المالك هو المهندس بنفسه أو أحد أقربائه من الدرجة الأولى يعفى من استخراج شهادة بدون استخراج سجل هندسي، وإذا كان لشهادته سجل هندسي تكون له دورة خاصة ضمن العقد الحسابي له.",
        },
      ],
    },
    apply: {
      title: "التقديم على الشهادة",
      label: "الذهاب للتقديم",
      href: `/practice/${service.id}/apply`,
    },
  }
}
