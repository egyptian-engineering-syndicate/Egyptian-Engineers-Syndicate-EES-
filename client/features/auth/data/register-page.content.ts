import type { RegisterPageContent } from "../types/auth-content.types"

export const registerPageContent: RegisterPageContent = {
  title: "إنشاء حساب",
  description: "يرجى إدخال بياناتك وكلمة المرور لتتمكن من الوصول إلى خدماتنا",
  breadcrumbs: {
    home: "الرئيسية",
    current: "إنشاء حساب",
  },
  image: {
    src: "/images/login-construction.jpg",
    alt: "مهندسون وعمال داخل موقع إنشاء",
  },
  form: {
    nationalIdLabel: "الرقم القومي",
    nationalIdPlaceholder: "أضف الرقم القومي",
    membershipNumberLabel: "رقم العضوية",
    membershipNumberPlaceholder: "أضف رقم العضوية",
    nameLabel: "الاسم",
    namePlaceholder: "أضف الاسم",
    phoneLabel: "رقم الهاتف",
    phonePlaceholder: "أضف رقم الهاتف",
    password: {
      label: "كلمة السر",
      placeholder: "أضف كلمة السر",
      showPasswordLabel: "إظهار كلمة السر",
      hidePasswordLabel: "إخفاء كلمة السر",
    },
    submitLabel: "إنشاء حساب",
    loginLabel: "تسجيل الدخول",
    loginHref: "/login",
    validation: {
      nationalIdRequired: "الرقم القومي مطلوب",
      nationalIdInvalid: "أدخل رقمًا قوميًّا صحيحًا مكوّنًا من 14 رقمًا",
      membershipNumberRequired: "رقم العضوية مطلوب",
      membershipNumberInvalid: "رقم العضوية يجب أن يحتوي على أرقام فقط",
      nameRequired: "الاسم مطلوب",
      nameTooShort: "الاسم يجب ألا يقل عن حرفين",
      phoneRequired: "رقم الهاتف مطلوب",
      phoneInvalid: "أدخل رقم هاتف مصري صحيح",
      passwordRequired: "كلمة السر مطلوبة",
      passwordTooShort: "كلمة السر يجب ألا تقل عن 6 أحرف",
    },
  },
}
