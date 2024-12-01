/* eslint-disable @typescript-eslint/no-require-imports, no-console */
const colors = require('tailwindcss/colors');
const { parseColor } = require('tailwindcss/lib/util/color');

// Converts HEX color to RGB values
const toRGB = (value) => parseColor(value).color.join(' ');

// Converts tailwind color to theme Variables
const toThemeVars = (color) =>
  Object.keys(colors[color])
    .map((nb) => `--primary-${nb}: ${toRGB(colors[color][nb])}; /* ${color}-${nb} rgb values */\n`)
    .join('');

console.log(toThemeVars('yellow'));
console.log(toThemeVars('sky'));
