import type { RegistrationConfirmationPageContent } from "../types/auth-content.types"

const passwordFieldA11y = {
  placeholder: "أضف كلمة السر",
  showPasswordLabel: "إظهار كلمة السر",
  hidePasswordLabel: "إخفاء كلمة السر",
}

export const registrationConfirmationPageContent: RegistrationConfirmationPageContent =
  {
    breadcrumbs: {
      home: "الرئيسية",
      current: "إنشاء حساب",
    },
    image: {
      src: "/images/auth-confirmation-construction.png",
      alt: "مهندسون يتفقدون موقع إنشاء",
    },
    variants: {
      account: {
        kind: "otp",
        title: "تأكيد إنشاء الحساب",
        description: "يرجى إدخال رمز التحقق المكون من 4 أرقام المرسل إلى",
        phoneNumber: "+20XXXXXXX097",
        digitLabels: [
          "الرقم الأول من رمز التحقق",
          "الرقم الثاني من رمز التحقق",
          "الرقم الثالث من رمز التحقق",
          "الرقم الرابع من رمز التحقق",
        ],
        confirmLabel: "تأكيد",
      },
      phone: {
        kind: "otp",
        title: "تأكيد ملكية الرقم",
        description: "يرجى إدخال رمز التحقق المكون من 4 أرقام المرسل إلى",
        phoneNumber: "+20XXXXXXX097",
        digitLabels: [
          "الرقم الأول من رمز التحقق",
          "الرقم الثاني من رمز التحقق",
          "الرقم الثالث من رمز التحقق",
          "الرقم الرابع من رمز التحقق",
        ],
        confirmLabel: "تأكيد",
      },
      password: {
        kind: "password",
        title: "تأكيد ملكية الرقم",
        description: "أدخل كلمة مرور جديدة لحسابك",
        newPassword: {
          label: "كلمة السر الجديدة",
          ...passwordFieldA11y,
        },
        confirmPassword: {
          label: "تأكيد كلمة السر",
          ...passwordFieldA11y,
        },
        saveLabel: "حفظ",
      },
    },
  }
