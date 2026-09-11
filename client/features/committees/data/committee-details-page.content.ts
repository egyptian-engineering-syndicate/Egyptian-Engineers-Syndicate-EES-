import type { CommitteeDetailsPageContent } from "../types/committees-content.types"

const brief =
  "الدرعية، 10 يوليو 2024م: أعلنت شركة الدرعية اليوم، عن توقيع عقد ضخم مع شركة السيف مهندسون مقاولون (ESEC) إحدى الشركات الكبرى في مجال الهندسة والبناء في الشرق الأوسط وبالشراكة مع الشركة الصينية العامة للهندسة المعمارية (CSEC) والتي تُعد أكبر شركة إنشاءات في العالم، لتنفيذ مشروع أعمال بناء وتشييد واسعة النطاق في المنطقة الشمالية من الدرعية."

const committeeDetailsPageContent: CommitteeDetailsPageContent = {
  breadcrumbs: [
    { label: "الرئيسية", href: "/" },
    { label: "اللجان", href: "/committees" },
    { label: "تفاصيل اللجان" },
  ],
  title: "لجنة التعليم الهندسي",
  paragraphs: [
    `${brief} وتتضمن تفاصيل المشروع، الذي يعد أضخم العقود الإنشائية الممنوحة حتى الآن في تاريخ تطوير الدرعية بقيمة تتجاوز 7.8 مليار ريال (2 مليار دولار)؛ بناء منطقة متعددة الاستخدامات، تضم مؤسسات تعليمية متقدمة ومواقع ثقافية ومكاتب حديثة وفندقاً فاخراً، على يد أمهر وأهم المطورين العقاريين من المملكة العربية السعودية والعالم، وذلك للمساهمة في إنجاز مشروع تطوير الدرعية الذي يمثل أهم وجهة تاريخية وثقافية في المملكة، وأحد أبرز مشاريع رؤية السعودية 2030.`,
    `${brief} وتتضمن تفاصيل المشروع.`,
  ],
  image: {
    src: "/images/committees/committee-building.jpg",
    alt: "مبنى إداري حديث بواجهة زجاجية",
  },
  membersTitle: "اعضاء اللجنة",
  members: [
    {
      id: "ahmed-ali",
      name: "أحمد علي",
      role: "الرئيس التنفيذي للتكنولوجيا",
      image: {
        src: "/images/committees/member-1.jpg",
        alt: "صورة شخصية لأحد أعضاء اللجنة",
      },
    },
    {
      id: "abdullah-masoud",
      name: "د. عبد الله مسعود",
      role: "مدير وحدة تقارير الامتثال",
      image: {
        src: "/images/committees/member-2.jpg",
        alt: "صورة شخصية لأحد أعضاء اللجنة",
      },
    },
    {
      id: "ahmed-ali-2",
      name: "أحمد علي",
      role: "الرئيس التنفيذي للتكنولوجيا",
      image: {
        src: "/images/committees/member-1.jpg",
        alt: "صورة شخصية لأحد أعضاء اللجنة",
      },
    },
    {
      id: "abdullah-masoud-2",
      name: "د. عبد الله مسعود",
      role: "مدير وحدة تقارير الامتثال",
      image: {
        src: "/images/committees/member-2.jpg",
        alt: "صورة شخصية لأحد أعضاء اللجنة",
      },
    },
    {
      id: "ahmed-ali-3",
      name: "أحمد علي",
      role: "الرئيس التنفيذي للتكنولوجيا",
      image: {
        src: "/images/committees/member-1.jpg",
        alt: "صورة شخصية لأحد أعضاء اللجنة",
      },
    },
    {
      id: "abdullah-masoud-3",
      name: "د. عبد الله مسعود",
      role: "مدير وحدة تقارير الامتثال",
      image: {
        src: "/images/committees/member-2.jpg",
        alt: "صورة شخصية لأحد أعضاء اللجنة",
      },
    },
  ],
}

/**
 * Temporary adapter: every committee resolves to the same hardcoded details until
 * the Directus queries land. Keep the `committeeId` argument so callers already pass it.
 */
export function getCommitteeDetailsPageContent(
  committeeId: string
): CommitteeDetailsPageContent {
  void committeeId

  return committeeDetailsPageContent
}
