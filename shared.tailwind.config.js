const colors = require('tailwindcss/colors');
const typography = require('@tailwindcss/typography');

const primary = {
  '50':  `var(--primary-50,  ${colors.zinc[50]})`,
  '100': `var(--primary-100, ${colors.zinc[100]})`,
  '200': `var(--primary-200, ${colors.zinc[200]})`,
  '300': `var(--primary-300, ${colors.zinc[300]})`,
  '400': `var(--primary-400, ${colors.zinc[400]})`,
  '500': `var(--primary-500, ${colors.zinc[500]})`,
  '600': `var(--primary-600, ${colors.zinc[600]})`,
  '700': `var(--primary-700, ${colors.zinc[700]})`,
  '800': `var(--primary-800, ${colors.zinc[800]})`,
  '900': `var(--primary-900, ${colors.zinc[900]})`,
  '950': `var(--primary-950, ${colors.zinc[950]})`,
};

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'gray': colors.zinc,
        primary,
      },
      keyframes: {
        'modal-grow': {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' }
        },
        'modal-shrink': {
          '0%': { transform: 'scale(1)', opacity: 1 },
          '100%': { transform: 'scale(0)', opacity: 0 }
        }
      },
      animation: {
        'modal-grow': 'modal-grow 150ms cubic-bezier(0.4, 0, 0.2, 1)',
        'modal-shrink': 'modal-shrink 150ms cubic-bezier(0.4, 0, 0.2, 1)'
      }
    },
  },
  plugins: [typography],
};
