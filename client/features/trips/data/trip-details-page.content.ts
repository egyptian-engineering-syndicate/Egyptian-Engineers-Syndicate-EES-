import type { TripDetailsPageContent } from "../types/trip-details-content.types"

const tripDetailsPageContent: TripDetailsPageContent = {
  breadcrumbs: [
    { label: "الرئيسية", href: "/" },
    { label: "الرحلات", href: "/trips" },
    { label: "تفاصيل الرحلة" },
  ],
  summary: {
    title: "رحلة إسطنبول الساحرة",
    description:
      "رحلة الحج الميسرة مصممة لتمنح الحاج تجربة روحانية فريدة بأقصى درجات الراحة. تشمل الإقامة في فنادق 5 نجوم على بُعد خطوات من الحرم المكي الشريف والمسجد النبوي، مع مرشد ديني متخصص يرافق الحجاج طوال فترة الرحلة.",
    features: ["التنقلات", "فندق 3 نجوم", "تذاكر الطيران"],
    price: 1800,
    priceUnitLabel: "جنيه / فرد",
    durationLabel: "8 أيام",
    seatsLabel: "35 مقعد متاح",
    departureDate: "10 سبتمبر 2025",
    destination: "إسطنبول، تركيا",
    image: {
      src: "/images/trips/istanbul.jpg",
      alt: "إطلالة على برج غلطة ومضيق البوسفور في إسطنبول",
    },
  },
  cancellationPolicy: {
    title: "سياسة الإلغاء",
    description:
      "النظر إلى سوق العقارات النابض بالحياة والفرص العديدة في هذا القطاع في مصر ومنطقة الخليج يدفعنا لاغتنام الفرصة تأمين خطة توسع ملحوظة لأنفسنا في مجال العقارات",
    feeLabel: "رسوم الإلغاء: 3000 جنية",
  },
  contact: {
    title: "تفاصيل التواصل",
    phoneLabel: "رقم الهاتف",
    phonePlaceholder: "رقم الهاتف",
    emailLabel: "البريد الالكتروني",
    emailPlaceholder: "البريد الالكتروني",
  },
  travelers: {
    title: "تفاصيل المسافرين",
    travelerLabel: "المسافر",
    titleLabel: "اللقب",
    titleOptions: [
      { value: "mr", label: "السيد" },
      { value: "mrs", label: "السيدة" },
    ],
    firstNameLabel: "الاسم الاول",
    firstNamePlaceholder: "الاسم الأول",
    fatherNameLabel: "اسم الاب",
    fatherNamePlaceholder: "اسم الاب",
    familyNameLabel: "اسم العائلة",
    familyNamePlaceholder: "اسم العائلة",
    addTravelerLabel: "اضافة مسافر اخر",
    removeTravelerLabel: "حذف",
    initialCount: 2,
  },
  payment: {
    title: "الدفع",
    subtitle: "احجز رحلتك الان",
    totalLabel: "السعر الاجمالي",
    totalPrice: 24000,
    currency: "جنيه",
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
      expiryLabel: "تاريخ الانتهاء",
      expiryPlaceholder: "الشهر/السنة",
      cvvLabel: "رقم CVV",
      cvvPlaceholder: "أضف رقم CVV",
      submitLabel: "احجز الان",
    },
  },
  validation: {
    phoneRequired: "رقم الهاتف مطلوب",
    phoneInvalid: "أدخل رقم هاتف صحيح",
    emailRequired: "البريد الالكتروني مطلوب",
    emailInvalid: "أدخل بريد الكتروني صحيح",
    firstNameRequired: "الاسم الأول مطلوب",
    fatherNameRequired: "اسم الاب مطلوب",
    familyNameRequired: "اسم العائلة مطلوب",
    cardNameRequired: "اسم البطاقة مطلوب",
    cardNumberRequired: "رقم البطاقة مطلوب",
    cardNumberInvalid: "أدخل رقم بطاقة صحيح مكون من 16 رقم",
    expiryRequired: "تاريخ الانتهاء مطلوب",
    expiryInvalid: "أدخل تاريخ الانتهاء بصيغة الشهر/السنة",
    cvvRequired: "رقم CVV مطلوب",
    cvvInvalid: "أدخل رقم CVV صحيح",
  },
}

/**
 * Temporary adapter: every trip resolves to the same hardcoded details until the
 * Directus queries land. Keep the `tripId` argument so callers already pass it.
 */
export function getTripDetailsPageContent(
  tripId: string
): TripDetailsPageContent {
  void tripId

  return tripDetailsPageContent
}
