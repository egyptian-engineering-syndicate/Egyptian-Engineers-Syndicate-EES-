import type {
  Committee,
  CommitteesPageContent,
} from "../types/committees-content.types"

const memo =
  "المذكرة الإيضاحية هي مذكرة مختصرة للقانون لعرضها من وكيل مجلس الشعب لأخذ الموافقة عليها من رئيس السلطة التنفيذية."

function committee(id: string, title: string, description: string): Committee {
  return {
    id,
    title,
    description,
    detailsHref: `/committees/${id}`,
  }
}

export const committeesPageContent: CommitteesPageContent = {
  breadcrumbs: [{ label: "الرئيسية", href: "/" }, { label: "اللجان" }],
  title: "اللجان",
  loadMoreLabel: "شاهد المزيد",
  detailsLabel: "تعرف على المزيد",
  committees: [
    committee(
      "training-and-employment",
      "لجنة التدريب والتوظيف",
      "تركز هذه اللجنة على تحسين معايير البناء والتنفيذ وتعزيز السلامة في المشاريع الهندسية."
    ),
    committee(
      "public-relations",
      "لجنة العلاقات العامة",
      "تهدف اللجنة إلى تحقيق التوازن بين التنمية الاقتصادية وحماية البيئة، وتعمل على توعية الوعي البيئي بين المهندسين."
    ),
    committee(
      "women",
      "لجنة المرأة",
      "تسعى هذه اللجنة لتشجيع المشاريع المبتكرة ودعم البحث العلمي في مجالات التكنولوجيا الحديثة."
    ),
    committee(
      "premises-and-clubs",
      "لجنة تطوير المقرات والأندية",
      memo
    ),
    committee(
      "syndicate-services",
      "لجنة الخدمات النقابية",
      memo
    ),
    committee(
      "ict",
      "لجنة الاتصالات وتكنولوجيا المعلومات",
      "تعمل على تعزيز الابتكار في التصميم المعماري وتطبيق ممارسات الاستدامة في العمارة."
    ),
    committee(
      "engineering-education",
      "لجنة التعليم الهندسي",
      "تتابع اللجنة تطوير مناهج كليات الهندسة ومعاهدها، وتنسق مع الجامعات لمواءمة مخرجات التعليم مع احتياجات سوق العمل."
    ),
    committee(
      "young-engineers",
      "لجنة الشباب",
      "تعنى اللجنة بالمهندسين حديثي التخرج من خلال برامج الإرشاد المهني وفرص التدريب الميداني."
    ),
    committee(
      "environment-and-energy",
      "لجنة البيئة والطاقة",
      "تدرس اللجنة أثر المشروعات الهندسية على البيئة، وتعد الرؤى الفنية الخاصة بكفاءة الطاقة ومصادرها المتجددة."
    ),
  ],
}
