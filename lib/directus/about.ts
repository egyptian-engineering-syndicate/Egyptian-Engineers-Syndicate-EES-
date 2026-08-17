import { getDirectusImageUrl } from "./news";

export interface DirectusAboutData {
  about_title: string;
  about_description: string;
  about_image?: string | { id: string } | null;
  vision_title: string;
  vision_description: string;
  vision_image?: string | { id: string } | null;
  goals_title: string;
  goals_description: string;
}

export type AboutResult =
  | { ok: true; data: DirectusAboutData }
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
 * Helper to construct directus image URL safely.
 */
export { getDirectusImageUrl };

/**
 * Fetch About Singleton data from Directus.
 */
export async function getAboutData(): Promise<AboutResult> {
  const baseUrls = Array.from(
    new Set([
      DIRECTUS_URL,
      DIRECTUS_URL.replace("localhost", "127.0.0.1"),
      "http://127.0.0.1:8055",
      "http://localhost:8055",
    ])
  );

  const paths = ["/items/about", "/items/About", "/items/about_page", "/items/AboutPage"];

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
      // Fast 3-second timeout per attempt to avoid hanging
      const timeoutId = setTimeout(() => controller.abort(), 3000);

      const response = await fetch(endpoint, {
        cache: "no-store",
        signal: controller.signal,
        headers,
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        const json = await response.json();
        const raw = json.data || json;

        console.log(`[Directus About SUCCESS] Connected to ${endpoint}`);

        if (raw && typeof raw === "object") {
          const data: DirectusAboutData = {
            about_title:
              raw.about_title ?? raw.aboutTitle ?? raw["About Title"] ?? raw.title ?? "",
            about_description:
              raw.about_description ?? raw.aboutDescription ?? raw["About Description"] ?? raw.description ?? "",
            about_image:
              raw.about_image ?? raw._about_image ?? raw.aboutImage ?? raw["About Image"] ?? raw.image ?? null,
            vision_title:
              raw.vision_title ?? raw.visionTitle ?? raw["Vision Title"] ?? "",
            vision_description:
              raw.vision_description ?? raw.visionDescription ?? raw["Vision Description"] ?? "",
            vision_image:
              raw.vision_image ?? raw._vision_image ?? raw.visionImage ?? raw["Vision Image"] ?? null,
            goals_title:
              raw.goals_title ?? raw.goalsTitle ?? raw["Goals Title"] ?? "",
            goals_description:
              raw.goals_description ?? raw.goalsDescription ?? raw["Goals Description"] ?? "",
          };

          return { ok: true, data };
        }
      }

      const errDetail = `HTTP ${response.status} (${response.statusText || "Error"}) on ${endpoint}`;
      console.warn(`[Directus About WARNING] ${errDetail}`);
      errorsLog.push(errDetail);
      lastError = errDetail;
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      const errDetail = `${msg} on ${endpoint}`;
      console.warn(`[Directus About ERROR] ${errDetail}`);
      errorsLog.push(errDetail);
      lastError = errDetail;
    }
  }

  return {
    ok: false,
    error: lastError || errorsLog.join("; ") || "تعذّر تحميل المحتوى حالياً",
  };
}
