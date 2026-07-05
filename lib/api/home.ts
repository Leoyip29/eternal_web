import { apiClient } from "./client";
import type { HomePageResponse } from "./types";
import type { Locale } from "../i18n";

// Backend only recognizes exact matches against SUPPORTED_LANGUAGES
// (core/utils.py: "en", "zh_hans", "zh_hant") for the `lang` query param —
// anything else is silently ignored and it falls back to Accept-Language/en.
const LOCALE_TO_LANG: Record<Locale, string> = {
  en: "en",
  zhans: "zh_hans",
  zhant: "zh_hant",
};

export async function getHomePage(locale: Locale): Promise<HomePageResponse> {
  const { data } = await apiClient.get<HomePageResponse>("/home/", {
    params: { lang: LOCALE_TO_LANG[locale] },
  });

  return data;
}