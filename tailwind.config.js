const shared = require('./shared.tailwind.config');

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  presets: [shared],
  content: ["./{src,.ladle}/**/*.{ts,tsx}"],
  safelist: ["ladle-addons", 'ladle-wrapper', 'ladle-controls-table', 'ladle-aside'],
};
