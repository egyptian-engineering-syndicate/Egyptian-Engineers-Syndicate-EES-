"use client"

import { useMemo } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  ChevronDown,
  ListChecks,
  Mail,
  MessageCircle,
  Phone,
  UserRound,
} from "lucide-react"
import { useForm } from "react-hook-form"

import {
  fieldIconClassName,
  fieldInputClassName,
  FormField,
} from "@/components/form-field"
import { SurfaceCard } from "@/components/surface-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import {
  createContactSchema,
  type ContactFormValues,
} from "../schemas/contact.schema"
import type { ContactPageContent } from "../types/contact-content.types"

interface ContactFormProps {
  content: ContactPageContent["form"]
}

export function ContactForm({ content }: ContactFormProps) {
  const schema = useMemo(
    () => createContactSchema(content.validation),
    [content.validation]
  )
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  })

  async function onSubmit() {
    await Promise.resolve()
  }

  return (
    <SurfaceCard className="px-6 py-7 sm:px-8 sm:py-8">
      <h2 className="text-2xl font-extrabold text-neutral-950 sm:text-3xl">
        {content.title}
      </h2>
      <p className="mt-2 text-sm leading-7 text-neutral-600">
        {content.description}
      </p>

      <form
        className="mt-6 space-y-4"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormField
          id="contact-name"
          label={content.nameLabel}
          error={errors.name?.message}
        >
          <Input
            id="contact-name"
            placeholder={content.namePlaceholder}
            className={fieldInputClassName(Boolean(errors.name))}
            {...register("name")}
          />
          <UserRound aria-hidden="true" className={fieldIconClassName} />
        </FormField>

        <FormField
          id="contact-email"
          label={content.emailLabel}
          error={errors.email?.message}
        >
          <Input
            id="contact-email"
            type="email"
            placeholder={content.emailPlaceholder}
            className={fieldInputClassName(Boolean(errors.email))}
            {...register("email")}
          />
          <Mail aria-hidden="true" className={fieldIconClassName} />
        </FormField>

        <FormField
          id="contact-phone"
          label={content.phoneLabel}
          error={errors.phone?.message}
        >
          <Input
            id="contact-phone"
            type="tel"
            placeholder={content.phonePlaceholder}
            className={fieldInputClassName(Boolean(errors.phone))}
            {...register("phone")}
          />
          <Phone aria-hidden="true" className={fieldIconClassName} />
        </FormField>

        <FormField
          id="contact-subject"
          label={content.subjectLabel}
          error={errors.subject?.message}
        >
          <select
            id="contact-subject"
            className={fieldInputClassName(
              Boolean(errors.subject),
              "appearance-none ps-12 pe-12"
            )}
            {...register("subject")}
          >
            <option value="">{content.subjectPlaceholder}</option>
            {content.subjectOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ListChecks aria-hidden="true" className={fieldIconClassName} />
          <ChevronDown
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 end-4 size-5 -translate-y-1/2 text-neutral-500"
          />
        </FormField>

        <FormField
          id="contact-message"
          label={content.messageLabel}
          error={errors.message?.message}
        >
          <textarea
            id="contact-message"
            rows={4}
            placeholder={content.messagePlaceholder}
            className="min-h-28 w-full rounded-md border-transparent bg-neutral-100 py-3.5 ps-12 pe-4 text-base text-neutral-900 shadow-none transition placeholder:text-neutral-400 focus-visible:border-brand focus-visible:bg-white focus-visible:ring-3 focus-visible:ring-brand/10"
            {...register("message")}
          />
          <MessageCircle
            aria-hidden="true"
            className="pointer-events-none absolute top-4 start-4 size-5 text-brand"
          />
        </FormField>

        <div className="pt-2">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="h-12 min-w-36 rounded-md bg-brand px-10 text-base font-semibold text-white hover:bg-brand-strong"
          >
            {content.sendLabel}
          </Button>
        </div>
      </form>
    </SurfaceCard>
  )
}
