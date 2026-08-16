import type { LoginPageContent } from "../types/auth-content.types"

export const loginPageContent: LoginPageContent = {
  title: "تسجيل الدخول",
  description:
    "يرجى إدخال بريدك الإلكتروني وكلمة المرور لتتمكن من الوصول إلى خدماتنا",
  breadcrumbs: {
    home: "الرئيسية",
    current: "تسجيل الدخول",
  },
  image: {
    src: "/images/login-construction.jpg",
    alt: "مهندسون وعمال داخل موقع إنشاء",
  },
  form: {
    phoneLabel: "رقم الهاتف",
    phonePlaceholder: "أضف رقم الهاتف",
    password: {
      label: "كلمة السر",
      placeholder: "أضف كلمة السر",
      showPasswordLabel: "إظهار كلمة السر",
      hidePasswordLabel: "إخفاء كلمة السر",
    },
    forgotPasswordLabel: "نسيت كلمة المرور؟",
    forgotPasswordHref: "/forgot-password",
    submitLabel: "تسجيل الدخول",
    createAccountLabel: "إنشاء حساب",
    createAccountHref: "/register",
    validation: {
      phoneRequired: "رقم الهاتف مطلوب",
      phoneInvalid: "أدخل رقم هاتف مصري صحيح",
      passwordRequired: "كلمة السر مطلوبة",
      passwordTooShort: "كلمة السر يجب ألا تقل عن 6 أحرف",
    },
  },
}
