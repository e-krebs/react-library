const themes = ['yellow', 'blue'] as const;

export type Theme = (typeof themes)[number];

interface ThemeItem {
  value: string;
  name: Theme | null;
}

export const items: ThemeItem[] = [
  { value: 'black & white', name: null },
  ...themes.map((theme) => ({ value: theme, name: theme })),
];

const itemClassName: Record<Theme, string> = {
  yellow: 'text-yellow-500 dark:text-yellow-300',
  blue: 'text-sky-500 dark:text-sky-300',
};

export const getThemeClassName = (theme?: Theme | null): string | undefined =>
  theme ? itemClassName[theme] : undefined;
