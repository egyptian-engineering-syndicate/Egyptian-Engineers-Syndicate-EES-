export interface DirectusContactInfo {
  id?: string | number;
  status?: string;
  address: string;
  phone: string;
  email: string;
}

export type ContactInfoResult =
  | { ok: true; data: DirectusContactInfo }
  | { ok: false; error: string };

export interface DirectusContactAddress {
  id: string | number;
  status?: string;
  title: string;
  sub_title?: string;
  address: string;
  phone: string;
  email: string;
}

export type ContactAddressesResult =
  | { ok: true; data: DirectusContactAddress[] }
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
 * Fetch Contact Info from Directus collection `contact_info`.
 */
export async function getContactInfo(): Promise<ContactInfoResult> {
  const baseUrls = Array.from(
    new Set([
      DIRECTUS_URL,
      DIRECTUS_URL.replace("localhost", "127.0.0.1"),
      "http://127.0.0.1:8055",
      "http://localhost:8055",
    ])
  );

  const paths = [
    "/items/contact_info",
    "/items/Contact_Info",
    "/items/contact",
    "/items/Contact",
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
        const raw = json.data || json;

        // Raw could be an object or an array of items
        const item = Array.isArray(raw) ? raw[0] : raw;

        if (item && typeof item === "object") {
          const data: DirectusContactInfo = {
            id: item.id,
            status: item.status || "published",
            address: item.address || "",
            phone: item.phone || "",
            email: item.email || "",
          };

          console.log(`[Directus Contact SUCCESS] Fetched contact info from ${endpoint}`);
          return { ok: true, data };
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

/**
 * Fetch Contact Addresses / Branches from Directus collection `contact_addresses`.
 */
export async function getContactAddresses(): Promise<ContactAddressesResult> {
  const baseUrls = Array.from(
    new Set([
      DIRECTUS_URL,
      DIRECTUS_URL.replace("localhost", "127.0.0.1"),
      "http://127.0.0.1:8055",
      "http://localhost:8055",
    ])
  );

  const paths = [
    "/items/contact_addresses?filter[status][_eq]=published",
    "/items/contact_addresses",
    "/items/Contact_Addresses?filter[status][_eq]=published",
    "/items/Contact_Addresses",
    "/items/contact_branches?filter[status][_eq]=published",
    "/items/contact_branches",
    "/items/contact_address?filter[status][_eq]=published",
    "/items/contact_address",
    "/items/contact_info?filter[status][_eq]=published",
    "/items/contact_info",
    "/items/contact",
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
        const rawList = json.data !== undefined ? json.data : json;

        const rawArray = Array.isArray(rawList)
          ? rawList
          : rawList && typeof rawList === "object"
          ? [rawList]
          : [];

        if (rawArray.length > 0) {
          const published = rawArray
            .filter((item: any) => item && (!item.status || item.status === "published"))
            .map((item: any) => ({
              id: item.id || 1,
              status: item.status || "published",
              title: item.title || "عناوين وتليفونات النقابة العامة والنقابات الفرعية",
              sub_title: item.sub_title || item.subtitle || "النقابة العامة للمهندسين:",
              address: item.address || "",
              phone: item.phone || "",
              email: item.email || "",
            }));

          if (published.length > 0) {
            console.log(`[Directus Contact Addresses SUCCESS] Fetched ${published.length} items from ${endpoint}`);
            return { ok: true, data: published };
          }
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

