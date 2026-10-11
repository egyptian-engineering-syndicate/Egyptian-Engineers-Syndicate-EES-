import type {
  EventsPageContent,
  SyndicateEvent,
} from "../types/events-content.types"

const excerpt =
  "المذكرة الإيضاحية هي مذكرة مختصرة للقانون لعرضها من وكيل مجلس الشعب لأخذ الموافقة عليها من رئيس السلطة التنفيذية."

const image = {
  src: "/images/clubs/cultural.jpg",
  alt: "مهندسون خلال فعالية نقابية",
}

function event(id: string, title: string): SyndicateEvent {
  return {
    id,
    title,
    excerpt,
    date: "24 من أغسطس 2026",
    detailsHref: `/events/${id}`,
    image,
  }
}

export const eventsPageContent: EventsPageContent = {
  breadcrumbs: [{ label: "الرئيسية", href: "/" }, { label: "الفعاليات" }],
  title: "الفعاليات",
  featuredEyebrow: "آخر الفعاليات",
  featuredCtaLabel: "شاهد التفاصيل",
  allEventsTitle: "جميع الفعاليات",
  detailsLabel: "تعرف على المزيد",
  loadMoreLabel: "شاهد المزيد",
  events: [
    event("annual-celebration", "احتفالية النقابة السنوية"),
    event("annual-celebration-2", "احتفالية النقابة السنوية"),
    event("annual-celebration-3", "احتفالية النقابة السنوية"),
    event("annual-celebration-4", "احتفالية النقابة السنوية"),
    event("annual-celebration-5", "احتفالية النقابة السنوية"),
    event("annual-celebration-6", "احتفالية النقابة السنوية"),
  ],
}
