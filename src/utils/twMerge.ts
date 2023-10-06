import { extendTailwindMerge } from 'tailwind-merge';

export const twMerge = extendTailwindMerge({
  theme: {
    spacing: ['icon', 'input', 'initial'],
  },
});
