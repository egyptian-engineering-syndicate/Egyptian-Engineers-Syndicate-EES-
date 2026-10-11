import { notFound } from "next/navigation"

import type { PensionApplyPageContent } from "../types/pensions-content.types"
import { pensionPageContent } from "./pensions-page.content"

const documents = [
  { id: "national-id", label: "بطاقة رقم قومي" },
  { id: "syndicate-card", label: "بطاقة عضوية النقابة" },
  { id: "birth-certificate", label: "شهادة الميلاد" },
  { id: "service-data", label: "بيانات الخدمة" },
  { id: "form-1-6", label: "استمارة 1 و6 والتأمينات" },
  { id: "recent-photo", label: "صور شخصية حديثة" },
  { id: "graduation", label: "الشهادات الدراسية" },
  { id: "last-salary", label: "شهادة الراتب الأخير" },
  { id: "marriage", label: "صورة عقد الزواج" },
]

const validation: PensionApplyPageContent["validation"] = {
  eligibilityRequired: "اختر نوع الاستحقاق",
  fullNameRequired: "الاسم الرباعي مطلوب",
  emailRequired: "البريد الإلكتروني مطلوب",
  emailInvalid: "أدخل بريدًا إلكترونيًا صحيحًا",
  nationalIdRequired: "الرقم القومي مطلوب",
  phoneRequired: "رقم الهاتف مطلوب",
  phoneInvalid: "أدخل رقم هاتف صحيح",
  birthDateRequired: "تاريخ الميلاد مطلوب",
  lastEmployerRequired: "جهة العمل الأخيرة مطلوبة",
  specializationRequired: "التخصص الهندسي مطلوب",
  membershipNumberRequired: "رقم القيد مطلوب",
  serviceYearsRequired: "مدة الخدمة مطلوبة",
  basicSalaryRequired: "المرتب الأساسي مطلوب",
  notesTooLong: "الملاحظات يجب ألا تزيد عن 500 حرف",
}

export function getPensionApplyPageContent(
  pensionId: string
): PensionApplyPageContent {
  const plan = pensionPageContent.plans.find((item) => item.id === pensionId)

  if (!plan) {
    notFound()
  }

  return {
    breadcrumbs: [
      { label: "الرئيسية", href: "/" },
      { label: "المعاشات", href: "/pensions" },
    ],
    applyPrefix: "التقديم على:",
    title: plan.title,
    description: plan.description,
    eligibilityLabel: plan.eligibilityLabel,
    eligibility: plan.eligibility,
    eligibilityOptions:
      plan.id === "retirement"
        ? [
            { id: "over-60", label: "تقاعد فوق ال 60 سنة" },
            { id: "under-60", label: "تقاعد اقل من 60 سنة" },
          ]
        : [],
    personal: {
      title: "البيانات الشخصية",
      fullNameLabel: "الاسم الرباعي",
      fullNamePlaceholder: "الاسم الرباعي",
      emailLabel: "البريد الالكتروني",
      emailPlaceholder: "البريد الالكتروني",
      nationalIdLabel: "الرقم القومي",
      nationalIdPlaceholder: "الرقم القومي",
      phoneLabel: "رقم الهاتف",
      phonePlaceholder: "رقم الهاتف",
      birthDateLabel: "تاريخ الميلاد",
      birthDatePlaceholder: "اليوم/الشهر/السنة",
    },
    professional: {
      title: "البيانات المهنية",
      lastEmployerLabel: "جهة العمل الأخيرة",
      lastEmployerPlaceholder: "جهة العمل الأخيرة",
      specializationLabel: "التخصص الهندسي",
      specializationPlaceholder: "التخصص الهندسي",
      membershipNumberLabel: "رقم القيد بالنقابة",
      membershipNumberPlaceholder: "رقم القيد بالنقابة",
      serviceYearsLabel: "مدة الخدمة (بالسنوات)",
      serviceYearsPlaceholder: "مدة الخدمة (بالسنوات)",
      basicSalaryLabel: "المرتب الأساسي (جنيه)",
      basicSalaryPlaceholder: "المرتب الأساسي (جنيه)",
    },
    documents: {
      title: "المستندات المرفقة",
      options: documents,
      uploadLabel: "تحميل الملفات",
      selectedFilesLabel: "الملفات المرفقة",
      removeFileLabel: "حذف",
      notesLabel: "ملاحظات إضافية (اختياري)",
      notesPlaceholder: "ملاحظات إضافية",
      submitLabel: "تحديث البيانات",
      backLabel: "رجوع",
      backHref: "/pensions",
    },
    validation,
  }
}
