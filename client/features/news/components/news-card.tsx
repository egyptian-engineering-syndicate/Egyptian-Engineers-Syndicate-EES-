import Link from "next/link"
import Image from "next/image"

import { Card } from "@/components/ui/card"

import type { NewsArticle } from "../types/news-content.types"

interface NewsCardProps {
  article: NewsArticle
  detailsLabel: string
}

export function NewsCard({ article, detailsLabel }: NewsCardProps) {
  return (
    <Card className="h-full gap-0 overflow-hidden rounded-xl bg-white py-0 shadow-[0_12px_28px_rgba(0,0,0,.06)] ring-0">
      <div className="relative aspect-[16/10]">
        <Image
          src={article.image.src}
          alt={article.image.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col px-5 py-4">
        <h3 className="line-clamp-2 text-base font-extrabold text-neutral-950 sm:text-lg">
          {article.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-neutral-500">
          {article.excerpt}
        </p>
        <div className="mt-auto pt-4">
          <Link
            href={article.detailsHref}
            className="text-sm font-medium text-neutral-500 transition-colors hover:text-brand"
          >
            {detailsLabel}
            <span className="sr-only"> — {article.title}</span>
          </Link>
        </div>
      </div>
    </Card>
  )
}
