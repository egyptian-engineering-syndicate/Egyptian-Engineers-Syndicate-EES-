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

export default async function CommitteeDetailsPage({
  params,
}: PageProps) {
  const { slug } = await params;

  // =========================
  // GET COMMITTEE
  // =========================

  const committees = (await directus.request(
    readItems("committees", {
      fields: [
        "id",
        "name",
        "slug",
        "description",
        "image",
      ],
      filter: {
        slug: {
          _eq: slug,
        },
        status: {
          _eq: true,
        },
      },
      limit: 1,
    })
  )) as Committee[];

  const committee = committees[0];

  if (!committee) {
    notFound();
  }

  // =========================
  // GET COMMITTEE MEMBERS
  // =========================

  const members = (await directus.request(
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
    })
  )) as CommitteeMember[];

  // أول عضوين
  const topMembers = members.slice(0, 2);

  // الأربعة اللي تحت
  // لو عندك عضوين فقط => 1,2,1,2
  // لو عندك 4 أعضاء => 1,2,3,4
  const bottomMembers = Array.from({ length: 4 }, (_, index) => {
    return members[index % members.length];
  });

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-white"
    >
      {/* =========================
          BACK
      ========================= */}

      <section className="mx-auto max-w-7xl px-6 pt-8 lg:px-8">
        <Link
          href="/committees"
          className="text-sm font-semibold text-[#0F3D66] transition hover:text-emerald-700"
        >
          ← العودة إلى اللجان
        </Link>
      </section>

      {/* =========================
          COMMITTEE DETAILS
      ========================= */}

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">

          {/* =========================
              COMMITTEE IMAGE
          ========================= */}

          <div className="relative h-[300px] w-full overflow-hidden lg:h-[600px]">

            {committee.image ? (
              <Image
                src={getAssetUrl(committee.image)}
                alt={committee.name}
                fill
                unoptimized
                className="object-contain p-8"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-gray-400">
                لا توجد صورة
              </div>
            )}

          </div>

          {/* =========================
              COMMITTEE INFO
          ========================= */}

          <div>

            {/* TITLE */}

            <h1 className="text-3xl font-bold leading-relaxed text-[#0F3D66]">
              {committee.name}
            </h1>

            <div className="mt-3 h-1 w-16 rounded-full bg-emerald-600" />

            {/* DESCRIPTION */}

            {committee.description && (
              <p className="mt-5 text-sm leading-7 text-gray-600">
                {committee.description}
              </p>
            )}

            {/* =========================
                COMMITTEE MEMBERS TITLE
            ========================= */}

            {topMembers.length > 0 && (
              <div className="mt-7">

                <h2 className="text-3xl font-bold leading-relaxed text-[#0F3D66]">
                  أعضاء اللجنة
                </h2>

                <div className="mt-3 h-1 w-16 rounded-full bg-emerald-600" />

                {/* =========================
                    FIRST TWO MEMBERS
                ========================= */}

                <div className="mt-5 grid grid-cols-2 gap-4">

                  {topMembers.map((member) => {
                    const imageUrl = member.image
                      ? getAssetUrl(member.image)
                      : null;

                    return (
                      <div
                        key={member.id}
                        className="group mx-auto w-full max-w-[190px] overflow-hidden rounded-xl bg-gray-100 shadow-sm"
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

                        {/* MEMBER INFO */}
{/* 
                        {(member.name || member.position) && (
                          <div className="p-2 text-center">

                            {member.name && (
                              <h3 className="text-xs font-bold text-[#0F3D66] sm:text-sm">
                                {member.name}
                              </h3>
                            )}

                            {member.position && (
                              <p className="mt-1 text-[11px] text-gray-500 sm:text-xs">
                                {member.position}
                              </p>
                            )}

                          </div>
                        )} */}

                      </div>
                    );
                  })}

                </div>

              </div>
            )}

          </div>

        </div>

        {/* =========================
            BOTTOM MEMBERS
            4 CARDS
        ========================= */}

        {members.length > 0 && (
          <div className="mt-10">

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">

              {bottomMembers.map((member, index) => {
                const imageUrl = member.image
                  ? getAssetUrl(member.image)
                  : null;

                return (
                  <div
                    key={`${member.id}-${index}`}
                    className="group mx-auto w-full max-w-[210px] overflow-hidden rounded-xl bg-gray-100 shadow-sm"
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
                          sizes="(max-width: 640px) 45vw, 210px"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-xs text-gray-400">
                          لا توجد صورة
                        </div>
                      )}

                    </div>

                    {/* MEMBER INFO */}

                    {/* {(member.name || member.position) && (
                      <div className="p-2 text-center">

                        {member.name && (
                          <h3 className="text-xs font-bold text-[#0F3D66] sm:text-sm">
                            {member.name}
                          </h3>
                        )}

                        {member.position && (
                          <p className="mt-1 text-[11px] text-gray-500 sm:text-xs">
                            {member.position}
                          </p>
                        )}

                      </div>
                    )} */}

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