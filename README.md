# BetterMS ⏱️

A enhanced, type-safe time conversion library for Node.js and browsers. Convert between milliseconds and human-readable time strings with full TypeScript support.

## Features

- 🚀 **Type Safe**: Full TypeScript support with strict types
- 📦 **Zero Dependencies**: Lightweight and self-contained
- 🔄 **Bidirectional**: Convert from milliseconds to strings and vice versa
- 🎯 **Accurate**: Uses precise time calculations (365.25 days/year, 30.4375 days/month)
- 📏 **Flexible**: Supports multiple time formats and abbreviations
- 🌍 **Localizable**: Support for multiple languages and custom locales
- ⚡ **Modern**: ES Modules, Tree-shakable, and fully typed

## Installation

```bash
npm install type-better-ms
```

## Quick Start

```typescript
import ms from 'type-better-ms';

// Convert string to milliseconds
ms('1 day 2 hours 30 minutes'); // → 95400000
ms('2w 3d 12h');               // → 1512000000

// Convert milliseconds to string
ms(95400000);  // → "1 day 2 hours 30 minutes"
ms(1483200000); // → "2 weeks 3 days 4 hours"
```

## API

### `ms(value: string): number`
Convert a time string to milliseconds.

### `ms(value: number): string`  
Convert milliseconds to a human-readable time string.

## Time Formats

BetterMS supports a wide variety of time formats:

| Unit | Supported Formats |
|------|-------------------|
| Century | `century`, `centuries`, `CENT`, `c` |
| Decade | `decade`, `decades`, `DEC` |
| Year | `year`, `years`, `Y`, `y` |
| Month | `month`, `months`, `M` |
| Week | `week`, `weeks`, `W`, `w` |
| Day | `day`, `days`, `D`, `d` |
| Hour | `hour`, `hours`, `H`, `h` |
| Minute | `minute`, `minutes`, `MIN`, `min`, `m` |
| Second | `second`, `seconds`, `SEC`, `sec`, `s` |
| Millisecond | `millisecond`, `milliseconds`, `MS`, `ms` |

## Examples

### String to Milliseconds
```typescript
ms('5d 12m 45s')          // → 432765000
ms('55 sec')              // → 55000
ms('1 year 2 months')     // → 36709200000
ms('1 MONTH 12 DAYS')     // → 3732480000
ms('2.5 hours')           // → 9000000
ms('1.5d')                // → 129600000
```

### Milliseconds to String
```typescript
ms(39447000000)  // → "1 year 3 months"
ms(3666600000)   // → "1 month 1 week 5 days"
ms(55000)        // → "55 seconds"
ms(9000000)      // → "2 hours 30 minutes"
```

## Advanced Usage

### Direct Function Imports
```typescript
import { toMS, fromMS } from 'type-better-ms';

toMS('2 days 6 hours');    // → 194400000
fromMS(194400000);         // → "2 days 6 hours"
```

### Utility Functions
```typescript
import { convertMiliseconds, convertMilisecondsWithRemainder } from 'type-better-ms';

convertMiliseconds(55000)                    // → "55 seconds"
convertMiliseconds(55900)                    // → "55 seconds" (rounded)
convertMiliseconds(39447000000, false)       // → "1.25 years" (exact)

convertMilisecondsWithRemainder(39447000000) 
// → { string: "1 year", remainder: 2835000000 }
```

## Localization

BetterMS supports multiple languages. Register custom locales:

```typescript
import { registerLocales } from 'type-better-ms';
import { ENLocale } from 'type-better-ms';
import { RULocale } from 'type-better-ms';

// Register with English as fallback
registerLocales(RULocale, true);
registerLocales(myLocale, true);

// Register multiple locales
registerLocales([RULocale, ENLocale]);
```

## Time Calculations

BetterMS uses precise time calculations:
- Year: 365.25 days
- Month: 30.4375 days (average)
- Week: 7 days
- Day: 24 hours

This ensures accurate conversions for all time periods.

## Building from Source

```bash
git clone https://github.com/Makar-Ts/BetterMS.git
cd BetterMS
npm install
npm run build
npm run test
```

## License

MIT License - see LICENSE file for details.