import { Key } from '@react-types/shared';
import { type PropsWithChildren } from 'react';
import { ListBoxItem, type ListBoxItemProps } from 'react-aria-components';

import { Icon } from '../assets/Icon';

export interface ItemProps<T extends Key>
  extends Omit<ListBoxItemProps<{ value: T }>, 'value' | 'children' | 'textValue'> {
  value?: T;
  textValue: string;
}

export const Item = <T extends Key>({
  value,
  textValue,
  className,
  children,
  ...props
}: PropsWithChildren<ItemProps<T>>) => (
  <ListBoxItem
    className="flex items-center pl-6 pr-3 py-1
      cursor-pointer hover:outline-none
      rounded-md
      text-th
      hover:text-primary
      hover:bg-th-hover
      ring-primary
      hover:ring-2"
    {...props}
    value={{ value }}
    textValue={textValue}
    id={value}
  >
    {({ isSelected }) => (
      <>
        {isSelected && (
          <Icon id="check" width={18} height={18} className="py-0.5 -ml-5 mr-0.5 text-valid" />
        )}
        {children ?? textValue}
      </>
    )}
  </ListBoxItem>
);
