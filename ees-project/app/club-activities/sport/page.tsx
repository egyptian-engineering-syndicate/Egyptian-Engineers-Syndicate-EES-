import { readItems } from "@directus/sdk";
import { directus } from "@/lib/directus";

interface ClubActivity {
  id: string | number;
  title: string;
  description?: string | null;
  image?: string | null;
  type?: unknown;
  sort?: number | null;
}

interface SportsActivityProps {
  clubId?: string | number;
}

function getActivityType(type: unknown): string {
  if (typeof type === "string") {
    return type;
  }

  if (Array.isArray(type)) {
    return String(type[0] ?? "");
  }

  if (type && typeof type === "object") {
    const value = type as Record<string, unknown>;

    return String(
      value.value ??
      value.key ??
      value.label ??
      "",
    );
  }

  return "";
}

export default async function SportsActivity({
  clubId,
}: SportsActivityProps) {
  if (!clubId) {
    return null;
  }

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

  console.log("SPORTS RAW:", activities);
  console.log("CURRENT CLUB ID:", clubId);
} catch (error) {
  console.error("SPORTS ACTIVITIES ERROR:", error);
  return null;
}

console.log("SPORTS ALL ACTIVITIES:", activities);

const sportsActivities = activities.filter(
  (activity) =>
    getActivityType(activity.type) === "sports",
);

console.log(
  "SPORTS FILTERED:",
  sportsActivities,
);

const sportsActivity =
  sportsActivities[0] ?? null;

const sportsCards = sportsActivity
  ? Array.from(
      { length: 6 },
      (_, index) => ({
        ...sportsActivity,
        repeatIndex: index,
      }),
    )
  : [];

if (!sportsActivity) {
  return null;
}

  return (
    <section className="relative w-full overflow-hidden bg-white py-24">

      {/* GREEN BACKGROUND */}
      <div
        className="
          absolute
          left-0
          right-0
          top-1/2
          z-0
          h-[45%]
          -translate-y-1/2
          bg-[#008C54]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4">

        {/* TITLE */}
        <div className="mb-6 text-center">
          <div className="flex flex-col items-center justify-center">

            <h2
              className="
                text-3xl
                font-bold
                text-[#242424]
                lg:text-4xl
              "
            >
              النشاط الرياضي
            </h2>

            <p
              className="
                mt-3
                max-w-2xl
                text-center
                text-sm
                leading-7
                text-[#464646]
              "
            >
              المذكرة الإيضاحية هي مذكرة مختصرة
              للقانون لعرضها من وكيل مجلس الشعب
              لأخذ الموافقة عليها من رئيس السلطة
              التنفيذية.
            </p>

          </div>
        </div>

        {/* BIG CARD */}
        <div
          className="
            relative
            z-10
            border-2
            border-[#008C54]
            bg-white
            px-5
            py-8
            shadow-2xl
            lg:px-8
            lg:py-9
          "
        >

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-[1fr_auto_1fr]
            "
          >

            {/* RIGHT */}
            <div className="flex flex-col gap-5">

              {sportsCards
                .slice(0, 3)
                .map((activity, index) => (
                  <article
                    key={`${activity.id}-${activity.repeatIndex}`}
                    className={`
                      relative
                      px-6
                      py-8
                      text-center
                      ${
                        index !== 2
                          ? "border-b border-[#D9D9D9]"
                          : ""
                      }
                    `}
                  >

                    {/* BALL */}
                    <div className="mb-3 flex justify-center">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-9 w-9"
                        aria-hidden="true"
                      >
                        <path
                          d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 2c1.5 0 2.9.4 4.1 1.2l-1.1 2.3-3-.1-1.5-2.2A8 8 0 0 0 12 4Zm-5.6 3.3 1.9 1.8-.8 2.8-2.7.8A8 8 0 0 1 6.4 7.3Zm-.1 6.9 2.7.7.8 2.8-1.9 1.8a8 8 0 0 1-1.6-5.3Zm5.7 5.7 1.1-2.5h2.7l1.2 2.4a8 8 0 0 1-5 0Zm6-2.1-2-1.8.9-2.8 2.8-.7a8 8 0 0 1-1.7 5.3Zm1.7-7.4-2.8-.7-.8-2.8 1.8-1.8a8 8 0 0 1 1.8 5.3Z"
                          fill="#038653"
                        />
                      </svg>
                    </div>

                    <h3
                      className="
                        text-xl
                        font-bold
                        leading-8
                        text-[#0F3D66]
                      "
                    >
                      {activity.title}
                    </h3>

                    {activity.description && (
                      <p
                        className="
                          mx-auto
                          mt-3
                          max-w-[90%]
                          text-center
                          text-sm
                          leading-7
                          text-[#464646]
                        "
                      >
                        {activity.description}
                      </p>
                    )}

                  </article>
                ))}
            </div>

            {/* CENTER */}
            <div
              className="
                relative
                hidden
                min-h-full
                w-24
                items-center
                justify-center
                lg:flex
              "
            >

              <div
                className="
                  absolute
                  left-1/2
                  top-[18%]
                  bottom-[18%]
                  w-[2px]
                  -translate-x-1/2
                  bg-[#008C54]/20
                "
              />

              <div
                className="
                  absolute
                  top-[30%]
                  z-20
                  h-7
                  w-7
                  -translate-y-1/2
                  rounded-full
                  bg-[#008C54]
                  shadow-md
                  ring-8
                  ring-white
                "
              />

              <div
                className="
                  absolute
                  top-[70%]
                  z-20
                  h-7
                  w-7
                  -translate-y-1/2
                  rounded-full
                  bg-[#008C54]
                  shadow-md
                  ring-8
                  ring-white
                "
              />
            </div>

            {/* LEFT */}
            <div className="flex flex-col gap-5">

              {sportsCards
                .slice(3, 6)
                .map((activity, index) => (
                  <article
                    key={`${activity.id}-${activity.repeatIndex}`}
                    className={`
                      relative
                      px-6
                      py-8
                      text-center
                      ${
                        index !== 2
                          ? "border-b border-[#D9D9D9]"
                          : ""
                      }
                    `}
                  >

                    <div className="mb-3 flex justify-center">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-9 w-9"
                        aria-hidden="true"
                      >
                        <path
                          d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 2c1.5 0 2.9.4 4.1 1.2l-1.1 2.3-3-.1-1.5-2.2A8 8 0 0 0 12 4Zm-5.6 3.3 1.9 1.8-.8 2.8-2.7.8A8 8 0 0 1 6.4 7.3Zm-.1 6.9 2.7.7.8 2.8-1.9 1.8a8 8 0 0 1-1.6-5.3Zm5.7 5.7 1.1-2.5h2.7l1.2 2.4a8 8 0 0 1-5 0Zm6-2.1-2-1.8.9-2.8 2.8-.7a8 8 0 0 1-1.7 5.3Zm1.7-7.4-2.8-.7-.8-2.8 1.8-1.8a8 8 0 0 1 1.8 5.3Z"
                          fill="#038653"
                        />
                      </svg>
                    </div>

                    <h3
                      className="
                        text-xl
                        font-bold
                        leading-8
                        text-[#0F3D66]
                      "
                    >
                      {activity.title}
                    </h3>

                    {activity.description && (
                      <p
                        className="
                          mx-auto
                          mt-3
                          max-w-[90%]
                          text-center
                          text-sm
                          leading-7
                          text-[#464646]
                        "
                      >
                        {activity.description}
                      </p>
                    )}

                  </article>
                ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}