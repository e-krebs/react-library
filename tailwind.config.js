const shared = require('./shared.tailwind.config');

/** @type {import("import('tailwindcss').Config").TailwindConfig } */
module.exports = {
  presets: [shared],
  content: ['./{src,.ladle}/**/*.{ts,tsx}'],
  safelist: [
    'ladle-wrapper',
    'ladle-main',
    'ladle-aside',
    'ladle-addons',
    'ladle-controls-table'
  ],
};
