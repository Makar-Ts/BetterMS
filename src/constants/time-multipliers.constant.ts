import type { TimeModifier } from "../interfaces/time-modifiers.types.js";
import * as modifiers from "./time-modifiers.constant.js";
import type { AvailableTimeModifiers } from "./time-modifiers.enum.js";

export const rawMultipliers: Record<AvailableTimeModifiers, number> = {
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

export const sortedRawMultipliers: Array<[AvailableTimeModifiers, number]> = 
  Object.entries(rawMultipliers)
    .sort(([_a, a], [_b, b]) => a - b) as Array<[AvailableTimeModifiers, number]>;

function createTimeMultipliers() {
  const result: Record<string, number> = {};

  // Map each modifier group to its multiplier
  (Object.keys(modifiers) as Array<keyof typeof modifiers>).forEach(key => {
    const modifierArray = modifiers[key];
    const multiplier = rawMultipliers[key];
    
    modifierArray.forEach(modifier => {
      result[modifier] = multiplier;
    });
  });

  return result as Record<TimeModifier, number>;
}

export const timeMultipliers = createTimeMultipliers();