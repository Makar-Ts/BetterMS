import { convertMilisecondsWithRemainder } from "./utils.js";

/**
 * Convert miliseconds to string
 * @param {number} num - miliseconds
 * @returns {string} type-better-ms string
 * 
 * ---
 * 
 * @example
 * fromMS(39447000000) // 1 years 3 months
 * fromMS(3666600000) // 1 months 1 weeks 5 days
 */
export function fromMS(num: number): string {
  let out = "";
  let converted = convertMilisecondsWithRemainder(num);

  out += converted.string;

  while (converted.remainder != 0) {
    converted = convertMilisecondsWithRemainder(converted.remainder);
    out += " "+converted.string;
  }

  return out;
}