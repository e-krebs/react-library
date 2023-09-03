const { opacity, spacing } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const typography = require('@tailwindcss/typography');

const primary = {
  50: `var(--primary-50,  ${colors.zinc[50]})`,
  100: `var(--primary-100, ${colors.zinc[100]})`,
  200: `var(--primary-200, ${colors.zinc[200]})`,
  300: `var(--primary-300, ${colors.zinc[300]})`,
  400: `var(--primary-400, ${colors.zinc[400]})`,
  500: `var(--primary-500, ${colors.zinc[500]})`,
  600: `var(--primary-600, ${colors.zinc[600]})`,
  700: `var(--primary-700, ${colors.zinc[700]})`,
  800: `var(--primary-800, ${colors.zinc[800]})`,
  900: `var(--primary-900, ${colors.zinc[900]})`,
  950: `var(--primary-950, ${colors.zinc[950]})`,
};

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: colors.zinc,
        primary,
        'th-primary': primary[500],
        'th-dark-primary': primary[300],
      },
      backgroundColor: {
        th: colors.white,
        'th-hover': colors.zinc[200],
        'th-dark': colors.zinc[900],
        'th-dark-hover': colors.zinc[700],
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
      },
      fill: {
        th: colors.zinc[500],
        'th-dark': colors.zinc[400],
      },
      borderColor: {
        th: colors.zinc[700],
        'th-dark': colors.zinc[300],
      },
      ringColor: {
        th: colors.zinc[700],
        'th-dark': colors.zinc[300],
      },
      spacing: {
        icon: spacing[4],
        input: spacing[9],
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
  plugins: [typography],
};
