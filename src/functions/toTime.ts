import { convertTimeString, unitRegex } from "./utils.js";

const timeStringRegex = new RegExp(unitRegex, 'g')


/**
 * Convert a type-better-ms string to number in miliseconds.
 * @param {string} string - type-better-ms string
 * @returns miliseconds
 * 
 * ---
 * 
 * @example 
 * toMS("5d 12m 45s")       // 432765000
 * toMS("55 sec")           // 55000
 * toMS("1 year 2 months")  // 31557600000
 * toMS("1 MONTH 12 DAYS")  // 2629800000
 */
export function toMS(string: string): number {
  const timeStrings = Array.from(
    string.matchAll(timeStringRegex)
      ).map(r => r[0]);
  
  if (timeStrings.length === 0) return 0;


  return timeStrings.reduce(
    (acc, v) => acc + convertTimeString(v), 0
  )
}