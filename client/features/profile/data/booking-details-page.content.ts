import type { BookingDetailsPageContent } from "../types/booking-details-content.types"

const traveler = {
  firstName: "السيد/محمد",
  fatherName: "عبدالقادر",
  familyName: "النجار",
}

const bookingDetailsPageContent: BookingDetailsPageContent = {
  breadcrumbs: [
    { label: "الرئيسية", href: "/" },
    { label: "الرحلات", href: "/trips" },
    { label: "تفاصيل الرحلة" },
  ],
  summary: {
    title: "عمرة الأسرة الاقتصادية",
    description:
      "رحلة الحج الميسرة مصممة لتمنح الحاج تجربة روحانية فريدة بأقصى درجات الراحة. تشمل الإقامة في فنادق 5 نجوم على بُعد خطوات من الحرم المكي الشريف والمسجد النبوي، مع مرشد ديني متخصص يرافق الحجاج طوال فترة الرحلة.",
    price: 1800,
    priceUnitLabel: "جنيه / فرد",
    durationLabel: "7 أيام",
    travelersLabel: "40 افراد",
    departureDate: "10 سبتمبر 2025",
    destination: "مكة المكرمة",
    image: {
      src: "/images/trips/mecca-haram.jpg",
      alt: "الحرم المكي الشريف وأبراج البيت في مكة المكرمة",
    },
  },
  contact: {
    title: "تفاصيل التواصل",
    emailLabel: "البريد الالكتروني",
    email: "mohammedalnagar00317@gmail.com",
    phoneLabel: "رقم الهاتف",
    phone: "01069407053",
  },
  travelers: {
    title: "تفاصيل المستخدمين",
    travelerLabel: "المستخدم",
    firstNameLabel: "الاسم الاول",
    fatherNameLabel: "اسم الاب",
    familyNameLabel: "اسم العائلة",
    cancelTravelerLabel: "الغاء الحجز",
    travelers: [
      { id: "traveler-1", ...traveler },
      { id: "traveler-2", ...traveler },
    ],
  },
  cancellation: {
    title: "سياسة الإلغاء",
    description:
      "النظر إلى سوق العقارات النابض بالحياة والفرص العديدة في هذا القطاع في مصر ومنطقة الخليج يدفعنا لاغتنام الفرصة تأمين خطة توسع ملحوظة لأنفسنا في مجال العقارات",
    cancelBookingLabel: "الغاء الرحلة",
    feeLabel: "رسوم الإلغاء: 3000 جنية",
    dialog: {
      title: "الغاء الحجز",
      feeLabel: "رسوم الإلغاء: 3000 جنية للفرد",
      description:
        "سيتم خصم المبلغ الملحق عن تذكرة الحجز واسترداد ما تبقى من التكلفة",
      bankAccountLabel: "رقم الحساب البنكي",
      bankAccountPlaceholder: "رقم الحساب البنكي",
      bankNameLabel: "اسم البنك",
      bankNamePlaceholder: "اسم البنك",
      backLabel: "الرجوع",
      confirmCancelLabel: "الغاء الرحلة",
      closeLabel: "إغلاق",
      validation: {
        bankAccountRequired: "رقم الحساب البنكي مطلوب",
        bankNameRequired: "اسم البنك مطلوب",
      },
    },
  },
}

/**
 * Temporary adapter: every booking resolves to the same hardcoded details until
 * the Directus queries land. Keep the `bookingId` argument so callers already
 * pass it.
 */
export function getBookingDetailsPageContent(
  bookingId: string
): BookingDetailsPageContent {
  void bookingId

  return bookingDetailsPageContent
}
