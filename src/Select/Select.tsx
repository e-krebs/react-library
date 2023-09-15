import cx from 'classnames';
import type { ReactNode } from 'react';
import {
  Button,
  Label,
  ListBox,
  Popover,
  Select as AriaSelect,
  type SelectProps as AriaSelectProps,
  SelectValue,
} from 'react-aria-components';
import { Text } from 'react-aria-components';
import { ChevronDown } from 'react-feather';

import type { InputBorder, InputFlow } from '../types';
import { Item } from './Item';

interface SelectProps<T extends object> extends Omit<AriaSelectProps<T>, 'children'> {
  label?: string;
  description?: string;
  errorMessage?: string;
  items?: Iterable<T>;
  className?: string;
  labelClassName?: string;
  flow?: InputFlow;
  flowClassName?: string;
  border?: InputBorder;
  popoverClassName?: string;
  children: ReactNode | ((item: T) => ReactNode);
}

export const Select = <T extends object>({
  label,
  className,
  labelClassName,
  flow,
  flowClassName,
  description,
  errorMessage,
  border = 'bottom',
  popoverClassName,
  children,
  items,
  ...props
}: SelectProps<T>) => {
  const buttonClassName = 'px-3 py-1 w-9 h-9';

  return (
    <AriaSelect
      {...props}
      className={cx('flex', flow === 'row' ? 'flex-row space-x-2' : 'w-fit flex-col', flowClassName)}
    >
      <Label className={cx('leading-9', labelClassName)}>{label}</Label>
      <Button
        className={cx(
          `flex items-center border-gray-500 bg-gray-100 leading-7
          hover:bg-gray-200 dark:bg-gray-800 hover:dark:bg-gray-700`,
          border === 'rounded' ? 'rounded-md' : 'rounded-none', // rounded-none is necessary for iPad
          border === 'bottom' && 'border-b',
          border === 'rounded' && 'border',
        )}
      >
        <SelectValue className={cx(className, 'grow px-3 py-1 dark:border-gray-400 ')} />
        <ChevronDown
          aria-hidden="true"
          className={cx(
            border === 'rounded'
              ? 'border-gray-500 dark:border-gray-400'
              : 'border-white dark:border-gray-900',
            'border-l',
            buttonClassName,
          )}
        />
      </Button>
      {description && (
        <Text slot="description" className="leading-9">
          {description}
        </Text>
      )}
      {errorMessage && (
        <Text slot="errorMessage" className="leading-9 text-red-600 dark:text-red-400">
          {errorMessage}
        </Text>
      )}
      <Popover
        className={cx(
          `rounded-md border border-gray-500 bg-gray-100 leading-7 shadow-lg
          dark:border-gray-400 dark:bg-gray-800 dark:shadow-gray-700`,
          popoverClassName,
        )}
      >
        <ListBox items={items}>{children}</ListBox>
      </Popover>
    </AriaSelect>
  );
};
Select.Item = Item;
