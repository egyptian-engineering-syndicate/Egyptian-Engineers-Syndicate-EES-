import type { ProfilePageContent } from "../types/profile-content.types"

const umrahBooking = {
  title: "عمرة الأسرة الاقتصادية",
  destination: "مكة المكرمة",
  departureDate: "15 أغسطس 2025",
  durationLabel: "7 أيام",
  travelersLabel: "40 افراد",
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
    expiryDate: "31 / 12 / 2024",
    membershipNumberLabel: "رقم القيد",
    membershipNumber: "2232321",
    specialization: "هندسة مدنية",
  },
  subscriptionsTitle: "اشتراكاتي",
  subscriptions: [
    {
      id: "syndicate",
      label: "اشتراك النقابة",
      href: "/profile/subscriptions/syndicate",
    },
    {
      id: "pension",
      label: "معاش التقاعد",
      href: "/profile/subscriptions/pension",
    },
    {
      id: "health-care",
      label: "الرعاية الصحية",
      href: "/profile/subscriptions/health-care",
    },
  ],
  bookingsTitle: "حجوزاتي",
  bookings: [
    { id: "umrah-family-economy", ...umrahBooking },
    { id: "umrah-family-economy-2", ...umrahBooking },
  ],
  bookingDetailsLabel: "اعرض التفاصيل",
  priceUnitLabel: "جنيه",
}
