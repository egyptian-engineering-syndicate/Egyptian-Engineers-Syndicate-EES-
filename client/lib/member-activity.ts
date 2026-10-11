export type MemberActivityCategory =
  | "trip"
  | "training"
  | "health-care"
  | "membership"
  | "practice"
  | "pension"

export interface MemberActivity {
  id: string
  category: MemberActivityCategory
  categoryLabel: string
  title: string
  price: number
  paidAt: string
  image: {
    src: string
    alt: string
  }
}

const ACTIVITIES_KEY = "ees-member-activities"
const LAST_PAYMENT_KEY = "ees-last-payment"

const categoryImages: Record<MemberActivityCategory, MemberActivity["image"]> = {
  trip: {
    src: "/images/trips/istanbul.jpg",
    alt: "رحلة",
  },
  training: {
    src: "/images/login-construction.jpg",
    alt: "دورة تدريبية",
  },
  "health-care": {
    src: "/images/login-construction.jpg",
    alt: "رعاية صحية",
  },
  membership: {
    src: "/images/login-construction.jpg",
    alt: "تجديد اشتراك",
  },
  practice: {
    src: "/images/committees/committee-building.jpg",
    alt: "مزاولة المهنة",
  },
  pension: {
    src: "/images/committees/committee-building.jpg",
    alt: "معاش",
  },
}

export const categoryLabels: Record<MemberActivityCategory, string> = {
  trip: "رحلة",
  training: "تدريب",
  "health-care": "رعاية صحية",
  membership: "اشتراك",
  practice: "مزاولة المهنة",
  pension: "معاش",
}

function canUseStorage() {
  return typeof window !== "undefined"
}

function readJson<T>(key: string, fallback: T): T {
  if (!canUseStorage()) return fallback

  try {
    const raw = window.localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch {
    return fallback
  }
}

export function readMemberActivities(): MemberActivity[] {
  return readJson<MemberActivity[]>(ACTIVITIES_KEY, [])
}

export function readLastPayment(): MemberActivity | null {
  if (!canUseStorage()) return null

  try {
    const raw = window.sessionStorage.getItem(LAST_PAYMENT_KEY)
    return raw ? (JSON.parse(raw) as MemberActivity) : null
  } catch {
    return null
  }
}

export function recordMemberPayment(
  input: Omit<MemberActivity, "id" | "paidAt" | "categoryLabel" | "image"> & {
    image?: MemberActivity["image"]
  }
): MemberActivity {
  const activity: MemberActivity = {
    id: crypto.randomUUID(),
    paidAt: new Date().toISOString(),
    categoryLabel: categoryLabels[input.category],
    image: input.image ?? categoryImages[input.category],
    category: input.category,
    title: input.title,
    price: input.price,
  }

  const next = [activity, ...readMemberActivities()]
  window.localStorage.setItem(ACTIVITIES_KEY, JSON.stringify(next))
  window.sessionStorage.setItem(LAST_PAYMENT_KEY, JSON.stringify(activity))

  return activity
}

export const paymentSuccessPath = "/payment/success"

export function formatPaidAt(isoDate: string) {
  return new Intl.DateTimeFormat("ar-EG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(isoDate))
}
