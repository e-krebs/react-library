import { type ItemProps } from '../src/Select/Item';

const themes = ['yellow', 'blue'] as const;

export type Theme = (typeof themes)[number];

export type ThemeItem = ItemProps<Theme>;

export const items: ThemeItem[] = [
  { textValue: 'black & white', value: undefined },
  ...themes.map((theme) => ({ textValue: theme, value: theme })),
];

const itemClassName: Record<Theme, string> = {
  yellow: 'text-yellow-500 dark:text-yellow-400',
  blue: 'text-sky-500 dark:text-sky-400',
};

export const getThemeClassName = (theme?: Theme | null): string | undefined =>
  theme ? itemClassName[theme] : undefined;
