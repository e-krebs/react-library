import React, { FC, useEffect, useState } from 'react';

import { type Theme, items, getThemeClassName } from './Theme';

import { Select } from '../src/Select';

export const ThemeSelector: FC = () => {
  const [theme, setTheme] = useState<Theme | null>('yellow' as Theme);

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
      selectedKey={theme}
      onSelectionChange={(value) => setTheme((value as unknown as (typeof items)[number]).name)}
      className={getThemeClassName(theme)}
    >
      {(item) => (
        <Select.Item
          id={item.value}
          value={item.name}
          textValue={item.value}
          className={getThemeClassName(item.name)}
        >
          {item.value}
        </Select.Item>
      )}
    </Select>
  );
};
