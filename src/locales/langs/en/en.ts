import type { TimeModifier } from "../../../constants/time-modifiers.enum.js";
import { LocalizationError } from "../../../errors/localization.error.js";
import type { Locale } from "../../../interfaces/locale.interface.js";
import { ENLocale_timeModifiers, ENLocale_toLocaleModifiers } from "./constants/time-modifiers.constant.js";

/**
 * English localization for type-better-ms
 */
export const ENLocale: Locale = {
  to(num: number, mod: TimeModifier): string {
    const str = Math.abs(num) === 1 || num === 0 
      ? ENLocale_toLocaleModifiers[mod].singular
      : ENLocale_toLocaleModifiers[mod].plural;

    return str;
  },

  from(localized: string): TimeModifier {
    const mod = (Object.keys(ENLocale_timeModifiers) as TimeModifier[])
                  .find(K => ENLocale_timeModifiers[K].find(r => r === localized));

    if (!mod) throw new LocalizationError(localized);
    
    return mod;
  },

  get fallback(): string {
    return "0s";
  }
}