import { Key } from '@react-types/shared';
import { ListBoxItem, type ListBoxItemProps } from 'react-aria-components';

import { Icon } from '../assets/Icon';
import { twMerge } from '../utils';

export interface ItemProps<T extends Key>
  extends Omit<ListBoxItemProps<{ value: T }>, 'value' | 'children' | 'textValue'> {
  value?: T;
  textValue: string;
  className?: string;
}

export const Item = <T extends Key>({ value, textValue, className, ...props }: ItemProps<T>) => (
  <ListBoxItem
    {...props}
    value={{ value }}
    textValue={textValue}
    id={value}
    className={twMerge(
      `flex items-center pl-6 pr-3 py-1
        cursor-pointer outline-none
        rounded-md
        text-th
        hover:text-primary
        hover:bg-th-hover
        ring-primary
        hover:ring-2`,
      className,
    )}
  >
    {({ isSelected }) => (
      <>
        {isSelected && (
          <Icon id="check" width={18} height={18} className="py-0.5 -ml-5 mr-0.5 text-valid" />
        )}
        {textValue}
      </>
    )}
  </ListBoxItem>
);
