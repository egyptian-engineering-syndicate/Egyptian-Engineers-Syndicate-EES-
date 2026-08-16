"use client"

import { useMemo } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { CircleUserRound, CreditCard, Hash, Phone } from "lucide-react"
import { useForm } from "react-hook-form"

import {
  createRegisterSchema,
  type RegisterFormValues,
} from "../schemas/register.schema"
import type { RegisterPageContent } from "../types/auth-content.types"
import {
  AuthFormActions,
  AuthPasswordField,
  AuthTextField,
} from "./auth-form-controls"

interface RegisterFormProps {
  content: RegisterPageContent["form"]
}

export function RegisterForm({ content }: RegisterFormProps) {
  const schema = useMemo(
    () => createRegisterSchema(content.validation),
    [content.validation]
  )
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      nationalId: "",
      membershipNumber: "",
      name: "",
      phone: "",
      password: "",
    },
  })

  async function onSubmit() {
    await Promise.resolve()
  }

  return (
    <form
      className="mt-4 space-y-3"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <AuthTextField
        id="nationalId"
        label={content.nationalIdLabel}
        icon={CreditCard}
        error={errors.nationalId?.message}
        inputProps={{
          type: "text",
          inputMode: "numeric",
          autoComplete: "off",
          maxLength: 14,
          placeholder: content.nationalIdPlaceholder,
          ...register("nationalId"),
        }}
      />

      <AuthTextField
        id="membershipNumber"
        label={content.membershipNumberLabel}
        icon={Hash}
        error={errors.membershipNumber?.message}
        inputProps={{
          type: "text",
          inputMode: "numeric",
          autoComplete: "off",
          placeholder: content.membershipNumberPlaceholder,
          ...register("membershipNumber"),
        }}
      />

      <AuthTextField
        id="name"
        label={content.nameLabel}
        icon={CircleUserRound}
        error={errors.name?.message}
        inputProps={{
          type: "text",
          autoComplete: "name",
          placeholder: content.namePlaceholder,
          ...register("name"),
        }}
      />

      <AuthTextField
        id="phone"
        label={content.phoneLabel}
        icon={Phone}
        error={errors.phone?.message}
        inputProps={{
          type: "tel",
          inputMode: "tel",
          autoComplete: "tel",
          placeholder: content.phonePlaceholder,
          ...register("phone"),
        }}
      />

      <AuthPasswordField
        id="password"
        content={content.password}
        error={errors.password?.message}
        inputProps={{
          autoComplete: "new-password",
          placeholder: content.password.placeholder,
          ...register("password"),
        }}
      />

      <AuthFormActions
        submitLabel={content.submitLabel}
        alternateLabel={content.loginLabel}
        alternateHref={content.loginHref}
        submitting={isSubmitting}
      />
    </form>
  )
}
