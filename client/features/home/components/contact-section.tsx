import Image from "next/image"
import {
  ChevronDown,
  Info,
  ListChecks,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  UserRound,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import type { HomePageContent } from "../types/home-content.types"

interface ContactSectionProps {
  content: HomePageContent["contact"]
}

const fieldClassName =
  "h-[52px] rounded-md border-0 bg-[#f1f1f1] pe-4 ps-12 text-sm shadow-none placeholder:text-neutral-400 focus-visible:ring-brand/20"

const fieldIconClassName =
  "pointer-events-none absolute top-1/2 right-4 z-10 size-5 -translate-y-1/2 text-brand"

export function ContactSection({ content }: ContactSectionProps) {
  const contactItems = [
    {
      label: content.addressLabel,
      value: content.address,
      icon: MapPin,
      direction: "rtl" as const,
    },
    {
      label: content.phoneLabel,
      value: content.phone,
      icon: Phone,
      direction: "rtl" as const,
    },
    {
      label: content.emailLabel,
      value: content.email,
      icon: Mail,
      direction: "ltr" as const,
    },
  ]

  return (
    <section className="relative isolate overflow-hidden bg-[#fafafa] py-12 sm:py-16 lg:pb-10">
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 overflow-hidden bg-brand">
        <Image
          src="/images/login-construction.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-bottom opacity-30"
        />
        <div className="absolute inset-0 bg-brand/70" />
      </div>

      <div
        className="mx-auto grid w-full max-w-[1434px] items-start gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,390px)] lg:gap-[clamp(4rem,12.5vw,12rem)] lg:px-10"
        dir="ltr"
      >
        <div
          className="rounded-lg bg-white p-5 shadow-[0_12px_32px_rgba(0,0,0,.07)] sm:p-6"
          dir="rtl"
        >
          <h2 className="text-3xl leading-tight font-extrabold text-neutral-950 sm:text-4xl">
            {content.formTitle}
          </h2>
          <p className="mt-1 text-xs leading-6 text-neutral-600 sm:text-sm">
            {content.formDescription}
          </p>

          <form className="mt-3 grid gap-2.5" action="#">
            <div>
              <Label htmlFor="contact-name" className="mb-1.5 text-neutral-600">
                {content.nameLabel}
              </Label>
              <div className="relative">
                <UserRound
                  aria-hidden="true"
                  className={fieldIconClassName}
                  strokeWidth={1.8}
                />
                <Input
                  id="contact-name"
                  dir="rtl"
                  placeholder={content.namePlaceholder}
                  className={fieldClassName}
                />
              </div>
            </div>

            <div>
              <Label
                htmlFor="contact-email"
                className="mb-1.5 text-neutral-600"
              >
                {content.emailLabel}
              </Label>
              <div className="relative">
                <Mail
                  aria-hidden="true"
                  className={fieldIconClassName}
                  strokeWidth={1.8}
                />
                <Input
                  id="contact-email"
                  type="email"
                  dir="rtl"
                  placeholder={content.emailPlaceholder}
                  className={fieldClassName}
                />
              </div>
            </div>

            <div>
              <Label
                htmlFor="contact-phone"
                className="mb-1.5 text-neutral-600"
              >
                {content.phoneLabel}
              </Label>
              <div className="relative">
                <Phone
                  aria-hidden="true"
                  className={fieldIconClassName}
                  strokeWidth={1.8}
                />
                <Input
                  id="contact-phone"
                  type="tel"
                  dir="rtl"
                  placeholder={content.phonePlaceholder}
                  className={fieldClassName}
                />
              </div>
            </div>

            <div>
              <Label
                htmlFor="contact-subject"
                className="mb-1.5 text-neutral-600"
              >
                {content.subjectLabel}
              </Label>
              <div className="relative">
                <ListChecks
                  aria-hidden="true"
                  className={fieldIconClassName}
                  strokeWidth={1.8}
                />
                <select
                  id="contact-subject"
                  defaultValue=""
                  className="h-[52px] w-full appearance-none rounded-md border-0 bg-[#f1f1f1] pe-12 ps-12 text-sm text-neutral-400 outline-none focus:ring-3 focus:ring-brand/20"
                >
                  <option value="" disabled>
                    {content.subjectPlaceholder}
                  </option>
                  <option value="general">استفسار عام</option>
                  <option value="services">خدمات النقابة</option>
                  <option value="membership">العضوية</option>
                </select>
                <ChevronDown
                  aria-hidden="true"
                  className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-neutral-900"
                  strokeWidth={1.8}
                />
              </div>
            </div>

            <div>
              <Label
                htmlFor="contact-message"
                className="mb-1.5 text-neutral-600"
              >
                {content.messageLabel}
              </Label>
              <div className="relative">
                <MessageCircle
                  aria-hidden="true"
                  className="pointer-events-none absolute top-4 right-4 z-10 size-5 text-brand"
                  strokeWidth={1.8}
                />
                <textarea
                  id="contact-message"
                  dir="rtl"
                  placeholder={content.messagePlaceholder}
                  rows={4}
                  className="min-h-[95px] w-full resize-none rounded-md border-0 bg-[#f1f1f1] py-3.5 pe-4 ps-12 text-sm outline-none placeholder:text-neutral-400 focus:ring-3 focus:ring-brand/20"
                />
              </div>
            </div>

            <div className="pt-1 text-left">
              <Button
                type="button"
                className="h-[49px] min-w-36 rounded-md bg-brand px-9 text-sm font-semibold text-white hover:bg-brand-strong"
              >
                {content.sendLabel}
              </Button>
            </div>
          </form>
        </div>

        <div className="text-right" dir="rtl">
          <div className="mr-0 ml-auto grid size-12 place-items-center rounded-md bg-[#eaf7f2] text-brand">
            <Info aria-hidden="true" className="size-5" strokeWidth={1.8} />
          </div>
          <h2 className="mt-2 text-4xl leading-tight font-extrabold text-neutral-950 sm:text-5xl">
            {content.infoTitle}
          </h2>
          <p className="mt-2 text-sm leading-7 text-neutral-600">
            {content.description}
          </p>

          <address className="mt-4 mr-0 ml-auto w-full max-w-[324px] space-y-4 not-italic">
            {contactItems.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.label}
                  className="flex min-h-[66px] items-center gap-3 rounded-md border border-neutral-300 bg-white px-3 py-2.5"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-sm bg-[#edf9f5] text-brand">
                    <Icon
                      aria-hidden="true"
                      className="size-5"
                      strokeWidth={1.8}
                    />
                  </span>
                  <div className="min-w-0 flex-1 text-right">
                    <p className="text-xs text-neutral-500">{item.label}</p>
                    <p
                      className="mt-0.5 text-sm font-medium text-neutral-900"
                      dir={item.direction}
                    >
                      {item.value}
                    </p>
                  </div>
                </div>
              )
            })}
          </address>
        </div>
      </div>
    </section>
  )
}
