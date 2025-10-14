import { fromMS } from "./functions/fromTime.js";
import { toMS } from "./functions/toTime.js";
import { convertMiliseconds, convertMilisecondsWithRemainder } from "./functions/utils.js";
import ms from "./index.js";

console.log('------ ms ------')
console.log("5d 12m 45s =",      ms("5d 12m 45s"))
console.log("55 sec =",          ms("55 sec"))
console.log("1 year 3 months =", ms("1 year 3 months"))
console.log("1 MONTH 12 DAYS =", ms("1 MONTH 12 DAYS"))
console.log(39447000000, "=", ms(39447000000))
console.log(3666600000, "=", ms(3666600000))

console.log('\n------ convertMiliseconds ------')
console.log(55000,       "=", convertMiliseconds(55000))
console.log(39447000000, "=", convertMiliseconds(39447000000, false))

console.log('\n------ convertMilisecondsWithRemainder ------')
console.log(39447000000, "=", convertMilisecondsWithRemainder(39447000000))