const shared = require('./shared.tailwind.config');

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
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
