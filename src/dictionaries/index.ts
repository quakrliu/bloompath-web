export type { Dictionary, LegalSection, Locale } from "./types";

import type { Dictionary, Locale } from "./types";
import zhTW from "./zh-TW";
import en from "./en";

const dictionaries: Record<Locale, Dictionary> = {
  "zh-TW": zhTW,
  en,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries["zh-TW"];
}
