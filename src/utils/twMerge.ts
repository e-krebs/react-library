import { extendTailwindMerge } from 'tailwind-merge';

export const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      spacing: ['icon', 'input', 'initial'],
    },
  },
});
