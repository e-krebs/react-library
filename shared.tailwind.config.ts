import type { Config } from 'tailwindcss';
import { opacity, spacing, lineHeight } from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors';
import plugin from 'tailwindcss/plugin';
import { parseColor } from 'tailwindcss/lib/util/color';

// Converts HEX color to RGB values
const toRGB = (value) => parseColor(value).color.join(' ');

export default {
  content: ['./src/**/*.{ts,tsx}'],
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-react-aria-components'),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.tap-highlight-primary': {
          '-webkit-tap-highlight-color': `rgb(var(--primary-500, ${toRGB(colors.zinc[500])}) / 0.2)`,
        },
      });
    }),
  ],
  theme: {
    extend: {
      colors: {
        gray: colors.zinc,
        primary: {
          50: `rgb(var(--primary-50,   ${toRGB(colors.gray[50])}) / <alpha-value>)`,
          100: `rgb(var(--primary-100, ${toRGB(colors.gray[100])}) / <alpha-value>)`,
          200: `rgb(var(--primary-200, ${toRGB(colors.gray[200])}) / <alpha-value>)`,
          300: `rgb(var(--primary-300, ${toRGB(colors.gray[300])}) / <alpha-value>)`,
          400: `rgb(var(--primary-400, ${toRGB(colors.gray[400])}) / <alpha-value>)`,
          500: `rgb(var(--primary-500, ${toRGB(colors.gray[500])}) / <alpha-value>)`,
          600: `rgb(var(--primary-600, ${toRGB(colors.gray[600])}) / <alpha-value>)`,
          700: `rgb(var(--primary-700, ${toRGB(colors.gray[700])}) / <alpha-value>)`,
          800: `rgb(var(--primary-800, ${toRGB(colors.gray[800])}) / <alpha-value>)`,
          900: `rgb(var(--primary-900, ${toRGB(colors.gray[900])}) / <alpha-value>)`,
          950: `rgb(var(--primary-950, ${toRGB(colors.gray[950])}) / <alpha-value>)`,
        },
      },
      spacing: {
        icon: spacing[4],
        input: spacing[9],
        initial: 'initial',
      },
      lineHeight: {
        th: lineHeight[9],
        'th-input': lineHeight[7],
      },
      strokeWidth: {
        3: '3px',
      },
      opacity: {
        disabled: opacity[40],
      },
      keyframes: {
        'modal-grow': {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        'modal-shrink': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0)', opacity: '0' },
        },
      },
      animation: {
        'modal-grow': 'modal-grow 150ms cubic-bezier(0.4, 0, 0.2, 1)',
        'modal-shrink': 'modal-shrink 150ms cubic-bezier(0.4, 0, 0.2, 1)',
      },
      data: {
        selected: 'selected',
      },
    },
  },
} satisfies Config;
