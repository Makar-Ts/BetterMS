import type { TimeModifier } from "../../../../constants/time-modifiers.enum.js"

const RULocale_timeModifiers: Record<TimeModifier, Array<string>> = {
  century     : ["ВЕК", "ВЕКА",         "ВЕКОВ",        "В",            "век",      "века",         "веков"],
  decade      : ["ДЕС", "ДЕСЯТИЛЕТИЕ",  "ДЕСЯТИЛЕТИЯ",  "десятилетие",  "десятилетия"],
  year        : ["Г",   "ГОД",          "ГОДА",         "ЛЕТ",          "г",        "год",          "года",         "лет"],
  month       : ["М",   "МЕС",          "МЕСЯЦ",        "МЕСЯЦА",       "МЕСЯЦЕВ",  "мес",          "месяц",        "месяца",     "месяцев"],
  week        : ["Н",   "НЕД",          "НЕДЕЛЯ",       "НЕДЕЛИ",       "НЕДЕЛЬ",   "н",            "нед",          "неделя",     "недели", "недель"],
  day         : ["Д",   "ДЕНЬ",         "ДНЯ",          "ДНЕЙ",         "д",        "день",         "дня",          "дней"],
  hour        : ["Ч",   "ЧАС",          "ЧАСА",         "ЧАСОВ",        "ч",        "час",          "часа",         "часов"],
  minute      : ["М",   "МИН",          "МИНУТА",       "МИНУТЫ",       "МИНУТ",    "мин",          "минута",       "минуты",     "минут"],
  second      : ["С",   "СЕК",          "СЕКУНДА",      "СЕКУНДЫ",      "СЕКУНД",   "с",            "сек",          "секунда",    "секунды", "секунд"],
  millisecond : ["МС",  "МИЛЛИСЕКУНДА", "МИЛЛИСЕКУНДЫ", "МИЛЛИСЕКУНД",  "мс",       "миллисекунда", "миллисекунды", "миллисекунд"],
} as const;

const RULocale_toLocaleModifiers: Record<TimeModifier, { singular: string, semiplural: string, plural: string }> = {
  century     : { singular: "век",          semiplural: "века",         plural: "веков" },
  decade      : { singular: "десятилетие",  semiplural: "десятилетия",  plural: "десятилетий" },
  year        : { singular: "год",          semiplural: "года",         plural: "лет" },
  month       : { singular: "месяц",        semiplural: "месяца",       plural: "месяцев" },
  week        : { singular: "неделя",       semiplural: "недели",       plural: "недель" },
  day         : { singular: "день",         semiplural: "дня",          plural: "дней" },
  hour        : { singular: "час",          semiplural: "часа",         plural: "часов" },
  minute      : { singular: "минута",       semiplural: "минуты",       plural: "минут" },
  second      : { singular: "секунда",      semiplural: "секунды",      plural: "секунд" },
  millisecond : { singular: "миллисекунда", semiplural: "милисекунды",  plural: "миллисекунд" },
}

export { RULocale_timeModifiers, RULocale_toLocaleModifiers }