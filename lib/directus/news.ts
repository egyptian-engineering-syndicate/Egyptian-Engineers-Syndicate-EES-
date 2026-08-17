export interface DirectusNewsItem {
  id: string | number;
  status: 'published' | 'draft' | 'archived' | string;
  created_on?: string;
  title: string;
  image?: string | { id: string; filename_disk?: string } | null;
  article?: string;
  published_at?: string;
}

export interface DirectusNewsResponse {
  data: DirectusNewsItem[];
}

export type NewsResult =
  | { ok: true; data: DirectusNewsItem[] }
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
 * Returns full URL for a Directus file/image asset.
 */
export function getDirectusImageUrl(
  image: string | { id: string } | null | undefined
): string {
  if (!image) {
    return "/images/navbar-bg.png"; // Fallback image asset
  }
  const imageId = typeof image === "object" ? image.id : image;
  if (!imageId) return "/images/navbar-bg.png";
  
  // If image is already a full http URL, return it
  if (imageId.startsWith("http://") || imageId.startsWith("https://")) {
    return imageId;
  }

  return `${DIRECTUS_URL}/assets/${imageId}`;
}

/**
 * Fetch published news items from Directus collection `news`.
 * Returns a NewsResult discriminated union:
 *   { ok: true, data: [...] }  — success (data may be empty array)
 *   { ok: false, error: string } — network/server error
 */
export async function getPublishedNews(): Promise<NewsResult> {
  const baseUrls = Array.from(
    new Set([
      DIRECTUS_URL,
      DIRECTUS_URL.replace("localhost", "127.0.0.1"),
      "http://127.0.0.1:8055",
      "http://localhost:8055",
    ])
  );

  const paths = [
    "/items/news?filter[status][_eq]=published&sort=-published_at",
    "/items/News?filter[status][_eq]=published&sort=-published_at",
    "/items/news",
    "/items/News",
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
      const timeoutId = setTimeout(() => controller.abort(), 3000);

      const response = await fetch(endpoint, {
        cache: "no-store",
        signal: controller.signal,
        headers,
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        const json: DirectusNewsResponse = await response.json();
        if (json.data && Array.isArray(json.data)) {
          // Filter to only published items
          const published = json.data.filter(
            (item) => !item.status || item.status === "published"
          );
          return { ok: true, data: published };
        }
        // Response was OK but unexpected shape — treat as empty
        return { ok: true, data: [] };
      }

      lastError = `HTTP ${response.status}`;
    } catch (err) {
      lastError = err instanceof Error ? err.message : String(err);
      // Try next endpoint
    }
  }

  return { ok: false, error: lastError || "تعذّر تحميل المحتوى حالياً" };
}

/**
 * Fetch a single published news item by ID.
 * Returns the item, or null if not found / request failed.
 */
export async function getNewsById(
  id: string | number
): Promise<DirectusNewsItem | null> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000);

  try {
    const response = await fetch(
      `${DIRECTUS_URL}/items/news/${id}`,
      {
        cache: "no-store",
        signal: controller.signal,
        headers: { Accept: "application/json" },
      }
    );

    clearTimeout(timeoutId);

    if (!response.ok) return null;

    const json: { data: DirectusNewsItem } = await response.json();
    if (!json.data) return null;

    // Only return published items
    if (json.data.status && json.data.status !== "published") return null;

    return json.data;
  } catch {
    clearTimeout(timeoutId);
    return null;
  }
}

/**
 * Fetch up to `limit` published news items, excluding the item with `excludeId`.
 * Sorted by most recent published_at. Used for the "أخبار ذات صلة" section.
 */
export async function getRelatedNews(
  excludeId: string | number,
  limit = 4
): Promise<DirectusNewsItem[]> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000);

  try {
    const url =
      `${DIRECTUS_URL}/items/news` +
      `?filter[status][_eq]=published` +
      `&filter[id][_neq]=${excludeId}` +
      `&sort=-published_at` +
      `&limit=${limit}`;

    const response = await fetch(url, {
      cache: "no-store",
      signal: controller.signal,
      headers: { Accept: "application/json" },
    });

    clearTimeout(timeoutId);

    if (!response.ok) return [];

    const json: DirectusNewsResponse = await response.json();
    if (!json.data || !Array.isArray(json.data)) return [];

    return json.data.filter(
      (item) => !item.status || item.status === "published"
    );
  } catch {
    clearTimeout(timeoutId);
    return [];
  }
}
