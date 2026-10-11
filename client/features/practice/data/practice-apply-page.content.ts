import { notFound } from "next/navigation"

import type { PracticeApplyPageContent } from "../types/practice-content.types"
import { practicePageContent } from "./practice-page.content"

export function getPracticeApplyPageContent(
  serviceId: string
): PracticeApplyPageContent {
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
    description: "هذه الشهادات هي نقابة المهندسين بالقاهرة شأن مزاولة",
    member: {
      nameLabel: "اسم العضو",
      name: "م.محمد عمرو خليفة",
      expiryLabel: "انتهاء",
      expiryDate: "31 / 12 / 2024",
      membershipNumberLabel: "رقم القيد",
      membershipNumber: "2232321",
      specialization: "هندسة مدنية",
    },
    personal: {
      title: "البيانات الشخصية",
      emailLabel: "البريد الالكتروني",
      emailPlaceholder: "البريد الالكتروني",
      phoneLabel: "رقم الهاتف",
      phonePlaceholder: "رقم الهاتف",
      nationalIdLabel: "الرقم القومي",
      nationalIdPlaceholder: "الرقم القومي",
      syndicateCardLabel: "الرقم القومي",
      syndicateCardPlaceholder: "الرقم القومي",
      cardExpiryLabel: "تاريخ الميلاد",
      cardExpiryPlaceholder: "تاريخ الميلاد",
      fullNameLabel: "الاسم على البطاقة",
      fullNamePlaceholder: "الاسم على البطاقة",
    },
    professional: {
      title: "البيانات المهنية",
      options: [
        { id: "multi-office", label: "بيت خبرة / مكتب متعدد" },
        { id: "specialized-office", label: "مكتب نوعي" },
        { id: "consultant", label: "استشاري" },
        { id: "experienced-engineer", label: "مهندس خبرة أكثر من سنتين" },
        {
          id: "certificates-value",
          label: "5 شهادات وقيمة أعمال 3 مليون للشهادة",
        },
      ],
    },
    documents: {
      title: "تحميل المستندات المطلوبة",
      options: [
        { id: "building-clearance", label: "وتخليص المبنى (أصل للاطلاع عليه)." },
        {
          id: "engineering-stamp",
          label: "إيصال الدمغة الهندسية بقيمة 0.5 في الألف من قيمة الأعمال.",
        },
        {
          id: "owner-attendance",
          label: "حضور المالك بنفسه أو توكيل أحد الأشخاص للحضور نيابة عنه.",
        },
        {
          id: "supervision-contract",
          label:
            "عقد الاتفاق بين المهندس المشرف والمالك والموجود نموذج منه بالنقابة.",
        },
        {
          id: "engineer-records",
          label:
            "حضور المهندس المشرف بالسجل وكارنيه مجدد والنقابة والرقم القومي الخاص به.",
        },
      ],
      uploadLabel: "تحميل الملفات",
      selectedFilesLabel: "الملفات المرفقة",
      removeFileLabel: "حذف",
    },
    payment: {
      title: "الدفع",
      totalLabel: "السعر الاجمالي للرعاية",
      totalPrice: 600,
      currency: "جنيه",
      methodsLabel: "اختر طريقة الدفع",
      paymentMethods: [
        { id: "card", label: "الدفع بالبطاقة" },
        { id: "fawry", label: "الدفع بفوري" },
        { id: "paytabs", label: "الدفع بياي تاب" },
      ],
      cardNameLabel: "اسم البطاقة",
      cardNamePlaceholder: "أضف اسم البطاقة",
      cardNumberLabel: "رقم البطاقة",
      cardNumberPlaceholder: "أضف رقم البطاقة",
      expiryLabel: "تاريخ الانتهاء",
      expiryPlaceholder: "الشهر/السنة",
      cvvLabel: "رقم CVV",
      cvvPlaceholder: "أضف رقم CVV",
      submitLabel: "اتمام الدفع",
    },
    validation: {
      emailRequired: "البريد الإلكتروني مطلوب",
      emailInvalid: "أدخل بريدًا إلكترونيًا صحيحًا",
      phoneRequired: "رقم الهاتف مطلوب",
      phoneInvalid: "أدخل رقم هاتف صحيح",
      nationalIdRequired: "الرقم القومي مطلوب",
      syndicateCardRequired: "رقم البطاقة مطلوب",
      cardExpiryRequired: "تاريخ الميلاد مطلوب",
      fullNameRequired: "الاسم مطلوب",
      cardNameRequired: "اسم البطاقة مطلوب",
      cardNumberRequired: "رقم البطاقة مطلوب",
      cardNumberInvalid: "أدخل رقم بطاقة صحيح مكون من 16 رقم",
      expiryRequired: "تاريخ الانتهاء مطلوب",
      expiryInvalid: "أدخل تاريخ الانتهاء بصيغة الشهر/السنة",
      cvvRequired: "رقم CVV مطلوب",
      cvvInvalid: "أدخل رقم CVV صحيح",
    },
  }
}
