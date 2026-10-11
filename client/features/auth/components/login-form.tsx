"use client"

import { useMemo } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { Phone } from "lucide-react"
import { useForm } from "react-hook-form"

import { signInMember } from "@/lib/member-session"

import {
  createLoginSchema,
  type LoginFormValues,
} from "../schemas/login.schema"
import type { LoginPageContent } from "../types/auth-content.types"
import {
  AuthFormActions,
  AuthPasswordField,
  AuthTextField,
} from "./auth-form-controls"

interface LoginFormProps {
  content: LoginPageContent["form"]
}

export function LoginForm({ content }: LoginFormProps) {
  const router = useRouter()
  const schema = useMemo(
    () => createLoginSchema(content.validation),
    [content.validation]
  )
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      phone: "",
      password: "",
    },
  })

  function onSubmit() {
    signInMember()
    router.replace("/")
  }

  return (
    <form
      className="mt-5 space-y-3.5"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
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
          autoComplete: "current-password",
          placeholder: content.password.placeholder,
          ...register("password"),
        }}
      />

      <div className="pt-0.5 text-left">
        <Link
          href={content.forgotPasswordHref}
          className="text-sm font-medium text-neutral-600 underline underline-offset-4 transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand sm:text-base"
        >
          {content.forgotPasswordLabel}
        </Link>
      </div>

      <AuthFormActions
        submitLabel={content.submitLabel}
        alternateLabel={content.createAccountLabel}
        alternateHref={content.createAccountHref}
        submitting={isSubmitting}
      />
    </form>
  )
}
