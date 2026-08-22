import Image from "next/image";
import Link from "next/link";
import { readItems } from "@directus/sdk";
import { directus, getAssetUrl } from "@/lib/directus";

interface Clubs {
  id: string | number;
  name: string;
  slug: string;
  description?: string | null;
  image?: string | null;
  sort?: number | null;
}

interface Clubs_Top {
  id: string | number;
  title: string;
  description?: string | null;
  image?: string | null;
  sort?: number | null;
}

export default async function Clubs() {
  let clubs: Clubs[] = [];
  let clubs_Top: Clubs_Top[] = [];
  try {
    clubs = await directus.request(
      readItems("clubs", {
        fields: [
          "id",
          "name",
          "slug",
          "description",
          "image",
          "sort",
        ],
        sort: ["sort"],
      })
    );

    console.log("CLUBS DATA:", clubs);
  } catch (error) {
    console.error("CLUBS DIRECTUS ERROR:", error);
    clubs = [];
  }
  try {
    clubs_Top = await directus.request(
      readItems("clubs_Top", {
        fields: [
          "id",
          "title",
          "description",
          "image",
          "sort",
        ],

        filter: {
          clubs: {
            _null: true,
          },
        },

        sort: ["sort"],
        limit: 1,
      })
    );

    console.log("CLUBS TOP DATA:", clubs_Top);
  } catch (error) {
    console.error("CLUBS TOP DIRECTUS ERROR:", error);
    clubs_Top = [];
  }

  console.log("CLUBS:", clubs);
  console.log("CLUBS TOP:", clubs_Top);

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-white"
    >
      {clubs_Top.length > 0 && (
        <section className="mb-20 space-y-10">
          {clubs_Top.map((top) => (
            <div
              key={top.id}
              className="
                relative
                container
                mx-auto
                flex
                min-h-[450px]
                items-center
                px-4
                py-10
              "
            >
              {top.image ? (
                <div
                  className="
                    relative
                    ml-auto
                    h-[350px]
                    w-full
                    md:h-[420px]
                    md:w-[65%]
                  "
                >
                  <Image
                    src={getAssetUrl(top.image)}
                    alt={top.title}
                    fill
                    unoptimized
                    className="
                      rounded-xl
                      object-cover
                    "
                    sizes="
                      (max-width: 768px) 100vw,
                      65vw
                    "
                  />
                </div>
              ) : (
                <div
                  className="
                    ml-auto
                    flex
                    h-[420px]
                    w-full
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gray-100
                    text-gray-400
                    md:w-[65%]
                  "
                >
                  لا توجد صورة
                </div>
              )}
              <div
                className="
                  absolute
                  left-0
                  z-10
                  w-[55%]
                  bg-white
                  p-9
                  shadow-xl
                  md:p-10
                  lg:w-[48%]
                "
              >
                <h2
                  className="
                    mb-5
                    text-2xl
                    font-bold
                    text-[#242424]
                    md:text-3xl
                  "
                >
                  {top.title}
                </h2>

                {top.description && (
                  <p
                    className="
                      mt-2
                      line-clamp-9
                      text-xs
                      leading-7
                      text-[#464646]
                    "
                  >
                    {top.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </section>
      )}
      <section className="w-full bg-[#E9E9E9]">

        {/* TITLE */}

        <div className="mb-10">
          <h1
            className="
              px-6
              pt-9
              text-4xl
              font-bold
              text-[#242424]
              lg:pr-36
            "
          >
            فروع الأندية
          </h1>
        </div>

        {clubs.length > 0 ? (
          <div
            className="
              container
              mx-auto
              grid
              grid-cols-1
              gap-8
              px-4
              py-10
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >

            {clubs.map((club) => (
              <Link
                key={club.id}
                href={`/clubs/${club.slug}`}
                className="
                  block
                  overflow-hidden
                  rounded-xl
                  bg-white
                  shadow-md
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >
                {club.image ? (
                  <div className="relative h-[200px] w-full">
                    <Image
                      src={getAssetUrl(club.image)}
                      alt={club.name}
                      fill
                      unoptimized
                      className="object-cover"
                      sizes="
                        (max-width: 640px) 100vw,
                        (max-width: 1024px) 50vw,
                        33vw
                      "
                    />
                  </div>
                ) : (
                  <div
                    className="
                      flex
                      h-[240px]
                      items-center
                      justify-center
                      bg-gray-100
                      text-gray-400
                    "
                  >
                    لا توجد صورة
                  </div>
                )}
                <div className="p-5">

                  <h2
                    className="
                      mb-2
                      text-xl
                      font-bold
                      text-[#0F3D66]
                    "
                  >
                    {club.name}
                  </h2>

                  <section className="border-b bg-white pb-2">
                    {club.description && (
                      <p
                        className="
                          line-clamp-2
                          text-sm
                          leading-6
                          text-gray-600
                        "
                      >
                        {club.description}
                      </p>
                    )}
                  </section>

                  <div className="mt-4 flex justify-end">
                    <span
                      className="
                        text-xs
                        font-semibold
                        text-[#515151]
                      "
                    >
                      تعرف على المزيد ←
                    </span>
                  </div>

                </div>
              </Link>
            ))}

          </div>
        ) : (
          <div className="py-20 text-center text-gray-500">
            لا توجد أندية حاليًا
          </div>
        )}

      </section>

    </main>
  );
}