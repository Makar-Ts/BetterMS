import { sortedRawMultipliers, timeMultipliers } from "../constants/time-multipliers.constant.js";
import type { TimeModifier, TimeString } from "../interfaces/time-modifiers.types.js";
import * as strings from '../constants/time-modifiers.constant.js'

const modifierRegex = new RegExp(/[a-zA-Z]+/)


/**
 * Convert {@link TimeString} to miliseconds
 * @param {TimeString} string - TimeString to convert
 * @returns miliseconds
 */
export function convertTimeString(string: TimeString): number {
  const index = +modifierRegex.exec(string)!.index!;

  return Number(string.slice(0, index)) * 
          (timeMultipliers[string.slice(index) as TimeModifier] || 0);
}

/**
 * Convert miliseconds to a single {@link TimeString}
 * @param {number} num - miliseconds
 * @param {boolean} [integer=true] - the output timestring will be converted to an integer. Defaults to `true`
 * @returns {TimeString} a single TimeString
 * 
 * ---
 * 
 * @example
 * convertMiliseconds(55000) // 55 seconds
 * convertMiliseconds(55900) // 55 seconds (rounded)
 * convertMiliseconds(39447000000) // 1 years (rounded)
 * convertMiliseconds(39447000000, false) // 1.25 years
 */
export function convertMiliseconds(num: number, integer: boolean = true): TimeString {
  const biggestModifierIndex = sortedRawMultipliers.findIndex(([k, v]) => num < v) - 1;
  const biggestModifier = sortedRawMultipliers[biggestModifierIndex]!;

  if (!biggestModifier) return "0 seconds";


  const n = integer 
      ? Math.floor(num / biggestModifier[1]) 
      : num / biggestModifier[1]

  return `${n} ${strings[biggestModifier[0] as keyof typeof strings]!
          [strings[biggestModifier[0] as keyof typeof strings]!.length - (Math.abs(n) === 1 || n === 0 ? 2 : 1)]!}` as TimeString
}

/**
 * Convert miliseconds to a single {@link TimeString} and the remainder of the division
 * @param {number} num - miliseconds
 * @returns {{ string: TimeString, remainder: number }} a TimeString and the remainder
 */
export function convertMilisecondsWithRemainder(num: number): { 
  string: TimeString, remainder: number 
} {
  const biggestModifierIndex = sortedRawMultipliers.findIndex(([k, v]) => num < v) - 1;
  const biggestModifier = sortedRawMultipliers[biggestModifierIndex]!;

  if (!biggestModifier) return { string: "0 seconds", remainder: 0 };


  const n = Math.floor(num / biggestModifier[1]);
  const string = `${n} ${
      strings[biggestModifier[0] as keyof typeof strings]!
        [strings[biggestModifier[0] as keyof typeof strings]!.length - (Math.abs(n) === 1 || n === 0 ? 2 : 1)]!
    }` as TimeString;
  const remainder = num - Math.floor(num / biggestModifier[1]) * biggestModifier[1]

  return { string, remainder };
}