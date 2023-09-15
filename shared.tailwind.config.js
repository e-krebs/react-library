const { opacity, spacing, lineHeight } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const typography = require('@tailwindcss/typography');
const { parseColor } = require('tailwindcss/lib/util/color');
const plugin = require('tailwindcss/plugin');

// Converts HEX color to RGB values
const toRGB = (value) => parseColor(value).color.join(' ');

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  plugins: [
    typography,
    plugin(function ({ addUtilities, theme }) {
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
          50: `rgb(var(--primary-50,   ${toRGB(colors.zinc[50])}) / <alpha-value>)`,
          100: `rgb(var(--primary-100, ${toRGB(colors.zinc[100])}) / <alpha-value>)`,
          200: `rgb(var(--primary-200, ${toRGB(colors.zinc[200])}) / <alpha-value>)`,
          300: `rgb(var(--primary-300, ${toRGB(colors.zinc[300])}) / <alpha-value>)`,
          400: `rgb(var(--primary-400, ${toRGB(colors.zinc[400])}) / <alpha-value>)`,
          500: `rgb(var(--primary-500, ${toRGB(colors.zinc[500])}) / <alpha-value>)`,
          600: `rgb(var(--primary-600, ${toRGB(colors.zinc[600])}) / <alpha-value>)`,
          700: `rgb(var(--primary-700, ${toRGB(colors.zinc[700])}) / <alpha-value>)`,
          800: `rgb(var(--primary-800, ${toRGB(colors.zinc[800])}) / <alpha-value>)`,
          900: `rgb(var(--primary-900, ${toRGB(colors.zinc[900])}) / <alpha-value>)`,
          950: `rgb(var(--primary-950, ${toRGB(colors.zinc[950])}) / <alpha-value>)`,
        },
        'th-primary': `rgb(var(--primary-500, ${toRGB(colors.zinc[500])}) / <alpha-value>)`,
        'th-dark-primary': `rgb(var(--primary-500, ${toRGB(colors.zinc[500])}) / <alpha-value>)`,
        'th-destructive': colors.red[600],
        'th-dark-destructive': colors.red[500],
      },
      backgroundColor: {
        th: colors.zinc[50],
        'th-hover': colors.zinc[100],
        'th-dark': colors.zinc[900],
        'th-dark-hover': colors.zinc[800],
      },
      ringOffsetColor: {
        th: colors.white,
        'th-dark': colors.zinc[900],
      },
      stroke: {
        th: colors.white,
        'th-dark': colors.zinc[900],
      },
      textColor: {
        th: colors.zinc[500],
        'th-dark': colors.zinc[400],
        'th-reversed': colors.zinc[50],
        'th-dark-reversed': colors.zinc[900],
        error: colors.red[600],
        'error-dark': colors.red[500],
      },
      fill: {
        th: colors.zinc[500],
        'th-dark': colors.zinc[400],
      },
      borderColor: {
        th: colors.zinc[700],
        'th-dark': colors.zinc[300],
        error: colors.red[600],
        'error-dark': colors.red[500],
      },
      ringColor: {
        th: colors.zinc[700],
        'th-dark': colors.zinc[300],
        error: colors.red[600],
        'error-dark': colors.red[500],
      },
      spacing: {
        icon: spacing[4],
        input: spacing[9],
      },
      lineHeight: {
        th: lineHeight[9],
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
          '0%': { transform: 'scale(1)', opacity: 1 },
          '100%': { transform: 'scale(0)', opacity: 0 },
        },
      },
      animation: {
        'modal-grow': 'modal-grow 150ms cubic-bezier(0.4, 0, 0.2, 1)',
        'modal-shrink': 'modal-shrink 150ms cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
    data: {
      disabled: 'disabled',
      focused: 'focused',
      selected: 'selected',
    },
  },
};
