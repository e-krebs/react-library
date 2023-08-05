import React, { FC, Key, useEffect, useState } from 'react';

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

  useEffect(() => {
    const theme = themes.includes(value as Theme)
    ? value as Theme
    : '';
    document.body.setAttribute('data-theme', theme)
  }, [value]);

  return (
    <Select
      label="theme"
      border="rounded"
      flow="row"
      items={items}
      selectedKey={value}
      onSelectionChange={setValue}
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