import { notFound } from "next/navigation"

import type { ClubDetailsPageContent } from "../types/clubs-content.types"
import { clubsPageContent } from "./clubs-page.content"

const sportDescription =
  "المذكرة الإيضاحية هي مذكرة مختصرة للقانون لعرضها من وكيل مجلس الشعب لأخذ الموافقة عليها من رئيس السلطة التنفيذية ..."

const culturalActivities = [
  {
    id: "art-workshops",
    title: "ورش العمل الفنية",
    description:
      "توفر ورش العمل الفنية فرصة ملائمة لتعزيز المهارات الإبداعية، حيث يتم تنظيمها في مختلف المجالات مثل الرسم والنحت والتصوير.",
  },
  {
    id: "cultural-festivals",
    title: "المهرجانات الثقافية",
    description:
      "تجمع المهرجانات الثقافية بين الفنون المختلفة، حيث تعرض الأعمال الفنية والموسيقية وتقدم عروضاً حية تجمع التراث والثقافة الحديثة.",
  },
  {
    id: "literary-events",
    title: "الفعاليات الأدبية",
    description:
      "تشمل الفعاليات الأدبية قراءات شعرية وندوات ثقافية وعروض كتب، مما يعزز من التواصل بين الكتاب والقراء.",
  },
  {
    id: "theatre",
    title: "العروض المسرحية",
    description:
      "تعتبر العروض المسرحية من الفنون التعبيرية الأساسية، حيث يتم تناول مواضيع اجتماعية وثقافية من خلال الأداء الحي.",
  },
  {
    id: "art-exhibitions",
    title: "المعارض الفنية",
    description:
      "تعد المعارض الفنية منصات لعرض الأعمال الحقيقية من فنانين محليين ودوليين، مما يسهم في إثراء المشهد الثقافي.",
  },
]

const sportsActivities = [
  { id: "football-1", title: "كرة القدم", description: sportDescription },
  { id: "football-2", title: "كرة القدم", description: sportDescription },
  { id: "football-3", title: "كرة القدم", description: sportDescription },
  { id: "football-4", title: "كرة القدم", description: sportDescription },
]

export function getClubDetailsPageContent(
  clubId: string
): ClubDetailsPageContent {
  const club = clubsPageContent.clubs.find((item) => item.id === clubId)

  if (!club) {
    notFound()
  }

  return {
    breadcrumbs: [
      { label: "الرئيسية", href: "/" },
      { label: "أندية النقابة", href: "/clubs" },
      { label: club.title },
    ],
    title: club.title,
    intro: clubsPageContent.intro,
    introImage: club.image,
    cultural: {
      title: "النشاط الثقافي",
      image: {
        src: "/images/clubs/cultural.jpg",
        alt: "نشاط ثقافي داخل النادي",
      },
      activities: culturalActivities,
    },
    sports: {
      title: "النشاط الرياضي",
      description: sportDescription,
      activities: sportsActivities,
    },
  }
}
