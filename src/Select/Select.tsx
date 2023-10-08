import type { Key, ReactNode } from 'react';
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

import { twMerge, type RequireAtLeastOne } from '../utils';
import type { InputBorder, InputFlow } from '../types';
import { Item, type ItemProps } from './Item';

type SelectProps<T extends Key> = Omit<AriaSelectProps<ItemProps<T>>, 'children'> & {
  label?: string;
  description?: string;
  errorMessage?: string;
  className?: string;
  labelClassName?: string;
  flow?: InputFlow;
  flowClassName?: string;
  border?: InputBorder;
  popoverClassName?: string;
} & RequireAtLeastOne<{
    items: ItemProps<T>[];
    children: ReactNode | ((item: ItemProps<T>) => ReactNode);
  }>;

export const Select = <T extends Key>({
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
}: SelectProps<T>) => (
  <AriaSelect
    {...props}
    className={twMerge('flex', flow === 'row' ? 'flex-row space-x-2' : 'w-fit flex-col', flowClassName)}
  >
    <Label className={twMerge('leading-th', labelClassName)}>{label}</Label>
    <Button
      className={twMerge(
        `group flex items-center leading-th-input
          disabled:cursor-not-allowed disabled:opacity-disabled
          bg-th-light
          border-th/50 dark:border-th-dark/50
          focus:border-transparent focus:dark:border-transparent
          focus:outline-none appearance-none focus:ring-2 ring-offset-0
          ring-th-primary dark:ring-th-dark-primary
          hover:bg-th-hover`,
        errorMessage && `border-error dark:border-error-dark ring-error dark:ring-error-dark`,
        border === 'rounded' ? 'rounded-md' : 'rounded-none', // rounded-none is necessary for iPad
        border === 'bottom' && `border-b focus:border-b-transparent focus:dark:border-b-transparent`,
        border === 'rounded' && 'border',
      )}
    >
      <SelectValue
        className={twMerge(
          className,
          'grow px-3 py-1',
          border === 'rounded' &&
            `relative
            after:absolute after:-bottom-px after:-right-px after:w-px after:h-px
            after:group-focus:bg-th-primary after:dark:group-focus:bg-th-dark-primary
            before:absolute before:-top-px before:-right-px before:w-px before:h-px
            before:group-focus:bg-th-primary before:dark:group-focus:bg-th-dark-primary`,
        )}
      />
      <ChevronDown
        aria-hidden="true"
        className={twMerge(
          'my-auto min-h-full',
          border === 'rounded'
            ? 'border-th/50 dark:border-th-dark/50 group-focus:border-th-primary group-focus:dark:border-th-dark-primary'
            : 'border-th-bg dark:border-th-dark-bg',
          'border-l px-3 py-1 w-input h-input',
          errorMessage && 'text-error dark:text-error-dark',
          errorMessage &&
            border === 'rounded' &&
            'border-error dark:border-error-dark group-focus:border-error group-focus:dark:border-error-dark',
        )}
      />
    </Button>
    {description && (
      <Text slot="description" className="leading-th">
        {description}
      </Text>
    )}
    {errorMessage && (
      <Text slot="errorMessage" className="leading-th text-th-destructive dark:text-th-dark-destructive">
        {errorMessage}
      </Text>
    )}
    <Popover
      className={twMerge(
        `rounded-md leading-7
          border border-th/50 dark:border-th-dark/50
          bg-th
          shadow-md dark:shadow-inner`,
        popoverClassName,
      )}
    >
      <ListBox className="p-2 outline-none" items={items}>
        {children ? children : items?.map((item) => <Select.Item key={item.textValue} {...item} />)}
      </ListBox>
    </Popover>
  </AriaSelect>
);

Select.Item = Item;
