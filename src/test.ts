import { toTime } from "./functions/toTime.js";

console.log("5d 12m 45s =",      toTime("5d 12m 45s"))
console.log("55 sec =",          toTime("55 sec"))
console.log("1 year 2 months =", toTime("1 year 2 months"))
console.log("1 MONTH 12 DAYS =", toTime("1 MONTH 12 DAYS"))