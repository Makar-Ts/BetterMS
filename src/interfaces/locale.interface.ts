import type { TimeModifier } from "../constants/time-modifiers.enum.js";

/**
 * Interface for type-better-ms localizations
 */
export interface Locale {
  /**
   * Convert localized modifier to {@link TimeModifier}
   * @param {string} localized - localized modifier
   * @returns {TimeModifier} time modifier
   */
  from(localized: string): TimeModifier;

  /**
   * Convert number+modifier to localized string
   * @param {number} num
   * @param {TimeModifier} mod - TimeModifier
   * @returns {string} localized string
   */
  to(num: number, mod: TimeModifier): string;


  /**
   * Value to show if no localization found for number+modifier pair
   * @returns {string} fallback value
   */
  fallback: string;
}