import type { Club, ClubsPageContent } from "../types/clubs-content.types"

const excerpt =
  "المذكرة الإيضاحية هي مذكرة مختصرة للقانون لعرضها من وكيل مجلس الشعب لأخذ الموافقة عليها من رئيس السلطة التنفيذية ..."

const intro =
  "الدرعية، 10 يوليو 2024م: أعلنت شركة الدرعية اليوم، عن توقيع عقد ضخم مع شركة السيف مهندسون مقاولون (ESEC) إحدى الشركات الكبرى في مجال الهندسة والبناء في الشرق الأوسط وبالشراكة مع الشركة الصينية العامة للهندسة المعمارية (CSCEC) والتي تُعد أكبر شركة إنشاءات في العالم، لتنفيذ مشروع أعمال بناء وتشييد واسعة النطاق في المنطقة الشمالية من الدرعية. وتتضمن تفاصيل المشروع، الذي يعد أضخم العقود الإنشائية الممنوحة حتى الآن في تاريخ تطوير الدرعية بقيمة تتجاوز 7.8 مليار ريال (2 مليار دولار)؛ بناء منطقة متعددة الاستخدامات، تضم مؤسسات تعليمية متقدمة ومواقع ثقافية ومكاتب حديثة وفندقاً فاخراً، على يد أمهر وأهم المطورين العقاريين من المملكة العربية السعودية والعالم، وذلك للمساهمة في إنجاز مشروع تطوير الدرعية الذي يمثل أهم وجهة تاريخية وثقافية في المملكة، وأحد أبرز مشاريع رؤية السعودية 2030."

function club(
  id: string,
  title: string,
  imageSrc: string,
  imageAlt: string
): Club {
  return {
    id,
    title,
    description: excerpt,
    excerpt,
    detailsHref: `/clubs/${id}`,
    image: { src: imageSrc, alt: imageAlt },
  }
}

export const clubsPageContent: ClubsPageContent = {
  breadcrumbs: [{ label: "الرئيسية", href: "/" }, { label: "أندية النقابة" }],
  title: "أندية النقابة",
  intro,
  introImage: {
    src: "/images/clubs/volleyball.jpg",
    alt: "نشاط رياضي في أحد أندية النقابة",
  },
  clubsTitle: "أندية النقابة",
  detailsLabel: "تعرف على المزيد",
  clubs: [
    club(
      "new-cairo",
      "القاهرة الجديدة",
      "/images/clubs/golf-carts.jpg",
      "نادي القاهرة الجديدة"
    ),
    club(
      "abu-el-feda",
      "نادي أبو الفدا - الزمالك",
      "/images/clubs/golf.jpg",
      "نادي أبو الفدا بالزمالك"
    ),
    club(
      "helwan",
      "نادي حلوان",
      "/images/clubs/tennis.jpg",
      "نادي حلوان"
    ),
  ],
}
