"use client"

import { useId, useMemo, useState } from "react"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { normalizeArabicText } from "@/lib/arabic-text"

import type { NewsPageContent } from "../types/news-content.types"
import { NewsCard } from "./news-card"

const PAGE_SIZE = 16

interface NewsGridProps {
  content: NewsPageContent
}

export function NewsGrid({ content }: NewsGridProps) {
  const searchInputId = useId()
  const [query, setQuery] = useState("")
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  const matchingArticles = useMemo(() => {
    const term = normalizeArabicText(query)

    if (!term) return content.articles

    return content.articles.filter((article) =>
      normalizeArabicText(`${article.title} ${article.excerpt}`).includes(term)
    )
  }, [content.articles, query])

  const visibleArticles = matchingArticles.slice(0, visibleCount)

  return (
    <>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-extrabold text-neutral-950 sm:text-4xl">
          {content.title}
        </h1>
        <div className="relative w-full sm:max-w-80">
          <Label htmlFor={searchInputId} className="sr-only">
            {content.searchLabel}
          </Label>
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 start-4 my-auto size-5 text-neutral-400"
            strokeWidth={1.8}
          />
          <Input
            id={searchInputId}
            type="search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value)
              setVisibleCount(PAGE_SIZE)
            }}
            placeholder={content.searchPlaceholder}
            className="h-12 rounded-lg border-neutral-200 bg-white ps-12 text-base placeholder:text-neutral-400"
          />
        </div>
      </div>

      {visibleArticles.length > 0 ? (
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:gap-7">
          {visibleArticles.map((article) => (
            <li key={article.id}>
              <NewsCard
                article={article}
                detailsLabel={content.detailsLabel}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-10 text-sm text-neutral-500">{content.noResultsMessage}</p>
      )}

      {visibleCount < matchingArticles.length ? (
        <div className="mt-10 flex justify-center">
          <Button
            variant="outline"
            onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
            className="h-12 rounded-md border-neutral-200 bg-white px-10 text-base font-medium text-neutral-700"
          >
            {content.loadMoreLabel}
          </Button>
        </div>
      ) : null}
    </>
  )
}
