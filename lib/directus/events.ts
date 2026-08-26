import { getDirectusImageUrl } from "./news";

export interface DirectusEventItem {
  id: string | number;
  status?: 'published' | 'draft' | 'archived' | string;
  title: string;
  description: string;
  image?: string | { id: string } | null;
  date?: string;
  created_on?: string;
}

export interface DirectusEventsResponse {
  data: DirectusEventItem[];
}

export type EventsResult =
  | { ok: true; data: DirectusEventItem[] }
  | { ok: false; error: string };

const DIRECTUS_URL =
  process.env.NEXT_PUBLIC_DIRECTUS_URL ||
  process.env.DIRECTUS_URL ||
  "http://localhost:8055";

const DIRECTUS_TOKEN =
  process.env.DIRECTUS_STATIC_TOKEN ||
  process.env.NEXT_PUBLIC_DIRECTUS_TOKEN ||
  "";

export { getDirectusImageUrl };

/**
 * Fetch published events from Directus collection `events`.
 */
export async function getPublishedEvents(): Promise<EventsResult> {
  const baseUrls = Array.from(
    new Set([
      DIRECTUS_URL,
      DIRECTUS_URL.replace("localhost", "127.0.0.1"),
      "http://127.0.0.1:8055",
      "http://localhost:8055",
    ])
  );

  const paths = [
    "/items/events?filter[status][_eq]=published",
    "/items/events",
    "/items/Events?filter[status][_eq]=published",
    "/items/Events",
  ];

  const endpoints: string[] = [];
  for (const baseUrl of baseUrls) {
    for (const path of paths) {
      endpoints.push(`${baseUrl.replace(/\/$/, "")}${path}`);
    }
  }

  let lastError = "";
  const headers: Record<string, string> = { Accept: "application/json" };
  if (DIRECTUS_TOKEN) {
    headers["Authorization"] = `Bearer ${DIRECTUS_TOKEN}`;
  }

  for (const endpoint of endpoints) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4000);

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
              title: item.title || "",
              description: item.description || "",
              image: item.image || null,
              date: item.date || item.created_on || null,
            }));

          return { ok: true, data: published };
        }
      }

      lastError = `HTTP ${response.status} on ${endpoint}`;
    } catch (err) {
      lastError = err instanceof Error ? err.message : String(err);
    }
  }

  return {
    ok: false,
    error: lastError || "تعذّر تحميل الفعاليات حالياً",
  };
}

/**
 * Fetch a single published event by ID.
 */
export async function getEventById(
  id: string | number
): Promise<DirectusEventItem | null> {
  const baseUrls = Array.from(
    new Set([
      DIRECTUS_URL,
      DIRECTUS_URL.replace("localhost", "127.0.0.1"),
      "http://127.0.0.1:8055",
      "http://localhost:8055",
    ])
  );

  const headers: Record<string, string> = { Accept: "application/json" };
  if (DIRECTUS_TOKEN) {
    headers["Authorization"] = `Bearer ${DIRECTUS_TOKEN}`;
  }

  for (const baseUrl of baseUrls) {
    const endpoint = `${baseUrl.replace(/\/$/, "")}/items/events/${id}`;
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4000);

      const response = await fetch(endpoint, {
        cache: "no-store",
        signal: controller.signal,
        headers,
      });

      clearTimeout(timeoutId);

      if (!response.ok) continue;

      const json = await response.json();
      const data = json.data || json;
      if (!data) continue;

      if (data.status && data.status !== "published") continue;

      return {
        id: data.id,
        status: data.status || "published",
        title: data.title || "",
        description: data.description || "",
        image: data.image || null,
        date: data.date || data.created_on || null,
      };
    } catch {
      continue;
    }
  }

  return null;
}
