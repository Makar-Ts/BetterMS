import type { TimeModifier } from "../interfaces/time-modifiers.types.js";
import * as modifiers from "./time-modifiers.constant.js";

function createTimeMultipliers() {
  const multipliers = {
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
  };

  const result: Record<string, number> = {};

  // Map each modifier group to its multiplier
  (Object.keys(modifiers) as Array<keyof typeof modifiers>).forEach(key => {
    const modifierArray = modifiers[key];
    const multiplier = multipliers[key];
    
    modifierArray.forEach(modifier => {
      result[modifier] = multiplier;
    });
  });

  return result as Record<TimeModifier, number>;
}

export const timeMultipliers = createTimeMultipliers();