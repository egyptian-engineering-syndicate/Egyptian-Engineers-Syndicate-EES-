import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { readItems } from "@directus/sdk";
import { directus, getAssetUrl } from "@/lib/directus";

interface Committee {
  id: string | number;
  name: string;
  slug: string;
  description?: string | null;
  image?: string | null;
}

interface CommitteeMember {
  id: string | number;
  committee: string | number;
  name?: string | null;
  position?: string | null;
  image?: string | null;
  sort?: number | null;
  status?: boolean;
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CommitteeDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  let committees: Committee[] = [];

  try {
    committees = (await directus.request(
      readItems("committees", {
        fields: ["id", "name", "slug", "description", "image"],
        filter: {
          slug: {
            _eq: slug,
          },
          status: {
            _eq: true,
          },
        },
        limit: 1,
      }),
    )) as Committee[];
  } catch {
    notFound();
  }

  const committee = committees[0];

  if (!committee) {
    notFound();
  }
  let members: CommitteeMember[] = [];

  try {
    members = (await directus.request(
      readItems("committee_members", {
        fields: [
          "id",
          "committee",
          "name",
          "position",
          "image",
          "sort",
          "status",
        ],
        filter: {
          committee: {
            _eq: committee.id,
          },
          status: {
            _eq: true,
          },
        },
        sort: ["sort"],
      }),
    )) as CommitteeMember[];
  } catch {
console.log("Error fetching committee members");
  }

  // أول عضوين
  const topMembers = members.slice(0, 2);

  const bottomMembers = Array.from({ length: 4 }, (_, index) => {
    return members[index % members.length];
  });

  return (
    <main dir="rtl" className="min-h-screen bg-white">
      <section className="mx-auto max-w-7xl px-6 pt-8 lg:px-8">
        <Link
          href="/committees"
          className="text-sm font-semibold text-[#0F3D66] transition hover:text-emerald-700"
        >
          ← العودة إلى اللجان
        </Link>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8 ">
        <div className=" grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
          <section className="relative h-[310px] w-full  bg-white lg:h-[600px]">
            <div
              className="
      absolute
      left-1/2
      top-1/2
      z-9
h-[105%]
w-[90%]
      -translate-x-1/2
      -translate-y-1/2
      rounded-md
      bg-[#008C54]
    "
            />

            {committee.image ? (
              <Image
                src={getAssetUrl(committee.image)}
                alt={committee.name}
                fill
                unoptimized
                className="relative z-90 object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            ) : (
              <div className="relative z-10 flex h-full items-center justify-center text-gray-400">
                لا توجد صورة
              </div>
            )}
          </section>
          <div>
            {/* TITLE */}

            <h1 className="text-3xl font-bold leading-relaxed text-[#0F3D66]">
              {committee.name}
            </h1>
            {/* DESCRIPTION */}

            {committee.description && (
              <p className="mt-5 text-sm leading-5 text-gray-600">
                {committee.description}
              </p>
            )}
            {topMembers.length > 0 && (
              <div className="mt-7">
                <h2 className="text-3xl font-bold leading-relaxed text-[#0F3D66]">
                  أعضاء اللجنة
                </h2>
                <div className="mt-5 relative md:left-16 grid grid-cols-2 p-8 w-[100%]">
                  {topMembers.map((member) => {
                    const imageUrl = member.image
                      ? getAssetUrl(member.image)
                      : null;

                    return (
                      <div
                        key={member.id}
                        className="group mx-auto w-full max-w-[200px] overflow-hidden rounded-xl bg-gray-100 shadow-sm"
                      >
                        {/* IMAGE */}

                        <div className="relative aspect-[4/5]  w-full">
                          {imageUrl ? (
                            <Image
                              src={imageUrl}
                              alt={member.name || "عضو اللجنة"}
                              fill
                              unoptimized
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                              sizes="190px"
                            />
                          ) : (
                            <div className="flex h-full items-center justify-center text-xs text-gray-400">
                              لا توجد صورة
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
        {members.length > 0 && (
          <div className="mt-4">
            <div className="relative md:left-14 grid grid-cols-4 p-8 w-[100%]">
              {bottomMembers.map((member, index) => {
                const imageUrl = member.image
                  ? getAssetUrl(member.image)
                  : null;

                return (
                  <div
                    key={`${member.id}-${index}`}
                    className="group mx-auto w-full max-w-[190px] overflow-hidden rounded-xl bg-gray-100 shadow-sm"
                  >
                    {/* IMAGE */}

                    <div className="relative aspect-[4/5] w-full">
                      {imageUrl ? (
                        <Image
                          src={imageUrl}
                          alt={member.name || "عضو اللجنة"}
                          fill
                          unoptimized
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 45vw, 210px"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-xs text-gray-400">
                          لا توجد صورة
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
