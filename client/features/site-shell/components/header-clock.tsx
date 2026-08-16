"use client"

import { useEffect, useRef } from "react"
import { CalendarDays, Clock3 } from "lucide-react"

export function HeaderClock() {
  const dateRef = useRef<HTMLSpanElement>(null)
  const timeRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    function updateClock() {
      const now = new Date()
      if (dateRef.current) {
        dateRef.current.textContent = new Intl.DateTimeFormat("ar-EG", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }).format(now)
      }
      if (timeRef.current) {
        timeRef.current.textContent = new Intl.DateTimeFormat("ar-EG", {
          hour: "numeric",
          minute: "2-digit",
        }).format(now)
      }
    }

    updateClock()
    const timer = window.setInterval(updateClock, 60_000)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <div className="flex items-center gap-5 text-xs font-semibold text-neutral-800 sm:text-sm">
      <span className="flex items-center gap-2 whitespace-nowrap">
        <CalendarDays aria-hidden="true" className="size-5 text-brand" />
        <span ref={dateRef}>—</span>
      </span>
      <span className="hidden items-center gap-2 whitespace-nowrap sm:flex">
        <Clock3 aria-hidden="true" className="size-5 text-brand" />
        <span ref={timeRef}>—</span>
      </span>
    </div>
  )
}
