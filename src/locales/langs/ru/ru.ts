import type { TimeModifier } from "../../../constants/time-modifiers.enum.js";
import { LocalizationError } from "../../../errors/localization.error.js";
import type { Locale } from "../../../interfaces/locale.interface.js";
import { RULocale_timeModifiers, RULocale_toLocaleModifiers } from "./constants/time-modifiers.constant.js";

/**
 * English localization for type-better-ms
 */
export const RULocale: Locale = {
  to(num: number, mod: TimeModifier): string {
    const s = String(Math.abs(num));
    const endsOn = +s.slice(-2);

    if ((endsOn > 9 && endsOn < 21) || (endsOn % 10 === 0) || (endsOn % 10 > 4)) {
      return RULocale_toLocaleModifiers[mod].plural;
    } else if (endsOn%10 === 1) {
      return RULocale_toLocaleModifiers[mod].singular;
    } else {
      return RULocale_toLocaleModifiers[mod].semiplural;
    }
  },

  from(localized: string): TimeModifier {
    const mod = (Object.keys(RULocale_timeModifiers) as TimeModifier[])
                  .find(K => RULocale_timeModifiers[K].find(r => r === localized));

    if (!mod) throw new LocalizationError(localized);
    
    return mod;
  },

  get fallback(): string {
    return "0сек";
  }
}