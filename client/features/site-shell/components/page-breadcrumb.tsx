import Link from "next/link"
import { ChevronLeft, House } from "lucide-react"

import type { BreadcrumbItem } from "../types/site-shell.types"

interface PageBreadcrumbProps {
  items: BreadcrumbItem[]
}

export function PageBreadcrumb({ items }: PageBreadcrumbProps) {
  return (
    <section className="ees-green-pattern text-white">
      <div className="mx-auto flex h-[74px] w-full max-w-[1640px] items-center px-5 sm:px-8 lg:px-14">
        <nav aria-label="مسار الصفحة">
          <ol className="flex items-center gap-2 text-sm sm:text-base">
            {items.map((item, index) => {
              const isLast = index === items.length - 1

              return (
                <li key={item.label} className="flex items-center gap-2">
                  {index === 0 ? (
                    <House
                      aria-hidden="true"
                      className="size-5"
                      strokeWidth={1.8}
                    />
                  ) : null}
                  {item.href && !isLast ? (
                    <Link href={item.href} className="hover:underline">
                      {item.label}
                    </Link>
                  ) : (
                    <span
                      className={isLast ? "font-semibold" : undefined}
                      aria-current={isLast ? "page" : undefined}
                    >
                      {item.label}
                    </span>
                  )}
                  {!isLast ? (
                    <ChevronLeft aria-hidden="true" className="size-5" />
                  ) : null}
                </li>
              )
            })}
          </ol>
        </nav>
      </div>
    </section>
  )
}
