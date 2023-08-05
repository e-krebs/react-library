import React, { FC, Key, useEffect, useMemo, useState } from 'react';

import { Select } from '../src/Select';

const themes = ['yellow', 'blue'] as const;
type Theme = typeof themes[number];
interface ThemeItem {
  value: string;
  name: Theme | null;
}
const items: ThemeItem[] = [
  { value: 'black & white', name: null },
  ...themes.map(theme => ({ value: theme, name: theme }))
]

const itemClassName: Record<Theme, string> = {
  yellow: 'text-yellow-500 dark:text-yellow-300',
  blue: 'text-sky-500 dark:text-sky-300',
}

export const ThemeSelector: FC = () => {
  const [value, setValue] = useState<Key>('yellow' as Theme);

  const theme = useMemo(() => themes.includes(value as Theme) ? value as Theme : undefined, [value])

  useEffect(() => {
    if (theme) {
      document.body.setAttribute('data-theme', theme);
    } else {
      document.body.removeAttribute('data-theme');
    }
  }, [theme]);

  return (
    <Select
      label="theme"
      border="rounded"
      flow="row"
      items={items}
      selectedKey={value}
      onSelectionChange={setValue}
      className={theme && itemClassName[theme]}
    >
    {(item: ThemeItem) => (
      <Select.Item
        id={item.value}
        value={item.name}
        textValue={item.value}
        className={item.name ? itemClassName[item.name] : undefined}
      >
        {item.value}
      </Select.Item>
    )}
    </Select>
  )
}