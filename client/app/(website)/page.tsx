import type { Metadata } from "next"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { registerPageContent } from "@/features/auth"
import { siteShellContent } from "@/features/site-shell"

export const metadata: Metadata = {
  title: siteShellContent.brand.name,
  description: siteShellContent.brand.description,
}

export default function HomePage() {
  const { brand, login } = siteShellContent

  return (
    <main>
      <section className="ees-green-pattern text-white">
        <div className="mx-auto flex min-h-[420px] w-full max-w-[1640px] flex-col justify-center px-5 py-20 sm:px-8 lg:px-14">
          <h1 className="max-w-3xl text-[clamp(2.25rem,4vw,3.75rem)] leading-tight font-extrabold">
            {brand.name}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
            {brand.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              className="h-12 rounded-md bg-white px-7 text-base font-semibold text-brand hover:bg-white/90"
            >
              <Link href={login.href}>{login.label}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-md border-white/40 bg-transparent px-7 text-base font-semibold text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/register">{registerPageContent.title}</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
