import { TimeModifier } from "../constants/time-modifiers.enum.js";
import { LOCALES } from "./register.js";


/**
 * Convert localized modifier to {@link TimeModifier}
 * @param {string} localized - localized modifier
 * @returns {TimeModifier} time modifier
 */
export function fromLocale(localized: string): TimeModifier | null {
  for (let locale of LOCALES) {
    try {
      return locale.from(localized);
    } catch (e: any) {}
  }

  return null;
}


/**
 * Convert number+modifier to localized string
 * @param {number} num
 * @param {TimeModifier} mod - TimeModifier
 * @returns {string} localized string
 */
export function toLocale(num: number, mod: TimeModifier): string {
  for (let locale of LOCALES) {
    try {
      return locale.to(num, mod);
    } catch (e: any) {}
  }

  return LOCALES[0]?.fallback || "0s";
}