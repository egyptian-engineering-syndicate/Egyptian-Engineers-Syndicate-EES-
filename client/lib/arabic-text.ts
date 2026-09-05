/**
 * Strips tashkeel and folds the alef/ya/ta-marbuta variants so a typed query
 * matches Arabic content that spells the same word differently. Shared because
 * every listing page with a search box needs the exact same folding.
 */
export function normalizeArabicText(value: string) {
  return value
    .toLowerCase()
    .replace(/[ً-ْـٰ]/g, "")
    .replace(/[أإآٱ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه")
    .trim()
}
