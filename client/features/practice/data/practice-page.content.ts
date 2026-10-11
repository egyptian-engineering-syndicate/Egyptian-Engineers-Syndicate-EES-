import type { PracticePageContent } from "../types/practice-content.types"

const serviceImage = {
  src: "/images/committees/committee-building.jpg",
  alt: "مبنى هندسي حديث",
}

const serviceDescription =
  "المذكرة الإيضاحية هي مذكرة مختصرة للقانون لعرضها من وكيل مجلس الشعب لأخذ الموافقة عليها من رئيس السلطة التنفيذية، واللائحة هي قرار وزاري من وزير الري لعمل النظام الداخلي لنقابة المهندسين."

const introParagraph =
  "ابدأ رحلتك في عالم الهندسة المدنية من الصفر وتعرف على المبادئ الأساسية التي يقوم عليها تصميم وتنفيذ المشروعات الإنشائية. تمنحك هذه الدورة فهماً شاملاً لمجالات الهندسة المدنية المختلفة، بدايةً من التعرف على المواد الإنشائية وقراءة الرسومات الهندسية، وصولاً إلى أساسيات التنفيذ وإدارة مواقع العمل."

export const practicePageContent: PracticePageContent = {
  breadcrumbs: [{ label: "الرئيسية", href: "/" }, { label: "مزاولة المهنة" }],
  title: "مزاولة المهنة",
  paragraphs: [
    introParagraph,
    "سواء كنت طالبًا حديث التخرج أو ترغب في استكشاف مجال الهندسة المدنية، فستوفر لك هذه الدورة قاعدة معرفية قوية تساعدك على الانطلاق بثقة.",
  ],
  introImage: {
    src: "/images/login-construction.jpg",
    alt: "فريق هندسي داخل موقع عمل",
  },
  servicesTitle: "الخدمات",
  learnMoreLabel: "تعرف على المزيد",
  loadMoreLabel: "المزيد",
  services: [
    {
      id: "supervision-certificate",
      title: "شهادة الاشراف على التنفيذ",
      description: serviceDescription,
      href: "/practice/supervision-certificate",
      image: serviceImage,
    },
    {
      id: "complete-supervision",
      title: "اتمام الاشراف على التنفيذ",
      description: serviceDescription,
      href: "/practice/complete-supervision",
      image: serviceImage,
    },
    {
      id: "restoration-supervision",
      title: "الاشراف على اعمال الترميم والتدعيم",
      description: serviceDescription,
      href: "/practice/restoration-supervision",
      image: serviceImage,
    },
    {
      id: "complete-restoration",
      title: "اتمام الاشراف على اعمال الترميم والتدعيم",
      description: serviceDescription,
      href: "/practice/complete-restoration",
      image: serviceImage,
    },
    {
      id: "demolition-supervision",
      title: "الاشراف على الهدم",
      description: serviceDescription,
      href: "/practice/demolition-supervision",
      image: serviceImage,
    },
    {
      id: "complete-demolition",
      title: "اتمام الاشراف على الهدم",
      description: serviceDescription,
      href: "/practice/complete-demolition",
      image: serviceImage,
    },
  ],
}
