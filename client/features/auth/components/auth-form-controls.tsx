"use client"

import type { ComponentProps, ReactNode } from "react"
import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff, KeyRound, type LucideIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

import type { PasswordFieldContent } from "../types/auth-content.types"

interface FormFieldProps {
  id: string
  label: string
  error?: string
  children: ReactNode
}

function FormField({ id, label, error, children }: FormFieldProps) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between gap-4">
        <Label htmlFor={id} className="text-sm text-neutral-600 sm:text-base">
          {label}
        </Label>
        {error ? (
          <span
            id={`${id}-error`}
            className="text-xs font-medium text-red-600"
            role="alert"
          >
            {error}
          </span>
        ) : null}
      </div>
      <div className="relative">{children}</div>
    </div>
  )
}

interface AuthTextFieldProps {
  id: string
  label: string
  icon: LucideIcon
  error?: string
  inputProps: Omit<ComponentProps<typeof Input>, "id">
}

export function AuthTextField({
  id,
  label,
  icon: Icon,
  error,
  inputProps,
}: AuthTextFieldProps) {
  const { className, ...props } = inputProps

  return (
    <FormField id={id} label={label} error={error}>
      <Input
        {...props}
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          authInputClassName(Boolean(error)),
          "pr-14 pl-5",
          className
        )}
      />
      <Icon
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-4 size-6 -translate-y-1/2 text-brand"
        strokeWidth={1.8}
      />
    </FormField>
  )
}

interface AuthPasswordFieldProps {
  id: string
  content: PasswordFieldContent
  icon?: LucideIcon
  showVisibilityToggle?: boolean
  error?: string
  inputProps: Omit<ComponentProps<typeof Input>, "id" | "type">
}

export function AuthPasswordField({
  id,
  content,
  icon: Icon = KeyRound,
  showVisibilityToggle = true,
  error,
  inputProps,
}: AuthPasswordFieldProps) {
  const [showPassword, setShowPassword] = useState(false)
  const { className, ...props } = inputProps

  return (
    <FormField id={id} label={content.label} error={error}>
      <Input
        {...props}
        id={id}
        type={showPassword ? "text" : "password"}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          authInputClassName(Boolean(error)),
          showVisibilityToggle ? "pr-14 pl-14" : "pr-14 pl-5",
          className
        )}
      />
      <Icon
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-4 size-6 -translate-y-1/2 text-brand"
        strokeWidth={1.8}
      />
      {showVisibilityToggle ? (
        <button
          type="button"
          onClick={() => setShowPassword((visible) => !visible)}
          className="absolute top-1/2 left-4 grid size-8 -translate-y-1/2 place-items-center rounded-md text-neutral-500 transition-colors hover:bg-white hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          aria-label={
            showPassword ? content.hidePasswordLabel : content.showPasswordLabel
          }
        >
          {showPassword ? (
            <EyeOff aria-hidden="true" className="size-5" />
          ) : (
            <Eye aria-hidden="true" className="size-5" />
          )}
        </button>
      ) : null}
    </FormField>
  )
}

interface AuthFormActionsProps {
  submitLabel: string
  alternateLabel: string
  alternateHref: string
  submitting: boolean
}

export function AuthFormActions({
  submitLabel,
  alternateLabel,
  alternateHref,
  submitting,
}: AuthFormActionsProps) {
  return (
    <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-start">
      <Button
        type="submit"
        disabled={submitting}
        className="h-14 min-w-44 rounded-md bg-brand px-8 text-base font-semibold text-white hover:bg-brand-strong sm:text-lg"
      >
        {submitLabel}
      </Button>
      <Button
        asChild
        variant="outline"
        className="h-14 min-w-40 rounded-md border-neutral-300 bg-white px-8 text-base font-medium text-neutral-700 hover:border-brand hover:bg-brand/5 hover:text-brand sm:text-lg"
      >
        <Link href={alternateHref}>{alternateLabel}</Link>
      </Button>
    </div>
  )
}

function authInputClassName(invalid: boolean) {
  return cn(
    "h-16 w-full rounded-md border-transparent bg-neutral-100 text-right text-base text-neutral-900 shadow-none transition placeholder:text-neutral-400 focus-visible:border-brand focus-visible:bg-white focus-visible:ring-3 focus-visible:ring-brand/10",
    invalid &&
      "border-red-500 bg-red-50/50 focus:border-red-500 focus:ring-red-100"
  )
}
