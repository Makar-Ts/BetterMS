import type { Locale } from "../interfaces/locale.interface.js";
import { ENLocale } from "./langs/en/en.js";

export let LOCALES: Locale[] = [ENLocale];

/**
 * Register localization to use
 * @param {Locale} locale - main localization
 * @param {boolean} englishAsFallback - use EN locale as a fallback locale
 */
export function registerLocales(locale: Locale, englishAsFallback?: boolean): void;

/**
 * Register multiple localizations to use
 * @param {Locale[]} locales - localizations to use
 */
export function registerLocales(locales: Locale[]): void;
export function registerLocales(first: Locale | Locale[], second?: boolean): void {
  if (Array.isArray(first)) {
    LOCALES = [...first];
  } else {
    const locale = first;
    const englishAsFallback = second ?? true;

    LOCALES = [locale, ...(englishAsFallback ? [ENLocale] : [])]
  }
}