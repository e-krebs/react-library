import colors from 'tailwindcss/colors';
// @ts-expect-error no type definition
import { parseColor } from 'tailwindcss/lib/util/color';

type Color = Exclude<keyof typeof colors, 'inherit' | 'current' | 'transparent' | 'black' | 'white'>;
type ColorNb = keyof (typeof colors)[Color];
type ColorValue = (typeof colors)[Color][ColorNb];

// Converts HEX color to RGB values
const toRGB = (value: ColorValue): string => parseColor(value).color.join(' ');

// Converts tailwind color to theme Variables
const toThemeVars = (color: Color) =>
  (Object.keys(colors[color]) as ColorNb[])
    .map((nb) => `--primary-${nb}: ${toRGB(colors[color][nb])}; /* ${color}-${nb} rgb values */\n`)
    .join('');

console.log(toThemeVars('yellow'));
console.log(toThemeVars('sky'));
