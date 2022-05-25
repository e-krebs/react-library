const shared = require('./shared.tailwind.config');

module.exports = {
  extends: [shared],
  content: ["./{src,.ladle}/**/*.{ts,tsx}"],
  safelist: ["ladle-addons", 'ladle-wrapper', 'ladle-controls-table', 'ladle-aside'],
};
