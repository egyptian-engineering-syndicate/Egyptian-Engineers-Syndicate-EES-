import type {
  Course,
  CourseImage,
  TrainingPageContent,
} from "../types/training-content.types"

/**
 * One shared stand-in photo until the course images come from Directus assets —
 * see `public/images/README.md`.
 */
const placeholderImage: CourseImage = {
  src: "/images/login-construction.jpg",
  alt: "عمال يصبون الخرسانة في موقع إنشاءات",
}

const beginner = "مبتدئ"
const intermediate = "متوسط"
const advanced = "متقدم"

const courses: Course[] = [
  {
    id: "civil-engineering-basics",
    title: "أساسيات الهندسة المدنية",
    level: beginner,
    durationLabel: "40 ساعة",
    seatsLabel: "25 مقعد",
    price: 1200,
    subscribeHref: "/training/civil-engineering-basics",
    image: placeholderImage,
  },
  {
    id: "reinforced-concrete-design",
    title: "تصميم الخرسانة المسلحة",
    level: advanced,
    durationLabel: "60 ساعة",
    seatsLabel: "20 مقعد",
    price: 2400,
    subscribeHref: "/training/reinforced-concrete-design",
    image: placeholderImage,
  },
  {
    id: "engineering-project-management",
    title: "إدارة المشروعات الهندسية",
    level: intermediate,
    durationLabel: "48 ساعة",
    seatsLabel: "30 مقعد",
    price: 3500,
    subscribeHref: "/training/engineering-project-management",
    image: placeholderImage,
  },
  {
    id: "autocad-engineering-drawing",
    title: "الرسم الهندسي باستخدام أوتوكاد",
    level: beginner,
    durationLabel: "36 ساعة",
    seatsLabel: "40 مقعد",
    price: 900,
    subscribeHref: "/training/autocad-engineering-drawing",
    image: placeholderImage,
  },
  {
    id: "bim-revit-modeling",
    title: "نمذجة معلومات البناء بريفيت",
    level: intermediate,
    durationLabel: "45 ساعة",
    seatsLabel: "25 مقعد",
    price: 2800,
    subscribeHref: "/training/bim-revit-modeling",
    image: placeholderImage,
  },
  {
    id: "building-electrical-networks",
    title: "تصميم شبكات الكهرباء بالمباني",
    level: intermediate,
    durationLabel: "42 ساعة",
    seatsLabel: "22 مقعد",
    price: 1900,
    subscribeHref: "/training/building-electrical-networks",
    image: placeholderImage,
  },
  {
    id: "hvac-systems",
    title: "أنظمة التكييف والتهوية",
    level: intermediate,
    durationLabel: "50 ساعة",
    seatsLabel: "18 مقعد",
    price: 2600,
    subscribeHref: "/training/hvac-systems",
    image: placeholderImage,
  },
  {
    id: "site-safety-management",
    title: "السلامة والصحة المهنية بمواقع الإنشاءات",
    level: beginner,
    durationLabel: "24 ساعة",
    seatsLabel: "35 مقعد",
    price: 750,
    subscribeHref: "/training/site-safety-management",
    image: placeholderImage,
  },
  {
    id: "quantity-surveying",
    title: "حصر الكميات وإعداد المقايسات",
    level: intermediate,
    durationLabel: "38 ساعة",
    seatsLabel: "28 مقعد",
    price: 1600,
    subscribeHref: "/training/quantity-surveying",
    image: placeholderImage,
  },
  {
    id: "plc-automation",
    title: "التحكم الآلي وأنظمة PLC",
    level: advanced,
    durationLabel: "55 ساعة",
    seatsLabel: "16 مقعد",
    price: 3200,
    subscribeHref: "/training/plc-automation",
    image: placeholderImage,
  },
  {
    id: "water-sanitation-networks",
    title: "تصميم شبكات المياه والصرف الصحي",
    level: intermediate,
    durationLabel: "44 ساعة",
    seatsLabel: "20 مقعد",
    price: 2100,
    subscribeHref: "/training/water-sanitation-networks",
    image: placeholderImage,
  },
  {
    id: "technical-report-writing",
    title: "مهارات إعداد التقارير الفنية",
    level: beginner,
    durationLabel: "20 ساعة",
    seatsLabel: "45 مقعد",
    price: 600,
    subscribeHref: "/training/technical-report-writing",
    image: placeholderImage,
  },
]

export const trainingPageContent: TrainingPageContent = {
  breadcrumbs: [{ label: "الرئيسية", href: "/" }, { label: "قسم التدريب" }],
  title: "قسم التدريب",
  description: "دورات تدريبية متخصصة للمهندسين لتطوير مهاراتهم المهنية",
  searchLabel: "البحث عن دورة",
  searchPlaceholder: "ابحث عن دورة",
  noResultsMessage: "لا توجد دورات مطابقة لبحثك.",
  loadMoreLabel: "شاهد المزيد",
  subscribeLabel: "اشترك الان",
  priceUnitLabel: "جنيه",
  courses,
}
