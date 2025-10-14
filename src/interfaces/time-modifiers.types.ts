import { 
  century, decade, year, month, week, day, hour, minute, second, millisecond 
} from "../constants/time-modifiers.constant.js";

// Individual modifier types
type CenturyModifier      = typeof century[number];
type DecadeModifier       = typeof decade[number];
type YearModifier         = typeof year[number];
type MonthModifier        = typeof month[number];
type WeekModifier         = typeof week[number];
type DayModifier          = typeof day[number];
type HourModifier         = typeof hour[number];
type MinuteModifier       = typeof minute[number];
type SecondModifier       = typeof second[number];
type MillisecondModifier  = typeof millisecond[number];

type TimeModifier =
  | CenturyModifier
  | DecadeModifier
  | YearModifier
  | MonthModifier
  | WeekModifier
  | DayModifier
  | HourModifier
  | MinuteModifier
  | SecondModifier
  | MillisecondModifier;

// Individual time string types
type CenturyString      = `${number}${CenturyModifier}` | `${number} ${CenturyModifier}`;
type DecadeString       = `${number}${DecadeModifier}` | `${number} ${DecadeModifier}`;
type YearString         = `${number}${YearModifier}` | `${number} ${YearModifier}`;
type MonthString        = `${number}${MonthModifier}` | `${number} ${MonthModifier}`;
type WeekString         = `${number}${WeekModifier}` | `${number} ${WeekModifier}`;
type DayString          = `${number}${DayModifier}` | `${number} ${DayModifier}`;
type HourString         = `${number}${HourModifier}` | `${number} ${HourModifier}`;
type MinuteString       = `${number}${MinuteModifier}` | `${number} ${MinuteModifier}`;
type SecondString       = `${number}${SecondModifier}` | `${number} ${SecondModifier}`;
type MillisecondString  = `${number}${MillisecondModifier}` | `${number} ${MillisecondModifier}`;

// Combined time string type
type TimeString = 
  | CenturyString
  | DecadeString
  | YearString
  | MonthString
  | WeekString
  | DayString
  | HourString
  | MinuteString
  | SecondString
  | MillisecondString;

export type { 
  TimeString, 
  TimeModifier,
  CenturyString,
  DecadeString,
  YearString,
  MonthString,
  WeekString,
  DayString,
  HourString,
  MinuteString,
  SecondString,
  MillisecondString,
};