import { notFound } from "next/navigation"

import type { Trip } from "../types/trips-content.types"
import type {
  TripDetailsPageContent,
  TripDetailsSummary,
} from "../types/trip-details-content.types"
import { tripsPageContent } from "./trips-page.content"

const sharedTripDetails = {
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
    title: "تفاصيل المستخدمين",
    travelerLabel: "المستخدم",
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
    addTravelerLabel: "اضافة مستخدم اخر",
    removeTravelerLabel: "حذف",
    initialCount: 2,
  },
  payment: {
    title: "الدفع",
    subtitle: "احجز رحلتك الان",
    totalLabel: "السعر الاجمالي",
    currency: "جنيه",
    methodsLabel: "اختر طريقة الدفع",
    paymentMethods: [
      { id: "card" as const, label: "الدفع بالبطاقة" },
      { id: "fawry" as const, label: "الدفع بفوري" },
      { id: "paytabs" as const, label: "الدفع بباي تاب" },
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

function describeTrip(trip: Trip) {
  const perks = trip.features.join("، ")

  return `${trip.title} لأعضاء نقابة المهندسين. تشمل الرحلة ${perks}، وتتجه إلى ${trip.destination} لمدة ${trip.durationLabel}.`
}

function summaryForTrip(trip: Trip): TripDetailsSummary {
  return {
    title: trip.title,
    description: describeTrip(trip),
    features: trip.features,
    price: trip.price,
    priceUnitLabel: tripsPageContent.priceUnitLabel,
    durationLabel: trip.durationLabel,
    seatsLabel: trip.seatsLabel,
    departureDate: trip.departureDate,
    destination: trip.destination,
    image: trip.image,
  }
}

function summaryForHajjLottery(): TripDetailsSummary {
  const { promo } = tripsPageContent

  return {
    title: promo.title,
    description: promo.description,
    features: ["التأشيرة", "الإقامة", "التنقلات", "الإشراف الطبي"],
    price: null,
    priceUnitLabel: tripsPageContent.priceUnitLabel,
    durationLabel: "حسب البرنامج",
    seatsLabel: "حسب القرعة",
    departureDate: "حسب إعلان النتيجة",
    destination: "مكة المكرمة",
    image: promo.image,
  }
}

/**
 * Temporary adapter until Directus queries land. Each listing trip, and the Hajj
 * lottery promo, resolves to its own title and details.
 */
export function getTripDetailsPageContent(
  tripId: string
): TripDetailsPageContent {
  const trip = tripsPageContent.trips.find((item) => item.id === tripId)
  const summary = trip
    ? summaryForTrip(trip)
    : tripId === "hajj-lottery"
      ? summaryForHajjLottery()
      : null

  if (!summary) {
    notFound()
  }

  return {
    ...sharedTripDetails,
    breadcrumbs: [
      { label: "الرئيسية", href: "/" },
      { label: "الرحلات", href: "/trips" },
      { label: summary.title },
    ],
    summary,
    payment: {
      ...sharedTripDetails.payment,
      totalPrice: summary.price,
    },
  }
}
