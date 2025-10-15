import type { TimeModifier } from "../constants/time-modifiers.enum.js"

export class LocalizationError extends Error {
  /**
   * Create error for locale to numeric convertion.
   * @param {string} localized - Localized string that caused the error
   */
  constructor(localized: string);

  /**
   * Create error for numeric to locale convertion.
   * @param {number} num - Number that caused the error
   * @param {TimeModifier} mod - Time modifier used during conversion
   */
  constructor(num: number, mod: TimeModifier);

  /**
   * @param {any[]} args - Constructor arguments
   */
  constructor(...args: any) {
    if (typeof args[0] === "string") {
      super(`Can not convert ${args[0]} to a TimeModifier.`, {
        cause: args.localized
      })
    } else {
      super(`Can not convert ${args[0]} with mod ${args[1]} to a localized string.`, {
        cause: { num: args.num, mod: args.mod }
      })
    }
  }
}