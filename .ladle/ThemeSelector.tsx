import React, { FC, useEffect, useState } from 'react';

import { type Theme, items, getThemeClassName, ThemeItem } from './Theme';
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
    <Select label="theme" border="rounded" flow="row" selectedKey={theme} onSelectionChange={setTheme}>
      {items.map((props: ThemeItem) => (
        <Select.Item {...props} key={props.textValue}>
          <span className={getThemeClassName(props.value)}>{props.textValue}</span>
        </Select.Item>
      ))}
    </Select>
  );
};
