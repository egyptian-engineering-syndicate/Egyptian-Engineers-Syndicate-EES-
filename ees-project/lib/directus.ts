import { createDirectus, rest } from "@directus/sdk";

export const directusUrl =
  process.env.NEXT_PUBLIC_DIRECTUS_URL || "http://localhost:8056";

export const directus = createDirectus(directusUrl).with(rest());

export function getAssetUrl(assetId?: string | null) {
  if (!assetId) return "";

  return `/api/assets/${assetId}`;
}