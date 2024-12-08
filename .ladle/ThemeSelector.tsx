import React, { FC, useEffect, useState } from 'react';

import { type Theme, items, getThemeClassName } from './Theme';
import { Select } from '../src/Select';

export const ThemeSelector: FC = () => {
  const [theme, setTheme] = useState<Theme | undefined>('yellow' as Theme);

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
      onSelectionChange={setTheme}
      className={getThemeClassName(theme)}
    />
  );
};
