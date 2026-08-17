import { getDirectusImageUrl } from "./news";

export interface DirectusMemberItem {
  id: string | number;
  status: 'published' | 'draft' | 'archived' | string;
  name: string;
  position: string;
  image?: string | { id: string } | null;
}

export type MembersResult =
  | { ok: true; data: DirectusMemberItem[] }
  | { ok: false; error: string };

const DIRECTUS_URL =
  process.env.NEXT_PUBLIC_DIRECTUS_URL ||
  process.env.DIRECTUS_URL ||
  "http://localhost:8055";

const DIRECTUS_TOKEN =
  process.env.DIRECTUS_STATIC_TOKEN ||
  process.env.NEXT_PUBLIC_DIRECTUS_TOKEN ||
  "";

/**
 * Re-export helper to construct Directus image URL safely.
 */
export { getDirectusImageUrl };

/**
 * Fetch published team members from Directus collection `team_members`.
 */
export async function getMembersData(): Promise<MembersResult> {
  const baseUrls = Array.from(
    new Set([
      DIRECTUS_URL,
      DIRECTUS_URL.replace("localhost", "127.0.0.1"),
      "http://127.0.0.1:8055",
      "http://localhost:8055",
    ])
  );

  const paths = [
    "/items/team_members?filter[status][_eq]=published",
    "/items/team_members",
    "/items/Team_Members?filter[status][_eq]=published",
    "/items/Team_Members",
  ];

  const endpoints: string[] = [];
  for (const baseUrl of baseUrls) {
    for (const path of paths) {
      endpoints.push(`${baseUrl.replace(/\/$/, "")}${path}`);
    }
  }

  let lastError = "";
  const errorsLog: string[] = [];

  const headers: Record<string, string> = { Accept: "application/json" };
  if (DIRECTUS_TOKEN) {
    headers["Authorization"] = `Bearer ${DIRECTUS_TOKEN}`;
  }

  for (const endpoint of endpoints) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000);

      const response = await fetch(endpoint, {
        cache: "no-store",
        signal: controller.signal,
        headers,
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        const json = await response.json();
        const rawList = json.data || json;

        if (Array.isArray(rawList)) {
          const published = rawList
            .filter((item: any) => !item.status || item.status === "published")
            .map((item: any) => ({
              id: item.id,
              status: item.status || "published",
              name: item.name || "",
              position: item.position || "",
              image: item.image || null,
            }));

          console.log(`[Directus Members SUCCESS] Fetched ${published.length} members from ${endpoint}`);
          return { ok: true, data: published };
        }
      }

      const errDetail = `HTTP ${response.status} on ${endpoint}`;
      errorsLog.push(errDetail);
      lastError = errDetail;
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      const errDetail = `${msg} on ${endpoint}`;
      errorsLog.push(errDetail);
      lastError = errDetail;
    }
  }

  return {
    ok: false,
    error: lastError || errorsLog.join("; ") || "تعذّر تحميل المحتوى حالياً",
  };
}
