"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { CircleCheck } from "lucide-react"

import { SurfaceCard } from "@/components/surface-card"
import { Button } from "@/components/ui/button"
import { PageBreadcrumb } from "@/features/site-shell"
import {
  formatPaidAt,
  readLastPayment,
  type MemberActivity,
} from "@/lib/member-activity"

import { paymentSuccessPageContent as content } from "../data/payment-success-page.content"

export function PaymentSuccessPageView() {
  const [payment, setPayment] = useState<MemberActivity | null>(null)

  useEffect(() => {
    setPayment(readLastPayment())
  }, [])

  return (
    <main className="bg-page-surface">
      <PageBreadcrumb items={content.breadcrumbs} />

      <div className="mx-auto flex w-full max-w-[760px] justify-center px-5 py-14 sm:px-8 sm:py-20">
        <SurfaceCard className="w-full text-center sm:px-10 sm:py-12">
          <div className="mx-auto grid size-16 place-items-center rounded-full bg-[#edf8f4] text-brand">
            <CircleCheck aria-hidden="true" className="size-10" strokeWidth={1.6} />
          </div>

          <h1 className="mt-6 text-3xl font-extrabold text-neutral-950 sm:text-4xl">
            {content.title}
          </h1>
          <p className="mt-3 text-sm leading-7 text-neutral-600 sm:text-base">
            {content.description}
          </p>

          <dl className="mt-8 space-y-3 rounded-md bg-neutral-50 px-5 py-5 text-start">
            <div className="flex justify-between gap-4">
              <dt className="text-neutral-500">{content.typeLabel}</dt>
              <dd className="font-semibold text-neutral-900">
                {payment?.categoryLabel ?? content.fallbackTitle}
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-neutral-500">الخدمة</dt>
              <dd className="font-semibold text-neutral-900">
                {payment?.title ?? content.fallbackTitle}
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-neutral-500">{content.dateLabel}</dt>
              <dd className="font-semibold text-neutral-900">
                {payment ? formatPaidAt(payment.paidAt) : "—"}
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-neutral-500">{content.amountLabel}</dt>
              <dd className="text-lg font-extrabold text-brand">
                {payment?.price ?? 0}
                <span className="ms-1 text-sm font-medium text-neutral-500">
                  {content.currency}
                </span>
              </dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button
              asChild
              className="h-12 min-w-40 rounded-md bg-brand px-7 text-base font-semibold text-white hover:bg-brand-strong"
            >
              <Link href={content.profileHref}>{content.profileLabel}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 min-w-36 rounded-md border-neutral-200 bg-white px-7 text-base font-medium text-neutral-700"
            >
              <Link href={content.homeHref}>{content.homeLabel}</Link>
            </Button>
          </div>
        </SurfaceCard>
      </div>
    </main>
  )
}
