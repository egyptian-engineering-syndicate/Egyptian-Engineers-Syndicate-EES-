"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function scrollToPageHash(href: string, delayMs = 80) {
  const id = href.split("#")[1]
  if (!id) return

  window.setTimeout(() => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }, delayMs)
}

export function HashScroll() {
  const pathname = usePathname()

  useEffect(() => {
    scrollToPageHash(window.location.hash, 80)
  }, [pathname])

  useEffect(() => {
    function onHashChange() {
      scrollToPageHash(window.location.hash, 0)
    }

    window.addEventListener("hashchange", onHashChange)
    return () => window.removeEventListener("hashchange", onHashChange)
  }, [])

  return null
}
