import { timeMultipliers } from "../constants/time-multipliers.constant.js";
import type { TimeModifier, TimeString } from "../interfaces/time-modifiers.types.js";
import { convertTimeString } from "./utils.js";

const timeStringRegex = new RegExp(/[+-]?\d+(\.\d+)?([eE][+-]?\d+)? ?[a-zA-Z]+/g)


/**
 * Convert a type-better-ms string to number in miliseconds.
 * @param {string} string - multiple separated {@link TimeString}s
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
      ).map(r => r[0] as TimeString);
  
  if (timeStrings.length === 0) return 0;


  return timeStrings.reduce(
    (acc, v) => acc + convertTimeString(v as TimeString), 0
  )
}