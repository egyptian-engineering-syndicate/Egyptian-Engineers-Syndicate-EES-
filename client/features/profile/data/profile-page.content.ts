import type { ProfilePageContent } from "../types/profile-content.types"

const umrahBooking = {
  category: "trip" as const,
  title: "عمرة الأسرة الاقتصادية",
  destination: "مكة المكرمة",
  departureDate: "15 أغسطس 2025",
  durationLabel: "7 أيام",
  travelersLabel: "4 أفراد",
  price: 1800,
  detailsHref: "/profile/bookings/umrah-family-economy",
  image: {
    src: "/images/trips/mecca.jpg",
    alt: "الكعبة المشرفة وأبراج البيت في مكة المكرمة",
  },
}

export const profilePageContent: ProfilePageContent = {
  breadcrumbs: [{ label: "الرئيسية", href: "/" }, { label: "الملف الشخصي" }],
  member: {
    nameLabel: "اسم العضو",
    name: "م.محمد عمرو خليفة",
    expiryLabel: "انتهاء",
    expiryDate: "2024 / 12 / 31",
    membershipNumberLabel: "رقم القيد",
    membershipNumber: "2232321",
    specialization: "هندسة مدنية",
  },
  editLabel: "تعديل الملف",
  logoutLabel: "تسجيل الخروج",
  logoutHref: "/login",
  editForm: {
    title: "تعديل الملف",
    description:
      "سيتم خصم المبلغ الملحق عن تذكرة الحجز واسترداد ما تبقى من التكلفة",
    emailLabel: "البريد الإلكتروني",
    emailPlaceholder: "أضف بريدك الإلكتروني",
    nameLabel: "الاسم",
    namePlaceholder: "أضف الاسم",
    phoneLabel: "رقم الهاتف",
    phonePlaceholder: "أضف رقم الهاتف",
    passwordTitle: "تعديل كلمة السر",
    newPasswordLabel: "كلمة السر الجديدة",
    newPasswordPlaceholder: "أضف كلمة السر الجديدة",
    currentPasswordLabel: "كلمة السر الحالية",
    currentPasswordPlaceholder: "أضف كلمة السر الجديدة",
    submitLabel: "تعديل",
    cancelLabel: "إلغاء",
    validation: {
      emailRequired: "البريد الإلكتروني مطلوب",
      emailInvalid: "أدخل بريدًا إلكترونيًا صحيحًا",
      nameRequired: "الاسم مطلوب",
      phoneRequired: "رقم الهاتف مطلوب",
      phoneInvalid: "أدخل رقم هاتف صحيح",
      newPasswordRequired: "كلمة السر الجديدة مطلوبة",
      newPasswordTooShort: "كلمة السر يجب ألا تقل عن 6 أحرف",
      currentPasswordRequired: "كلمة السر الحالية مطلوبة",
    },
  },
  subscriptionsTitle: "اشتراكاتي",
  subscriptions: [
    {
      id: "syndicate",
      label: "اشتراك النقابة",
      href: "/profile/subscriptions/syndicate",
      expiryDate: "2024 / 12 / 31",
    },
    {
      id: "pension",
      label: "معاش التقاعد",
      href: "/profile/subscriptions/pension",
      expiryDate: "2024 / 12 / 31",
    },
    {
      id: "health-care",
      label: "الرعاية الصحية",
      href: "/profile/subscriptions/health-care",
      expiryDate: "2024 / 12 / 31",
    },
  ],
  bookingsTitle: "حجوزاتي",
  bookingTabs: [
    { id: "trip", label: "الرحلات" },
    { id: "training", label: "التدريب" },
  ],
  bookings: [
    { id: "umrah-family-economy", ...umrahBooking },
    { id: "umrah-family-economy-2", ...umrahBooking },
  ],
  bookingDetailsLabel: "اعرض التفاصيل",
  priceUnitLabel: "جنيه",
  emptyBookingsLabel: "لا توجد حجوزات في هذا القسم.",
}
