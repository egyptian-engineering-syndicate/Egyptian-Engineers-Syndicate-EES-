import type { NewsArticle, NewsPageContent } from "../types/news-content.types"

const excerpt =
  "المذكرة الإيضاحية هي مذكرة مختصرة للقانون لعرضها من وكيل مجلس الشعب لأخذ الموافقة عليها من رئيس السلطة التنفيذية ..."

const images = [
  {
    src: "/images/login-construction.jpg",
    alt: "مهندسون في موقع عمل",
  },
  {
    src: "/images/clubs/cultural.jpg",
    alt: "اجتماع مهني داخل النقابة",
  },
  {
    src: "/images/committees/committee-building.jpg",
    alt: "مقر النقابة",
  },
  {
    src: "/images/trips/luxor.jpg",
    alt: "أعمال هندسية ومشروعات",
  },
]

function article(index: number): NewsArticle {
  const image = images[index % images.length]

  return {
    id: `practice-bylaw-${index + 1}`,
    title: "لائحة ممارسة المهنة لنقابة المهندسين",
    excerpt,
    date: "24 من أغسطس 2026",
    detailsHref: `/news/practice-bylaw-${index + 1}`,
    image,
  }
}

export const newsPageContent: NewsPageContent = {
  breadcrumbs: [{ label: "الرئيسية", href: "/" }, { label: "آخر الأخبار" }],
  title: "آخر الأخبار",
  searchLabel: "البحث في الأخبار",
  searchPlaceholder: "بحث",
  detailsLabel: "تعرف على المزيد",
  loadMoreLabel: "شاهد المزيد",
  noResultsMessage: "لا توجد أخبار مطابقة لبحثك.",
  articles: Array.from({ length: 20 }, (_, index) => article(index)),
}
