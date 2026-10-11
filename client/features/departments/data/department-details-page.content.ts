import { notFound, redirect } from "next/navigation"

import type { DepartmentDetailsPageContent } from "../types/departments-content.types"
import { departmentsPageContent } from "./departments-page.content"

const brief =
  "الدرعية، 10 يوليو 2024م: أعلنت شركة الدرعية اليوم، عن توقيع عقد ضخم مع شركة السيف مهندسون مقاولون (ESEC) إحدى الشركات الكبرى في مجال الهندسة والبناء في الشرق الأوسط وبالشراكة مع الشركة الصينية العامة للهندسة المعمارية (CSCEC) والتي تُعد أكبر شركة إنشاءات في العالم، لتنفيذ مشروع أعمال بناء وتشييد واسعة النطاق في المنطقة الشمالية من الدرعية."

const paragraphs = [
  `${brief} وتتضمن تفاصيل المشروع، الذي يعد أضخم العقود الإنشائية الممنوحة حتى الآن في تاريخ تطوير الدرعية بقيمة تتجاوز 7.8 مليار ريال (2 مليار دولار)؛ بناء منطقة متعددة الاستخدامات، تضم مؤسسات تعليمية متقدمة ومواقع ثقافية ومكاتب حديثة وفندقاً فاخراً، على يد أمهر وأهم المطورين العقاريين من المملكة العربية السعودية والعالم، وذلك للمساهمة في إنجاز مشروع تطوير الدرعية الذي يمثل أهم وجهة تاريخية وثقافية في المملكة، وأحد أبرز مشاريع رؤية السعودية 2030.`,
  `${brief} وتتضمن تفاصيل المشروع.`,
]

export function getDepartmentDetailsPageContent(
  departmentId: string
): DepartmentDetailsPageContent {
  if (departmentId === "syndicate-clubs") {
    redirect("/clubs")
  }

  const department = departmentsPageContent.departments.find(
    (item) => item.id === departmentId
  )

  if (!department) {
    notFound()
  }

  return {
    breadcrumbs: [
      { label: "الرئيسية", href: "/" },
      { label: department.title },
    ],
    title: department.title,
    paragraphs,
    image: department.image,
  }
}
