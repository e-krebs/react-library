const { opacity, spacing } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const typography = require('@tailwindcss/typography');

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: colors.zinc,
        primary: {
          50: `rgb(var(--primary-50,  ${colors.zinc[50]}) / <alpha-value>)`,
          100: `rgb(var(--primary-100, ${colors.zinc[100]}) / <alpha-value>)`,
          200: `rgb(var(--primary-200, ${colors.zinc[200]}) / <alpha-value>)`,
          300: `rgb(var(--primary-300, ${colors.zinc[300]}) / <alpha-value>)`,
          400: `rgb(var(--primary-400, ${colors.zinc[400]}) / <alpha-value>)`,
          500: `rgb(var(--primary-500, ${colors.zinc[500]}) / <alpha-value>)`,
          600: `rgb(var(--primary-600, ${colors.zinc[600]}) / <alpha-value>)`,
          700: `rgb(var(--primary-700, ${colors.zinc[700]}) / <alpha-value>)`,
          800: `rgb(var(--primary-800, ${colors.zinc[800]}) / <alpha-value>)`,
          900: `rgb(var(--primary-900, ${colors.zinc[900]}) / <alpha-value>)`,
          950: `rgb(var(--primary-950, ${colors.zinc[950]}) / <alpha-value>)`,
        },
        'th-primary': `rgb(var(--primary-500, ${colors.zinc[500]}) / <alpha-value>)`,
        'th-dark-primary': `rgb(var(--primary-500, ${colors.zinc[500]}) / <alpha-value>)`,
        'th-destructive': colors.red[600],
        'th-dark-destructive': colors.red[600],
      },
      backgroundColor: {
        th: colors.zinc[50],
        'th-hover': colors.zinc[100],
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
        'th-reversed': colors.zinc[50],
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
