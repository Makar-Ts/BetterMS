import { fromMS } from "./functions/fromTime.js";
import { toMS } from "./functions/toTime.js";
export * from "./functions/utils.js";
export { ENLocale } from "./locales/langs/en/en.js";
export { RULocale } from "./locales/langs/ru/ru.js";
export { registerLocales } from "./locales/register.js";
export * from "./interfaces/locale.interface.js";
export * from "./constants/time-modifiers.enum.js";

/**
 * Convert a type-better-ms string to number in milliseconds
 * @param {string} ms - multiple separated time strings
 * @returns {number} milliseconds
 * 
 * ---
 * 
 * @example 
 * ms('5d 12m 45s')          // → 432765000
 * ms('55 sec')              // → 55000
 * ms('1 year 2 months')     // → 36709200000
 */
function ms(ms: string): number;

/**
 * Convert milliseconds to a type-better-ms string
 * @param {number} ms - milliseconds
 * @returns {string} type-better-ms string
 * 
 * ---
 * 
 * @example
 * ms(39447000000)  // → "1 years 3 months"
 * ms(3666600000)   // → "1 month 1 week 5 days"
 * ms(55000)        // → "55 seconds"
 */
function ms(ms: number): string;
function ms(ms: any): any {
  if (typeof ms === "string") {
    return toMS(ms);
  } else {
    return fromMS(ms);
  }
}

export default ms;
export { fromMS, toMS };