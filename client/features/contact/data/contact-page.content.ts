import type { ContactPageContent } from "../types/contact-content.types"

const address: ContactPageContent["addresses"][number] = {
  id: "general",
  title: "عناوين وتليفونات النقابة العامة والنقابات الفرعية",
  branch: "النقابة العامة للمهندسين",
  address: "30 شارع رمسيس - القاهرة",
  phones: "25747481 - 25747480 - 025747479",
  email: "info@eea.org.eg",
}

export const contactPageContent: ContactPageContent = {
  breadcrumbs: [{ label: "الرئيسية", href: "/" }, { label: "تواصل معنا" }],
  addressesTitle: "عناوين التواصل",
  addressLabel: "العنوان",
  phoneLabel: "هاتف",
  emailLabel: "البريد الإلكتروني",
  addresses: [
    { ...address, id: "branch-1" },
    { ...address, id: "branch-2" },
    { ...address, id: "branch-3" },
    { ...address, id: "branch-4" },
    { ...address, id: "branch-5" },
    { ...address, id: "branch-6" },
  ],
  infoTitle: "معلومات التواصل",
  infoDescription:
    "هل لديك فكرة تحدث فرقًا؟ أو تبحث عن استشارة أو طلب خاص؟ أينما كنت، تواصل معنا واحصل على خدمات مميزة.",
  infoItems: [
    {
      label: "العنوان",
      value: "شارع رمسيس، القاهرة، جمهورية مصر العربية",
      type: "address",
    },
    {
      label: "رقم الهاتف",
      value: "+20 2 1234 5678",
      type: "phone",
    },
    {
      label: "البريد الإلكتروني",
      value: "info@eng-syndicate.eg",
      type: "email",
    },
  ],
  form: {
    title: "تواصل معنا",
    description:
      "هل لديك فكرة تحدث فرقًا؟ أو تبحث عن استشارة أو طلب خاص؟ أينما كنت، تواصل معنا واحصل على خدمات مميزة.",
    nameLabel: "الاسم",
    namePlaceholder: "أضف اسمك",
    emailLabel: "البريد الإلكتروني",
    emailPlaceholder: "أضف بريدك الإلكتروني",
    phoneLabel: "رقم الهاتف",
    phonePlaceholder: "أضف رقم هاتفك",
    subjectLabel: "نوع الاستفسار",
    subjectPlaceholder: "اختر نوع الاستفسار ...",
    subjectOptions: [
      { value: "general", label: "استفسار عام" },
      { value: "services", label: "خدمات النقابة" },
      { value: "membership", label: "العضوية" },
    ],
    messageLabel: "الرسالة",
    messagePlaceholder: "أضف رسالتك",
    sendLabel: "إرسال",
    validation: {
      nameRequired: "الاسم مطلوب",
      emailRequired: "البريد الإلكتروني مطلوب",
      emailInvalid: "أدخل بريدًا إلكترونيًا صحيحًا",
      phoneRequired: "رقم الهاتف مطلوب",
      phoneInvalid: "أدخل رقم هاتف صحيح",
      subjectRequired: "اختر نوع الاستفسار",
      messageRequired: "الرسالة مطلوبة",
    },
  },
}
