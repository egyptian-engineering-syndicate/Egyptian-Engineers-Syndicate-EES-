"use client"

import { useEffect, useMemo } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { KeyRound, Mail, Phone, UserRound } from "lucide-react"
import { useForm } from "react-hook-form"

import {
  fieldIconClassName,
  fieldInputClassName,
  FormField,
} from "@/components/form-field"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import {
  createProfileEditSchema,
  type ProfileEditFormValues,
} from "../schemas/profile-edit.schema"
import type { ProfileEditFormContent } from "../types/profile-content.types"

interface ProfileEditDialogProps {
  open: boolean
  onClose: () => void
  content: ProfileEditFormContent
}

export function ProfileEditDialog({
  open,
  onClose,
  content,
}: ProfileEditDialogProps) {
  const schema = useMemo(
    () => createProfileEditSchema(content.validation),
    [content.validation]
  )
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ProfileEditFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      name: "",
      phone: "",
      newPassword: "",
      currentPassword: "",
    },
  })

  useEffect(() => {
    if (!open) return

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose()
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [open, onClose])

  if (!open) return null

  function onSubmit() {
    reset()
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        type="button"
        aria-label={content.cancelLabel}
        className="absolute inset-0 bg-black/55"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="profile-edit-title"
        className="relative z-10 max-h-[90vh] w-full max-w-[520px] overflow-y-auto rounded-xl bg-white px-6 py-8 shadow-[0_24px_60px_rgba(0,0,0,.18)] sm:px-8"
      >
        <div className="mx-auto grid size-16 place-items-center rounded-md bg-[#edf8f4] text-brand">
          <UserRound aria-hidden="true" className="size-8" strokeWidth={1.8} />
        </div>

        <h2
          id="profile-edit-title"
          className="mt-4 text-center text-2xl font-extrabold text-neutral-950"
        >
          {content.title}
        </h2>
        <p className="mt-2 text-center text-sm leading-7 text-neutral-500">
          {content.description}
        </p>

        <form
          className="mt-6 space-y-4"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormField
            id="edit-email"
            label={content.emailLabel}
            error={errors.email?.message}
          >
            <Input
              id="edit-email"
              type="email"
              placeholder={content.emailPlaceholder}
              className={fieldInputClassName(Boolean(errors.email))}
              {...register("email")}
            />
            <Mail aria-hidden="true" className={fieldIconClassName} />
          </FormField>

          <FormField
            id="edit-name"
            label={content.nameLabel}
            error={errors.name?.message}
          >
            <Input
              id="edit-name"
              placeholder={content.namePlaceholder}
              className={fieldInputClassName(Boolean(errors.name))}
              {...register("name")}
            />
            <UserRound aria-hidden="true" className={fieldIconClassName} />
          </FormField>

          <FormField
            id="edit-phone"
            label={content.phoneLabel}
            error={errors.phone?.message}
          >
            <Input
              id="edit-phone"
              type="tel"
              placeholder={content.phonePlaceholder}
              className={fieldInputClassName(Boolean(errors.phone))}
              {...register("phone")}
            />
            <Phone aria-hidden="true" className={fieldIconClassName} />
          </FormField>

          <h3 className="pt-2 text-lg font-extrabold text-neutral-950">
            {content.passwordTitle}
          </h3>

          <FormField
            id="edit-new-password"
            label={content.newPasswordLabel}
            error={errors.newPassword?.message}
          >
            <Input
              id="edit-new-password"
              type="password"
              placeholder={content.newPasswordPlaceholder}
              className={fieldInputClassName(Boolean(errors.newPassword))}
              {...register("newPassword")}
            />
            <KeyRound aria-hidden="true" className={fieldIconClassName} />
          </FormField>

          <FormField
            id="edit-current-password"
            label={content.currentPasswordLabel}
            error={errors.currentPassword?.message}
          >
            <Input
              id="edit-current-password"
              type="password"
              placeholder={content.currentPasswordPlaceholder}
              className={fieldInputClassName(Boolean(errors.currentPassword))}
              {...register("currentPassword")}
            />
            <KeyRound aria-hidden="true" className={fieldIconClassName} />
          </FormField>

          <div className="flex justify-start gap-3 pt-2">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="h-12 min-w-36 rounded-md bg-brand px-8 text-base font-semibold text-white hover:bg-brand-strong"
            >
              {content.submitLabel}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="h-12 min-w-28 rounded-md border-red-200 bg-white px-8 text-base font-semibold text-red-600 hover:bg-red-50 hover:text-red-700"
            >
              {content.cancelLabel}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
