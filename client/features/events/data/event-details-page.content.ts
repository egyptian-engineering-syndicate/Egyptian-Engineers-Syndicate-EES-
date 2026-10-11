import { notFound } from "next/navigation"

import type { EventDetailsPageContent } from "../types/events-content.types"
import { eventsPageContent } from "./events-page.content"

const brief =
  "الدرعية، 10 يوليو 2024م: أعلنت شركة الدرعية اليوم، عن توقيع عقد ضخم مع شركة السيف مهندسون مقاولون (ESEC) إحدى الشركات الكبرى في مجال الهندسة والبناء في الشرق الأوسط وبالشراكة مع الشركة الصينية العامة للهندسة المعمارية (CSCEC) والتي تُعد أكبر شركة إنشاءات في العالم، لتنفيذ مشروع أعمال بناء وتشييد واسعة النطاق في المنطقة الشمالية من الدرعية."

export function getEventDetailsPageContent(
  eventId: string
): EventDetailsPageContent {
  const event = eventsPageContent.events.find((item) => item.id === eventId)

  if (!event) {
    notFound()
  }

  return {
    breadcrumbs: [
      { label: "الرئيسية", href: "/" },
      { label: "الفعاليات", href: "/events" },
      { label: event.title },
    ],
    title: event.title,
    date: event.date,
    paragraphs: [
      `${brief} وتتضمن تفاصيل المشروع، الذي يعد أضخم العقود الإنشائية الممنوحة حتى الآن في تاريخ تطوير الدرعية بقيمة تتجاوز 7.8 مليار ريال (2 مليار دولار).`,
      event.excerpt,
    ],
    image: event.image,
  }
}
