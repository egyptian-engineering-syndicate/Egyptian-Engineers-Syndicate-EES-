"use client"

import { useRouter } from "next/navigation"
import { Keyboard } from "lucide-react"

import { Button } from "@/components/ui/button"

import type { NewPasswordConfirmationContent } from "../types/auth-content.types"
import { AuthPasswordField } from "./auth-form-controls"

interface NewPasswordConfirmationPanelProps {
  content: NewPasswordConfirmationContent
  nextHref: string
}

export function NewPasswordConfirmationPanel({
  content,
  nextHref,
}: NewPasswordConfirmationPanelProps) {
  const router = useRouter()

  return (
    <div className="mt-4 space-y-3">
      <AuthPasswordField
        id="new-password"
        content={content.newPassword}
        icon={Keyboard}
        showVisibilityToggle={false}
        inputProps={{
          name: "new-password",
          autoComplete: "new-password",
          placeholder: content.newPassword.placeholder,
        }}
      />

      <AuthPasswordField
        id="confirm-password"
        content={content.confirmPassword}
        icon={Keyboard}
        showVisibilityToggle={false}
        inputProps={{
          name: "confirm-password",
          autoComplete: "new-password",
          placeholder: content.confirmPassword.placeholder,
        }}
      />

      <div className="pt-2">
        <Button
          type="button"
          onClick={() => router.replace(nextHref)}
          className="h-[60px] min-w-[174px] rounded-md bg-brand px-8 text-base font-medium text-white hover:bg-brand-strong"
        >
          {content.saveLabel}
        </Button>
      </div>
    </div>
  )
}
