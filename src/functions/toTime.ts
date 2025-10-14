import { timeMultipliers } from "../constants/time-multipliers.constant.js";
import type { TimeModifier, TimeString } from "../interfaces/time-modifiers.types.js";

const timeStringRegex = new RegExp(/[+-]?\d+(\.\d+)?([eE][+-]?\d+)? ?[a-zA-Z]+/g)
const modifierRegex = new RegExp(/[a-zA-Z]+/)


/**
 * Convert a better-ms string to number in miliseconds.
 * @param {string} string - multiple separated {@link TimeString}s
 * @returns miliseconds
 * 
 * ---
 * 
 * @example toTime("5d 12m 45s")
 */
export function toTime(string: string): number {
  const timeStrings = Array.from(
    string.matchAll(timeStringRegex)
      ).map(r => r[0] as TimeString);
  
  if (timeStrings.length === 0) return 0;


  return timeStrings.reduce(
    (acc, v) => {
      const index = +modifierRegex.exec(v)!.index!;

      return acc + Number(v.slice(0, index)) * (timeMultipliers[v.slice(index) as TimeModifier] || 0);
    }, 0
  )
}