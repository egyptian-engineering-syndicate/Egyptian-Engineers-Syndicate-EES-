import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { readItems } from "@directus/sdk";
import { directus, getAssetUrl } from "@/lib/directus";
import Cultural from "@/app/club-activities/cultural/page";
import SportsActivity from "@/app/club-activities/sport/page";


interface ClubTop {
  id: string | number;
  title: string;
  description?: string | null;
  image?: string | null;
  sort?: number | null;
  clubs?: {
    id: string | number;
    name: string;
    slug: string;
  } | null;
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ClubDetailsPage({
  params,
}: PageProps) {
  const { slug } = await params;

  let clubTops: ClubTop[] = [];

  try {
    clubTops = (await directus.request(
      readItems("clubs_Top", {
        fields: [
          "id",
          "title",
          "description",
          "image",
          "sort",
          {
            clubs: [
              "id",
              "name",
              "slug",
            ],
          },
        ],

        filter: {
          clubs: {
            slug: {
              _eq: slug,
            },
          },
        },

        sort: ["sort"],
        limit: 1,
      }),
    )) as ClubTop[];
  } catch (error) {
    console.error("ERROR FETCHING CLUB TOP:", error);
    notFound();
  }

  const clubTop = clubTops[0];

  if (!clubTop) {
    notFound();
  }
const clubId = clubTop.clubs?.id;

if (!clubId) {
  console.error("CLUB ID NOT FOUND");
}
  return (
    <main
      dir="rtl"
      className="min-h-screen bg-white"
    >
      <section className="mx-auto max-w-7xl px-6 pt-8 lg:px-8">
        <Link
          href="/clubs"
          className="
            text-sm
            font-semibold
            text-[#0F3D66]
            transition
            hover:text-[#008C54]
          "
        >
          ← العودة إلى الأندية
        </Link>
      </section>
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative mx-auto max-w-6xl">

          {/* GREEN BACKGROUND */}

          <div
            className="
              absolute
              left-1/2
              right-1/2
              top-1/2
              z-0
              h-[45%]
              -translate-y-1/2
              translate-x-1/2
              bg-[#008C54]
              lg:left-0
              lg:right-0
            "
          />

          {/* CONTENT */}

          <div
            className="
              relative
              z-10
              grid
              grid-cols-1
              items-center
              gap-8
              lg:grid-cols-2
              lg:gap-12
            "
          >

            {/* IMAGE - RIGHT */}

            <div
              className="
                relative
                order-1
                h-[420px]
                w-full
                lg:h-[620px]
              "
            >
              {clubTop.image ? (
                <Image
                  src={getAssetUrl(clubTop.image)}
                  alt={clubTop.title}
                  fill
                  unoptimized
                  priority
                  className="
                    relative
                    z-10
                    object-contain
                    p-2
                  "
                  sizes="
                    (max-width: 1024px) 100vw,
                    50vw
                  "
                />
              ) : (
                <div
                  className="
                    relative
                    z-10
                    flex
                    h-full
                    items-center
                    justify-center
                    bg-gray-100
                    text-sm
                    text-gray-400
                  "
                >
                  لا توجد صورة
                </div>
              )}
            </div>

            {/* POST - LEFT */}

            <article
              className="
                relative
                z-10
                order-2
                bg-white
                px-7
                py-9
                shadow-md
                lg:min-h-[380px]
                lg:px-6
                lg:py-12
              "
            >
              <h1
                className="
                  text-4xl
                  font-bold
                  leading-relaxed
                  text-[#242424]
                  lg:text-4xl
                "
              >
                {clubTop.title}
              </h1>

              {clubTop.description && (
                <p
                  className="
                    mt-6
                    text-base
                    leading-7
                    text-[#3E3E3E]
                  "
                >
                  {clubTop.description}
                </p>
              )}
            </article>

          </div>
        </div>
      </section>
     <Cultural clubId={clubId} />
     <SportsActivity clubId={clubId} />
    </main>
  );
}