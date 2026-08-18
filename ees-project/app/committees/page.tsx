import Image from "next/image";
import Link from "next/link";
import { readItems } from "@directus/sdk";
import { directus, getAssetUrl } from "@/lib/directus";
import { Button } from "@/components/ui/button";
interface Committee {
  id: string | number;
  name: string;
  slug: string;
  description?: string | null;
  image?: string | null;
  sort?: number | null;
  status?: boolean;
}

export default async function CommitteesPage() {
  let committees: Committee[] = [];

  try {
    committees = (await directus.request(
      readItems("committees", {
        fields: [
          "id",
          "name",
          "slug",
          "description",
          "image",
          "sort",
          "status",
        ],
        filter: {
          status: {
            _eq: true,
          },
        },
        sort: ["sort"],
      })
    )) as Committee[];
  } catch {
    // Keep the existing empty-state UI available when Directus is offline.
  }

  return (
    <main dir="rtl" className="min-h-screen bg-white">

      {/* ================= HERO ================= */}
      {/* <section className="border-b bg-white"> */}
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">

          <h1 className="text-4xl font-bold text-[#181818] md:text-5xl">
            اللجان
          </h1>

          {/* <div className="mt-4 h-1 w-16 rounded-full bg-emerald-600" /> */}

        </div>
      {/* </section> */}

      {/* ================= COMMITTEES ================= */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">

        {committees.length === 0 ? (

          <div className="py-20 text-center text-gray-500">
            لا توجد لجان متاحة حاليًا
          </div>

        ) : (

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ">
            {Array.from({ length: 9 }).map((_, index) => {

              const committee = committees[0];

              if (!committee) return null;

              const imageUrl = getAssetUrl(committee.image);

              return (
                <Link
                  key={`${committee.id}-${index}`}
                  href={`/committees/${committee.slug}`}
                  className="
                    group
                    flex
                    min-h-[130px]
                    overflow-hidden
                border
                rounded-xl
                    border-gray-100
                    bg-white
                    shadow-lg
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-md
                  "
                >

                  {/* ================= IMAGE ================= */}
                  <div className="
                    relative
                    h-[160px]
                    w-[150px]
                    overflow-hidden
                  ">

                    {imageUrl ? (

                      <Image
                        src={imageUrl}
                        alt={committee.name}
                        fill
                        unoptimized
                        className="
                          object-contain
                          transition-transform
                          duration-300
                          group-hover:scale-105
                        "
                        sizes="130px"
                      />

                    ) : (

                      <div className="
                        flex
                        h-full
                        items-center
                        justify-center
                        text-xs
                        text-gray-400
                      ">
                        لا توجد صورة
                      </div>

                    )}

                  </div>

                  {/* ================= CONTENT ================= */}
                  <div className="
                    flex
                    min-w-0
                    flex-1
                    flex-col
                    justify-center
                    px-4
                  ">

                    <h2 className="
                      font-bold
                      text-2xl
                      text-[#191919]
                    ">
                      {committee.name}
                    </h2>
<section className="border-b bg-white pb-2">

                    {committee.description && (

                      <p className="
                        mt-2
                        line-clamp-3
                        text-xs
                        leading-6
                        text-[#3E3E3E]
                      ">
                        {committee.description}
                      </p>
                    )}
                    </section>

                    <div className="
                      mt-2
                      flex
                      pb-2
                      items-center
                      gap-1
                      text-xs
                      font-semibold
                      text-[#515151]
                    ">

                      <span>
                       تعرف علي المزيد
                      </span>

                      {/* <span className="
                        transition-transform
                        duration-300
                        group-hover:-translate-x-1
                      ">
                        ←
                      </span> */}

                    </div>

                  </div>

                </Link>
              );
            })}
<div className="flex relative md:right-5 md:top-30 lg:top-0 md:left-60 lg:right-90 justify-center">
  <Button
    className="mt-8 w-fit items-center justify-center gap-4 rounded-[8px] border border-gray-200 bg-white px-6 py-4 text-gray-700 hover:bg-white hover:text-gray-700"
  >
    شاهد المزيد
  </Button>
</div>

          </div>
          

        )}

      </section>
    </main>
  );
}
