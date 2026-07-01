export const locales = ["en", "zhans", "zhant"] as const;
export const defaultLocale = "en";

export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const localeNames: Record<Locale, string> = {
  en: "English",
  zhans: "简体中文",
  zhant: "繁體中文",
};

export function normalizeLocale(value: string): Locale | null {
  const normalized = value.toLowerCase().replace("_", "-");

  if (isLocale(normalized)) {
    return normalized;
  }

  if (normalized === "zh" || normalized.startsWith("zh-hans")) {
    return "zhans";
  }

  if (
    normalized.startsWith("zh-hant") ||
    normalized === "zh-hk" ||
    normalized === "zh-mo" ||
    normalized === "zh-tw"
  ) {
    return "zhant";
  }

  if (normalized.startsWith("en")) {
    return "en";
  }

  return null;
}
