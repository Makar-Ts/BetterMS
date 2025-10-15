import { TimeModifier } from "../constants/time-modifiers.enum.js";
import { sortedRawMultipliers, rawMultipliers } from "../constants/time-multipliers.constant.js";
import { fromLocale, toLocale } from "../locales/use.js";

export const unitRegex = new RegExp(/(?<number>([+-]?\d+(\.\d+)?([eE][+-]?\d+)?)) ?(?<mod>[^ ]+)/)


/**
 * Convert type-better-ms string to miliseconds
 * @param {string} string - string to convert
 * @returns miliseconds
 */
export function convertTimeString(string: string): number {
  const { number, mod } = unitRegex.exec(string)!.groups!;
  const rmod = fromLocale(mod!);

  if (!rmod) return 0;

  return Number(number) * (rawMultipliers[rmod] || 0);
}

/**
 * Convert miliseconds to a single type-better-ms string
 * @param {number} num - miliseconds
 * @param {boolean} [integer=true] - the output timestring will be converted to an integer. Defaults to `true`
 * @returns {string} a single type-better-ms string
 * 
 * ---
 * 
 * @example
 * convertMiliseconds(55000) // 55 seconds
 * convertMiliseconds(55900) // 55 seconds (rounded)
 * convertMiliseconds(39447000000) // 1 years (rounded)
 * convertMiliseconds(39447000000, false) // 1.25 years
 */
export function convertMiliseconds(num: number, integer: boolean = true): string {
  const biggestModifierIndex = sortedRawMultipliers.findIndex(([k, v]) => Math.abs(num) < v) - 1;
  const biggestModifier = sortedRawMultipliers[biggestModifierIndex]!;


  const n = integer 
      ? Math.floor(num / biggestModifier[1]) 
      : num / biggestModifier[1]

  return `${n} ${toLocale(n, biggestModifier[0])}`
}

/**
 * Convert miliseconds to a single string and the remainder of the division
 * @param {number} num - miliseconds
 * @returns {{ string: string, remainder: number }} a string and the remainder
 */
export function convertMilisecondsWithRemainder(num: number): { 
  string: string, remainder: number 
} {
  const biggestModifierIndex = sortedRawMultipliers.findIndex(([k, v]) => num < v) - 1;
  const biggestModifier = sortedRawMultipliers[biggestModifierIndex]!;

  if (!biggestModifier) return { string: '0 ' + toLocale(0, TimeModifier.second), remainder: 0 };


  const n = Math.floor(num / biggestModifier[1]);
  const string = `${n} ${toLocale(n, biggestModifier[0])}`;
  const remainder = num - Math.floor(num / biggestModifier[1]) * biggestModifier[1]

  return { string, remainder };
}