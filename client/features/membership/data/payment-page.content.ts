import type { PaymentPageContent } from "../types/membership-content.types"

export const paymentPageContent: PaymentPageContent = {
  breadcrumbs: [
    { label: "الرئيسية", href: "/" },
    { label: "تجديد الاشتراك", href: "/membership/renewal" },
    { label: "الدفع" },
  ],
  title: "الاشتراك",
  subtitle: "جدد اشتراكك الان",
  selectedPackageLabel: "الباقة المختارة",
  methodsLabel: "اختر طريقة الدفع",
  paymentMethods: [
    { id: "card", label: "الدفع بالبطاقة" },
    { id: "fawry", label: "الدفع بفوري" },
    { id: "paytabs", label: "الدفع بباي تاب" },
  ],
  form: {
    cardNameLabel: "اسم البطاقة",
    cardNamePlaceholder: "أضف اسم البطاقة",
    cardNumberLabel: "رقم البطاقة",
    cardNumberPlaceholder: "أضف رقم البطاقة",
    cvvLabel: "رقم CVV",
    cvvPlaceholder: "أضف رقم CVV",
    expiryLabel: "تاريخ الانتهاء",
    expiryPlaceholder: "الشهر/السنة",
    submitLabel: "ادفع الآن",
    validation: {
      cardNameRequired: "اسم البطاقة مطلوب",
      cardNumberRequired: "رقم البطاقة مطلوب",
      cardNumberInvalid: "أدخل رقم بطاقة صحيح مكون من 16 رقم",
      cvvRequired: "رقم CVV مطلوب",
      cvvInvalid: "أدخل رقم CVV صحيح",
      expiryRequired: "تاريخ الانتهاء مطلوب",
      expiryInvalid: "أدخل تاريخ الانتهاء بصيغة الشهر/السنة",
    },
  },
}
