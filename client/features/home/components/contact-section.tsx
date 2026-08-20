import Image from "next/image"
import {
  ChevronDown,
  CircleUserRound,
  ClipboardList,
  Mail,
  MapPin,
  MessageCircleMore,
  MessagesSquare,
  Phone,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import type { HomePageContent } from "../types/home-content.types"

interface ContactSectionProps {
  content: HomePageContent["contact"]
}

const fieldClassName =
  "h-16 rounded-md border-0 bg-[#f2f2f2] pe-12 ps-4 text-base shadow-none placeholder:text-neutral-400 focus-visible:ring-brand/20"

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
      direction: "ltr" as const,
    },
    {
      label: content.emailLabel,
      value: content.email,
      icon: Mail,
      direction: "ltr" as const,
    },
  ]

  return (
    <section className="relative isolate overflow-hidden bg-brand pb-28 sm:pb-36 lg:pb-44">
      <Image
        src="/images/login-construction.jpg"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover object-bottom opacity-25"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#ffffff_0%,#ffffff_63%,rgba(0,145,96,.94)_63%,rgba(0,145,96,.96)_100%)]" />

      <div className="mx-auto w-full max-w-[1640px] px-0 sm:px-8 lg:px-14">
        <div className="grid overflow-hidden rounded-b-[42px] bg-white shadow-[0_18px_50px_rgba(0,0,0,.08)] lg:grid-cols-[.92fr_1.28fr]">
          <div className="px-6 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-24">
            <div className="grid size-14 place-items-center rounded-lg bg-[#ecfaf5] text-brand">
              <MessagesSquare aria-hidden="true" className="size-6" />
            </div>
            <h2 className="mt-6 text-4xl leading-tight font-extrabold text-neutral-950 sm:text-5xl lg:text-[4rem]">
              {content.infoTitle}
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-8 text-neutral-600 sm:text-base">
              {content.description}
            </p>

            <address className="mt-9 space-y-5 not-italic">
              {contactItems.map((item) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 rounded-md border border-neutral-200 bg-white p-4 shadow-sm"
                  >
                    <span className="grid size-12 shrink-0 place-items-center rounded-sm bg-[#edf9f5] text-brand">
                      <Icon aria-hidden="true" className="size-6" strokeWidth={1.8} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm text-neutral-500">{item.label}</p>
                      <p
                        className="mt-1 truncate text-sm font-semibold text-neutral-800 sm:text-base"
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

          <div className="px-6 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-24">
            <h2 className="text-4xl leading-tight font-extrabold text-neutral-950 sm:text-5xl">
              {content.formTitle}
            </h2>
            <p className="mt-3 text-sm leading-7 text-neutral-600 sm:text-base">
              {content.formDescription}
            </p>

            <form className="mt-7 space-y-3" action="#">
              <div>
                <Label htmlFor="contact-name" className="mb-2 text-neutral-600">
                  {content.nameLabel}
                </Label>
                <div className="relative">
                  <CircleUserRound className="pointer-events-none absolute top-1/2 right-4 z-10 size-6 -translate-y-1/2 text-brand" />
                  <Input
                    id="contact-name"
                    placeholder={content.namePlaceholder}
                    className={fieldClassName}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="contact-email" className="mb-2 text-neutral-600">
                  {content.emailLabel}
                </Label>
                <div className="relative">
                  <Mail className="pointer-events-none absolute top-1/2 right-4 z-10 size-6 -translate-y-1/2 text-brand" />
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder={content.emailPlaceholder}
                    className={fieldClassName}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="contact-phone" className="mb-2 text-neutral-600">
                  {content.phoneLabel}
                </Label>
                <div className="relative">
                  <Phone className="pointer-events-none absolute top-1/2 right-4 z-10 size-6 -translate-y-1/2 text-brand" />
                  <Input
                    id="contact-phone"
                    type="tel"
                    placeholder={content.phonePlaceholder}
                    className={fieldClassName}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="contact-subject" className="mb-2 text-neutral-600">
                  {content.subjectLabel}
                </Label>
                <div className="relative">
                  <ClipboardList className="pointer-events-none absolute top-1/2 right-4 z-10 size-6 -translate-y-1/2 text-brand" />
                  <select
                    id="contact-subject"
                    defaultValue=""
                    className={`${fieldClassName} w-full appearance-none ps-12 text-neutral-400 outline-none`}
                  >
                    <option value="" disabled>
                      {content.subjectPlaceholder}
                    </option>
                    <option value="general">استفسار عام</option>
                    <option value="services">خدمات النقابة</option>
                    <option value="membership">العضوية</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-neutral-700" />
                </div>
              </div>

              <div>
                <Label htmlFor="contact-message" className="mb-2 text-neutral-600">
                  {content.messageLabel}
                </Label>
                <div className="relative">
                  <MessageCircleMore className="pointer-events-none absolute top-4 right-4 z-10 size-6 text-brand" />
                  <textarea
                    id="contact-message"
                    placeholder={content.messagePlaceholder}
                    rows={5}
                    className="min-h-36 w-full resize-none rounded-md border-0 bg-[#f2f2f2] px-4 py-4 pe-12 text-base outline-none placeholder:text-neutral-400 focus:ring-3 focus:ring-brand/20"
                  />
                </div>
              </div>

              <div className="pt-2 text-left">
                <Button
                  type="button"
                  className="h-14 min-w-44 rounded-md bg-brand px-10 text-base font-semibold text-white hover:bg-brand-strong"
                >
                  {content.sendLabel}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
