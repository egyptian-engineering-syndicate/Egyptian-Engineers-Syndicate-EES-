import type { HomePageContent } from "../types/home-content.types"

const departmentDescription =
  "المذكرة الإيضاحية هي مذكرة مختصرة للقانون لعرضها من وكيل مجلس الشعب لأخذ الموافقة عليها من رئيس السلطة التنفيذية، واللائحة هي قرار وزاري من وزير الري لعمل النظام الداخلي لنقابة المهندسين."

const newsExcerpt =
  "المذكرة الإيضاحية هي مذكرة مختصرة للقانون لعرضها من وكيل مجلس الشعب لأخذ الموافقة اللازمة."

export const homePageContent: HomePageContent = {
  hero: {
    eyebrow: "نقابة المهندسين بالقاهرة",
    title: "حلول هندسية تبني المستقبل",
    description:
      "من التصاميم المبتكرة إلى التنفيذ الموثوق، نقدم خدمات هندسية شاملة تعزز الكفاءة والسلامة والاستدامة عبر الصناعات.",
    imageAlt: "مهندسون يعملون في موقع إنشاءات",
    searchLabel: "البحث عن خدمة",
    searchPlaceholder: "ابحث عن الخدمة....",
    searchButton: "بحث",
    stats: [
      { value: "+10", label: "خدمات نقدمها لك" },
      { value: "+5", label: "إدارات نقابية" },
    ],
  },
  services: {
    title: "خدمات النقابة",
    description: "استمتع بجميع الخدمات التي تقدمها النقابة",
    learnMore: "تعرف على المزيد",
    items: [
      {
        title: "تجديد الاشتراكات",
        description: "جدد اشتراك نقابتك الآن من خلال موقعنا الإلكتروني فقط",
        details: ["الاسم الرباعي", "رقم البطاقة النقابية", "رقم البطاقة الشخصية"],
        icon: "card",
      },
      {
        title: "قسم التدريب",
        description: "أحدث المحتويات التعليمية والدورات التدريبية",
        details: ["الاسم الرباعي", "عضوية النقابة", "الدفع والاشتراك"],
        icon: "book",
      },
      {
        title: "الرحلات",
        description: "احجز رحلتك مع النقابة وتمتع بأفضل البرامج",
        details: ["الاسم الرباعي", "رقم البطاقة النقابية", "رقم البطاقة الشخصية"],
        icon: "airplane",
      },
      {
        title: "مزاولة المهنة",
        description: "قدم طلب مزاولة المهنة من خلال موقعنا الإلكتروني",
        details: ["الاسم الرباعي", "رقم البطاقة النقابية", "رقم البطاقة الشخصية"],
        icon: "practice",
      },
      {
        title: "الرعاية الصحية",
        description: "خدمات الرعاية الطبية للمهندسين وأسرهم",
        details: ["الاسم الرباعي", "عضوية النقابة", "الدفع والاشتراك"],
        icon: "health",
      },
      {
        title: "المعاشات",
        description: "تعرف على خدمات المعاشات والمستندات المطلوبة",
        details: ["الاسم الرباعي", "رقم البطاقة النقابية", "رقم البطاقة الشخصية"],
        icon: "pension",
      },
    ],
  },
  advertisement: {
    accent: "الإعلان",
    title: "على النقابة",
    description: "استمتع بجميع الخدمات التي تقدمها النقابة",
    imageAlt: "عرض خاص لأعضاء نقابة المهندسين",
    offer: "خصم 15%",
    offerDescription: "على الخدمات المختارة لأعضاء النقابة",
    offerNote: "استخدم بطاقة عضوية نقابة المهندسين للاستفادة من العرض",
  },
  departments: {
    title: "إدارات النقابة",
    description:
      "أُنشئت نقابة المهندسين بديلًا عن نقابة المهن الهندسية التي كانت قد أُنشئت بالقانون رقم 89 لسنة 1946، وقد تطورت النقابة بعد ذلك بفعل التطور السياسي والاجتماعي الذي شهده الشعب المصري. وينظم عملها الحالي القانون رقم 66 لسنة 1974.",
    learnMore: "تعرف على المزيد",
    items: [
      {
        title: "إدارة الخدمات النقابية",
        description: departmentDescription,
        imageAlt: "اجتماع داخل إحدى إدارات النقابة",
        imagePosition: "center 58%",
      },
      {
        title: "أندية النقابة",
        description: departmentDescription,
        imageAlt: "نشاط اجتماعي لأعضاء النقابة",
        imagePosition: "center 25%",
      },
    ],
  },
  news: {
    accent: "آخر",
    title: "أخبار النقابة",
    description:
      "تابع أحدث أخبار نقابة المهندسين والقرارات والخدمات والفعاليات التي تهم أعضاء النقابة.",
    viewMore: "تعرف على المزيد",
    readMore: "تعرف على المزيد",
    featured: {
      title: "تدعو النقابة العامة للمهندسين شركات المقاولات",
      excerpt: departmentDescription,
      imageAlt: "مشروع هندسي حديث",
      imagePosition: "center 42%",
      date: "24 من أغسطس 2026",
    },
    items: [
      {
        title: "لائحة ممارسة المهنة لنقابة المهندسين",
        excerpt: newsExcerpt,
        imageAlt: "مهندسون داخل موقع عمل",
        imagePosition: "center 10%",
      },
      {
        title: "لائحة ممارسة المهنة لنقابة المهندسين",
        excerpt: newsExcerpt,
        imageAlt: "أعمال إنشائية حديثة",
        imagePosition: "center 35%",
      },
      {
        title: "لائحة ممارسة المهنة لنقابة المهندسين",
        excerpt: newsExcerpt,
        imageAlt: "فريق هندسي في موقع إنشاءات",
        imagePosition: "center 60%",
      },
      {
        title: "لائحة ممارسة المهنة لنقابة المهندسين",
        excerpt: newsExcerpt,
        imageAlt: "مهندسون يتابعون تنفيذ مشروع",
        imagePosition: "center 78%",
      },
    ],
  },
  contact: {
    infoTitle: "معلومات التواصل",
    description:
      "هل لديك فكرة تحدث فرقًا؟ أو تبحث عن استشارة أو طلب خاص؟ أينما كنت، تواصل معنا واحصل على خدمات مميزة.",
    addressLabel: "العنوان",
    address: "شارع رمسيس، القاهرة، جمهورية مصر العربية",
    phoneLabel: "رقم الهاتف",
    phone: "+20 2 1234 5678",
    emailLabel: "البريد الإلكتروني",
    email: "info@eng-syndicate.eg",
    formTitle: "تواصل معنا",
    formDescription:
      "هل لديك فكرة تحدث فرقًا؟ أو تبحث عن استشارة أو طلب خاص؟ أينما كنت، تواصل معنا واحصل على خدمات مميزة.",
    nameLabel: "الاسم",
    namePlaceholder: "أضف اسمك",
    emailPlaceholder: "أضف بريدك الإلكتروني",
    phonePlaceholder: "أضف رقم هاتفك",
    subjectLabel: "نوع الاستفسار",
    subjectPlaceholder: "اختر نوع الاستفسار ...",
    messageLabel: "الرسالة",
    messagePlaceholder: "أضف رسالتك",
    sendLabel: "إرسال",
  },
}
