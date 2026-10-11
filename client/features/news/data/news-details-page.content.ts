import { notFound } from "next/navigation"

import type { NewsDetailsPageContent } from "../types/news-content.types"
import { newsPageContent } from "./news-page.content"

const body = [
  {
    marker: "1",
    text: "تعمل النقابة على تنظيم ممارسة المهنة وضبط العلاقة بين المهندس وجهات التعاقد، بما يحفظ حقوق الأعضاء ويرفع مستوى الخدمة الهندسية.",
  },
  {
    marker: "2",
    text: "تشمل اللائحة قواعد القيد والتجديد والاشتراكات، ومتطلبات الوثائق المعتمدة لمزاولة الأعمال الهندسية داخل نطاق النقابة.",
  },
  {
    marker: "3",
    text: "تحدد اللائحة التزامات المكاتب الاستشارية والمقاولين تجاه معايير السلامة والجودة والتوثيق الفني للمشروعات.",
  },
  {
    marker: "4",
    text: "تتضمن موادًا خاصة بالمساءلة المهنية والنظر في الشكاوى المقدمة من الأعضاء أو من الجهات المتعاقدة معهم.",
  },
  {
    marker: "5",
    text: "توضح اللائحة آليات التعاون مع الجامعات والجهات الحكومية لتحديث الأكواد ومواءمة مخرجات التعليم مع سوق العمل.",
  },
  {
    marker: "6",
    text: "تسري أحكام هذه اللائحة على المهندسين المقيدين بالنقابة، ويُعمل بها من تاريخ اعتمادها ونشرها للأعضاء.",
  },
]

export function getNewsDetailsPageContent(
  articleId: string
): NewsDetailsPageContent {
  const article = newsPageContent.articles.find((item) => item.id === articleId)

  if (!article) {
    notFound()
  }

  const related = newsPageContent.articles
    .filter((item) => item.id !== article.id)
    .slice(0, 4)

  return {
    breadcrumbs: [
      { label: "الرئيسية", href: "/" },
      { label: "آخر الأخبار", href: "/news" },
      { label: `${article.title} 2025` },
    ],
    title: `${article.title} 2025`,
    date: article.date,
    paragraphs: body,
    image: article.image,
    relatedTitle: "آخر ذات صلة",
    related,
  }
}
