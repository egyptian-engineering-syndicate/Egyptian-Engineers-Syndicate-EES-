"use client"

import { useState } from "react"
import Link from "next/link"
import { Download, X } from "lucide-react"
import {
  useController,
  type Control,
  type FieldErrors,
  type UseFormRegister,
} from "react-hook-form"

import { FormField } from "@/components/form-field"
import { SurfaceCard } from "@/components/surface-card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

import type { HealthCareBookingFormValues } from "../schemas/health-care-booking.schema"
import type { AttachedDocumentsContent } from "../types/health-care-content.types"

interface HealthCareAttachedDocumentsCardProps {
  content: AttachedDocumentsContent
  control: Control<HealthCareBookingFormValues>
  register: UseFormRegister<HealthCareBookingFormValues>
  errors: FieldErrors<HealthCareBookingFormValues>
  isSubmitting: boolean
}

export function HealthCareAttachedDocumentsCard({
  content,
  control,
  register,
  errors,
  isSubmitting,
}: HealthCareAttachedDocumentsCardProps) {
  /* The picked files stay in component state: nothing is uploaded until the
     booking endpoint exists, and `File` objects can't go through the Zod
     schema the rest of the form shares. */
  const [files, setFiles] = useState<File[]>([])

  const { field: documents } = useController({ control, name: "documents" })

  function toggleDocument(id: string, checked: boolean) {
    documents.onChange(
      checked
        ? [...documents.value, id]
        : documents.value.filter((value) => value !== id)
    )
  }

  return (
    <SurfaceCard>
      <h2 className="text-lg font-extrabold text-neutral-950 sm:text-xl">
        {content.title}
      </h2>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {content.options.map((option) => {
          const id = `document-${option.id}`

          return (
            <div key={option.id} className="flex items-start gap-3">
              <Checkbox
                id={id}
                checked={documents.value.includes(option.id)}
                onCheckedChange={(checked) =>
                  toggleDocument(option.id, checked === true)
                }
                className="mt-0.5 size-5 border-neutral-300 data-checked:border-brand data-checked:bg-brand data-checked:text-white"
              />
              <Label
                htmlFor={id}
                className="text-sm leading-6 font-normal text-neutral-600 sm:text-base"
              >
                {option.label}
              </Label>
            </div>
          )
        })}
      </div>

      <label className="mt-6 flex h-24 cursor-pointer items-center justify-center gap-2 rounded-md border-2 border-dashed border-brand/45 bg-white text-brand transition-colors focus-within:ring-3 focus-within:ring-brand/10 hover:bg-brand/5">
        <Download aria-hidden="true" className="size-5" />
        <span className="text-sm font-semibold sm:text-base">
          {content.uploadLabel}
        </span>
        <input
          type="file"
          multiple
          className="sr-only"
          onChange={(event) => {
            const picked = Array.from(event.target.files ?? [])
            if (picked.length > 0)
              setFiles((current) => [...current, ...picked])
            /* Cleared so re-picking the same file still fires `change`. */
            event.target.value = ""
          }}
        />
      </label>

      {files.length > 0 ? (
        <>
          <p className="mt-4 text-sm font-bold text-neutral-950">
            {content.selectedFilesLabel}
          </p>
          <ul className="mt-2 space-y-2">
            {files.map((file, index) => (
              <li
                key={`${file.name}-${index}`}
                className="flex items-center justify-between gap-3 rounded-md bg-neutral-100 px-4 py-2.5 text-sm text-neutral-700"
              >
                <span className="truncate">{file.name}</span>
                <button
                  type="button"
                  onClick={() =>
                    setFiles((current) =>
                      current.filter((_, position) => position !== index)
                    )
                  }
                  className="flex shrink-0 items-center gap-1.5 text-sm font-medium text-red-600 hover:text-red-700"
                >
                  <X aria-hidden="true" className="size-4" />
                  {content.removeFileLabel}
                  <span className="sr-only">{` — ${file.name}`}</span>
                </button>
              </li>
            ))}
          </ul>
        </>
      ) : null}

      <div className="mt-6">
        <FormField
          id="notes"
          label={content.notesLabel}
          error={errors.notes?.message}
        >
          <Textarea
            id="notes"
            rows={3}
            placeholder={content.notesPlaceholder}
            className="min-h-24 rounded-md border-transparent bg-neutral-100 px-4 py-3 text-base text-neutral-900 shadow-none transition placeholder:text-neutral-400 focus-visible:border-brand focus-visible:bg-white focus-visible:ring-3 focus-visible:ring-brand/10 aria-invalid:border-red-500 aria-invalid:bg-red-50/50"
            aria-invalid={Boolean(errors.notes)}
            {...register("notes")}
          />
        </FormField>
      </div>

      <div className="mt-6 flex flex-wrap justify-start gap-3">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-14 min-w-44 rounded-md bg-brand px-8 text-base font-semibold text-white hover:bg-brand-strong"
        >
          {content.submitLabel}
        </Button>

        <Button
          asChild
          variant="outline"
          className="h-14 min-w-40 rounded-md border-brand/40 bg-white px-8 text-base font-semibold text-neutral-700 hover:bg-brand/5"
        >
          <Link href={content.backHref}>{content.backLabel}</Link>
        </Button>
      </div>
    </SurfaceCard>
  )
}
