import type { TimeModifier } from "../../../../constants/time-modifiers.enum.js"

const ENLocale_timeModifiers: Record<TimeModifier, Array<string>> = {
  century     : ["CENT",  "CENTURY",     "CENTURIES",            "c",    "century",     "centuries"    ],
  decade      : ["DEC",   "DECADE",      "DECADES",                      "decade",      "decades"      ],
  year        : ["Y",     "YEAR",        "YEARS",                "y",    "year",        "years"        ],
  month       : ["M",     "MONTH",       "MONTHS",                       "month",       "months"       ],
  week        : ["W",     "WEEK",        "WEEKS",                "w",    "week",        "weeks"        ],
  day         : ["D",     "DAY",         "DAYS",                 "d",    "day",         "days"         ],
  hour        : ["H",     "HOUR",        "HOURS",                "h",    "hour",        "hours"        ],
  minute      : ["MIN",   "MINUTE",      "MINUTES",      "min",  "m",    "minute",      "minutes",     ],
  second      : ["S",     "SECOND",      "SECONDS",      "sec",  "s",    "second",      "seconds",     ],
  millisecond : ["MS",    "MILLISECOND", "MILLISECONDS",         "ms",   "millisecond", "milliseconds" ],
} as const;

const ENLocale_toLocaleModifiers: Record<TimeModifier, { singular: string, plural: string }> = {
  century     : { singular: "century",     plural: "centuries"    },
  decade      : { singular: "decade",      plural: "decades"      },
  year        : { singular: "year",        plural: "years"        },
  month       : { singular: "month",       plural: "months"       },
  week        : { singular: "week",        plural: "weeks"        },
  day         : { singular: "day",         plural: "days"         },
  hour        : { singular: "hour",        plural: "hours"        },
  minute      : { singular: "minute",      plural: "minutes",     },
  second      : { singular: "second",      plural: "seconds",     },
  millisecond : { singular: "millisecond", plural: "milliseconds" },
}



export { ENLocale_timeModifiers, ENLocale_toLocaleModifiers }