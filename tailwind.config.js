const colors = require('tailwindcss/colors');
const typography = require('@tailwindcss/typography');

module.exports = {
  content: ["./{src,.ladle}/**/*.{ts,tsx}"],
  safelist: ["ladle-addons", 'ladle-wrapper'],
  theme: {
    extend: {
      colors: {
        'gray': colors.zinc,
      },
    },
  },
  plugins: [typography],
};
