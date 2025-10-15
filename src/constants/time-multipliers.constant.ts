import type { TimeModifier } from "./time-modifiers.enum.js";

export const rawMultipliers: Record<TimeModifier, number> = {
  century:      1000 * 60 * 60 * 24 * 365.25 * 100,
  decade:       1000 * 60 * 60 * 24 * 365.25 * 10,
  year:         1000 * 60 * 60 * 24 * 365.25,
  month:        1000 * 60 * 60 * 24 * 30.4375,
  week:         1000 * 60 * 60 * 24 * 7,
  day:          1000 * 60 * 60 * 24,
  hour:         1000 * 60 * 60,
  minute:       1000 * 60,
  second:       1000,
  millisecond:  1,
} as const;

export const sortedRawMultipliers: Array<[TimeModifier, number]> = 
  Object.entries(rawMultipliers)
    .sort(([_a, a], [_b, b]) => a - b) as Array<[TimeModifier, number]>;