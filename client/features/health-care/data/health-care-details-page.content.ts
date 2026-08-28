import type {
  HealthCareDetailsPageContent,
  HealthCarePlanId,
} from "../types/health-care-content.types"

const contact: HealthCareDetailsPageContent["contact"] = {
  title: "تفاصيل التواصل",
  phoneLabel: "رقم الهاتف",
  phonePlaceholder: "رقم الهاتف",
  emailLabel: "البريد الالكتروني",
  emailPlaceholder: "البريد الالكتروني",
}

const assignedEngineer: HealthCareDetailsPageContent["assignedEngineer"] = {
  title: "المهندس المكلف",
  youBadgeLabel: "انت",
  registrationNumberLabel: "رقم القيد",
  registrationNumberPlaceholder: "رقم القيد",
  nationalIdLabel: "الرقم القومي",
  nationalIdPlaceholder: "الرقم القومي",
  cardNameLabel: "الاسم كامل في البطاقة",
  cardNamePlaceholder: "الاسم كامل في البطاقة",
}

const payment: HealthCareDetailsPageContent["payment"] = {
  title: "الدفع",
  subtitle: "احجز رعايتك الان",
  totalLabel: "السعر الاجمالي للرعاية",
  totalPrice: 600,
  currency: "جنيه",
  methodsLabel: "اختر طريقة الدفع",
  paymentMethods: [
    { id: "card", label: "الدفع بالبطاقة" },
    { id: "fawry", label: "الدفع بفوري" },
    { id: "paytabs", label: "الدفع بياي تاب" },
  ],
  form: {
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
}

const validation: HealthCareDetailsPageContent["validation"] = {
  phoneRequired: "رقم الهاتف مطلوب",
  phoneInvalid: "أدخل رقم هاتف صحيح",
  emailRequired: "البريد الالكتروني مطلوب",
  emailInvalid: "أدخل بريد الكتروني صحيح",
  registrationNumberRequired: "رقم القيد مطلوب",
  nationalIdRequired: "الرقم القومي مطلوب",
  engineerCardNameRequired: "الاسم كامل في البطاقة مطلوب",
  memberNationalIdRequired: "الرقم القومي مطلوب",
  memberCardNameRequired: "الاسم كامل في البطاقة مطلوب",
  cardNameRequired: "اسم البطاقة مطلوب",
  cardNumberRequired: "رقم البطاقة مطلوب",
  cardNumberInvalid: "أدخل رقم بطاقة صحيح مكون من 16 رقم",
  expiryRequired: "تاريخ الانتهاء مطلوب",
  expiryInvalid: "أدخل تاريخ الانتهاء بصيغة الشهر/السنة",
  cvvRequired: "رقم CVV مطلوب",
  cvvInvalid: "أدخل رقم CVV صحيح",
}

const healthCareDetailsPageContent: Record<
  HealthCarePlanId,
  HealthCareDetailsPageContent
> = {
  family: {
    breadcrumbs: [
      { label: "الرئيسية", href: "/" },
      { label: "الرعاية الصحية", href: "/health-care" },
      { label: "رعاية عائلية" },
    ],
    summary: {
      icon: "family",
      title: "رعاية عائلية",
      description:
        "رعاية عائلية خاصة بالمهندس المتقدم واسرته لجميع النواحي الصحية",
      price: 1800,
      currency: "جنيه",
    },
    contact,
    assignedEngineer,
    familyMembers: {
      title: "تفاصيل العائلة",
      memberLabel: "فرد العائلة",
      relationLabel: "صلة القرابة",
      relationOptions: [
        { value: "wife", label: "الزوجة" },
        { value: "husband", label: "الزوج" },
        { value: "son", label: "الابن" },
        { value: "daughter", label: "الابنة" },
      ],
      nationalIdLabel: "الرقم القومي",
      nationalIdPlaceholder: "الرقم القومي",
      cardNamePlaceholder: "الاسم كامل في البطاقة",
      addMemberLabel: "اضافة مسافر اخر",
      removeMemberLabel: "حذف",
      initialCount: 1,
    },
    payment,
    validation,
  },
  individual: {
    breadcrumbs: [
      { label: "الرئيسية", href: "/" },
      { label: "الرعاية الصحية", href: "/health-care" },
      { label: "رعاية فردية" },
    ],
    summary: {
      icon: "individual",
      title: "رعاية فردية",
      description:
        "رعاية فردية خاصة بالمهندس المتقدم فقط لجميع النواحي الصحية",
      price: 1800,
      currency: "جنيه",
    },
    contact,
    assignedEngineer,
    familyMembers: {
      title: "تفاصيل العائلة",
      memberLabel: "فرد العائلة",
      relationLabel: "صلة القرابة",
      relationOptions: [
        { value: "wife", label: "الزوجة" },
        { value: "husband", label: "الزوج" },
        { value: "son", label: "الابن" },
        { value: "daughter", label: "الابنة" },
      ],
      nationalIdLabel: "الرقم القومي",
      nationalIdPlaceholder: "الرقم القومي",
      cardNamePlaceholder: "الاسم كامل في البطاقة",
      addMemberLabel: "اضافة مسافر اخر",
      removeMemberLabel: "حذف",
      initialCount: 0,
    },
    payment: { ...payment, totalPrice: 300 },
    validation,
  },
}

/**
 * Temporary adapter: falls back to the family plan for an unknown id until the
 * Directus queries land. Keep the `planId` argument so callers already pass it.
 */
export function getHealthCareDetailsPageContent(
  planId: string
): HealthCareDetailsPageContent {
  return (
    healthCareDetailsPageContent[planId as HealthCarePlanId] ??
    healthCareDetailsPageContent.family
  )
}
