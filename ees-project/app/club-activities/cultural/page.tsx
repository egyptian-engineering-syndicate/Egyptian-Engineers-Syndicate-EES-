import Image from "next/image";
import { readItems } from "@directus/sdk";
import { directus, getAssetUrl } from "@/lib/directus";

interface ClubActivity {
  id: string | number;
  title: string;
  description?: string | null;
  image?: string | null;
  type?: unknown;
  sort?: number | null;
  club?: unknown;
}

interface CulturalProps {
  clubId?: string | number;
}

function getActivityType(type: unknown): string {
  if (type === null || type === undefined) {
    return "";
  }

  // String عادي
  if (typeof type === "string") {
    const value = type.trim();

    // لو القيمة نفسها JSON string
    try {
      const parsed = JSON.parse(value);

      if (typeof parsed === "string") {
        return parsed.trim().toLowerCase();
      }

      if (Array.isArray(parsed)) {
        return String(parsed[0] ?? "")
          .trim()
          .toLowerCase();
      }

      if (parsed && typeof parsed === "object") {
        const obj = parsed as Record<string, unknown>;

        return String(
          obj.value ??
            obj.key ??
            obj.label ??
            "",
        )
          .trim()
          .toLowerCase();
      }
    } catch {
      // ليست JSON، نستخدم القيمة كما هي
    }

    return value.toLowerCase();
  }

  // Array
  if (Array.isArray(type)) {
    const firstValue = type[0];

    if (typeof firstValue === "string") {
      return firstValue.trim().toLowerCase();
    }

    if (
      firstValue &&
      typeof firstValue === "object"
    ) {
      const obj = firstValue as Record<
        string,
        unknown
      >;

      return String(
        obj.value ??
          obj.key ??
          obj.label ??
          "",
      )
        .trim()
        .toLowerCase();
    }
  }

  // Object
  if (
    type &&
    typeof type === "object"
  ) {
    const obj = type as Record<
      string,
      unknown
    >;

    return String(
      obj.value ??
        obj.key ??
        obj.label ??
        "",
    )
      .trim()
      .toLowerCase();
  }

  return "";
}

export default async function Cultural({
  clubId,
}: CulturalProps) {
  let activities: ClubActivity[] = [];

  try {
    activities = (await directus.request(
      readItems("club_activities", {
        fields: [
          "id",
          "title",
          "description",
          "image",
          "type",
          "sort",
          "club",
        ],
        sort: ["sort"],
        limit: 20,
      }),
    )) as ClubActivity[];

    console.log(
      "CULTURAL RAW:",
      activities,
    );

    console.log(
      "CURRENT CLUB ID:",
      clubId,
    );

    activities.forEach((activity) => {
      console.log(
        "ACTIVITY:",
        activity.title,
        "TYPE RAW:",
        activity.type,
        "TYPE NORMALIZED:",
        getActivityType(activity.type),
      );
    });
  } catch (error) {
    console.error(
      "CULTURAL ACTIVITIES ERROR:",
      error,
    );

    return null;
  }
  const culturalActivities =
    activities.filter(
      (activity) =>
        getActivityType(activity.type) ===
        "cultural",
    );

  console.log(
    "CULTURAL FILTERED:",
    culturalActivities,
  );
  const culturalActivity =
    culturalActivities[0] ?? null;

  /*
   * تكرار نفس الداتا 4 مرات
   */
  const culturalCards =
    culturalActivity
      ? Array.from(
          { length: 4 },
          (_, index) => ({
            ...culturalActivity,
            repeatIndex: index,
          }),
        )
      : [];
  if (!culturalActivity) {
    console.log(
      "NO CULTURAL ACTIVITY FOUND",
    );

    return null;
  }

  return (
    <section className="w-full bg-[#F3F3F3] py-20">
      <div className="container mx-auto px-4">

        <div
          className="
            grid
            grid-cols-1
            gap-8
            lg:grid-cols-[1.1fr_0.9fr]
          "
        >
          <div
            className="
              order-2
              flex
              flex-col
              lg:order-1
            "
          >

            <div className="mb-6">
              <h2
                className="
                  text-4xl
                  font-bold
                  text-[#242424]
                "
              >
                النشاط الثقافي
              </h2>
            </div>

            <div className="flex flex-col gap-5">

              {culturalCards.map(
                (activity) => (
                  <article
                    key={`${activity.id}-${activity.repeatIndex}`}
                    className="
                      flex
                      min-h-[110px]
                      flex-1
                      flex-col
                      justify-center
                      rounded-xl
                      bg-white
                      px-6
                      py-5
                      shadow-sm
                      transition
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-md
                    "
                  >

                    <h3
                      className="
                        text-lg
                        font-bold
                        leading-7
                        text-[#242424]
                      "
                    >
                      {activity.title}
                    </h3>

                    {activity.description && (
                      <p
                        className="
                          mt-2
                          line-clamp-2
                          text-sm
                          leading-6
                          text-[#3E3E3E]
                        "
                      >
                        {activity.description}
                      </p>
                    )}

                  </article>
                ),
              )}

            </div>
          </div>
          <div
            className="
              relative
              order-1
              min-h-[500px]
              overflow-hidden
              rounded-xl
              lg:order-2
            "
          >
            {culturalActivity.image ? (
              <Image
                src={getAssetUrl(
                  culturalActivity.image,
                )}
                alt={
                  culturalActivity.title
                }
                fill
                unoptimized
                className="object-cover"
                sizes="
                  (max-width: 1024px) 100vw,
                  40vw
                "
              />
            ) : (
              <div
                className="
                  flex
                  h-full
                  min-h-[500px]
                  items-center
                  justify-center
                  rounded-xl
                  bg-gray-100
                  text-gray-400
                "
              >
                لا توجد صورة
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}