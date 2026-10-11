export interface AuthPageContent {
  title: string
  description: string
  breadcrumbs: {
    home: string
    current: string
  }
  image: {
    src: string
    alt: string
  }
}

export interface SharedAuthValidationMessages {
  phoneRequired: string
  phoneInvalid: string
  passwordRequired: string
  passwordTooShort: string
}

export interface PasswordFieldContent {
  label: string
  placeholder: string
  showPasswordLabel: string
  hidePasswordLabel: string
}

export interface LoginPageContent extends AuthPageContent {
  form: {
    phoneLabel: string
    phonePlaceholder: string
    password: PasswordFieldContent
    forgotPasswordLabel: string
    forgotPasswordHref: string
    submitLabel: string
    createAccountLabel: string
    createAccountHref: string
    validation: SharedAuthValidationMessages
  }
}

export interface RegisterValidationMessages extends SharedAuthValidationMessages {
  nationalIdRequired: string
  nationalIdInvalid: string
  membershipNumberRequired: string
  membershipNumberInvalid: string
  nameRequired: string
  nameTooShort: string
}

export interface RegisterPageContent extends AuthPageContent {
  form: {
    nationalIdLabel: string
    nationalIdPlaceholder: string
    membershipNumberLabel: string
    membershipNumberPlaceholder: string
    nameLabel: string
    namePlaceholder: string
    phoneLabel: string
    phonePlaceholder: string
    password: PasswordFieldContent
    submitLabel: string
    loginLabel: string
    loginHref: string
    validation: RegisterValidationMessages
  }
}

export type RegistrationConfirmationView = "account" | "phone" | "password"

export interface OtpConfirmationContent {
  kind: "otp"
  title: string
  description: string
  phoneNumber: string
  digitLabels: [string, string, string, string]
  confirmLabel: string
}

export interface NewPasswordConfirmationContent {
  kind: "password"
  title: string
  description: string
  newPassword: PasswordFieldContent
  confirmPassword: PasswordFieldContent
  saveLabel: string
}

export interface RegistrationConfirmationPageContent extends Pick<
  AuthPageContent,
  "breadcrumbs" | "image"
> {
  variants: {
    account: OtpConfirmationContent
    phone: OtpConfirmationContent
    password: NewPasswordConfirmationContent
  }
}
