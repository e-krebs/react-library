import type { Config } from 'tailwindcss';

import shared from './shared.tailwind.config';

module.exports = {
  presets: [shared],
  content: ['./{src,.ladle}/**/*.{ts,tsx}'],
  safelist: ['ladle-wrapper', 'ladle-main', 'ladle-aside', 'ladle-addons', 'ladle-controls-table'],
} satisfies Config;
