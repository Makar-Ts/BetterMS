import { fromMS } from "./functions/fromTime.js";
import { toMS } from "./functions/toTime.js";

function ms(ms: string): number;
function ms(ms: number): string;
function ms(ms: any): any {
  if (typeof ms === "string") {
    return toMS(ms);
  } else {
    return fromMS(ms);
  }
}

export default ms;