"use client"

import { useState } from "react"
import { Download, X } from "lucide-react"
import {
  useController,
  type Control,
} from "react-hook-form"

import { SurfaceCard } from "@/components/surface-card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

import type { PracticeApplyFormValues } from "../schemas/practice-apply.schema"
import type { PracticeApplyPageContent } from "../types/practice-content.types"

interface PracticeDocumentsCardProps {
  content: PracticeApplyPageContent["documents"]
  control: Control<PracticeApplyFormValues>
}

export function PracticeDocumentsCard({
  content,
  control,
}: PracticeDocumentsCardProps) {
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

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {content.options.map((option) => {
          const id = `practice-document-${option.id}`

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

      <label className="mt-6 flex h-24 cursor-pointer items-center justify-center gap-2 rounded-md border-2 border-dashed border-brand/45 bg-white text-brand transition-colors hover:bg-brand/5 focus-within:ring-3 focus-within:ring-brand/10">
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
    </SurfaceCard>
  )
}
