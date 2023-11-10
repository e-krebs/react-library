import type { ReactNode } from 'react';
import type { Key } from '@react-types/shared';
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

import { Icon } from '../assets/Icon';
import { twMerge, type RequireAtLeastOne } from '../utils';
import type { InputBorder, InputFlow } from '../types';
import { Item, type ItemProps } from './Item';

type SelectProps<T extends Key> = Omit<
  AriaSelectProps<ItemProps<T>>,
  'children' | 'selectedKey' | 'defaultSelectedKey' | 'onSelectionChange'
> & {
  label?: string;
  description?: string;
  errorMessage?: string;
  className?: string;
  labelClassName?: string;
  flow?: InputFlow;
  flowClassName?: string;
  border?: InputBorder;
  popoverClassName?: string;
  selectedKey?: T | null;
  defaultSelectedKey?: T;
  onSelectionChange?: (key: T) => void;
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
  onSelectionChange,
  ...props
}: SelectProps<T>) => (
  <AriaSelect
    {...props}
    onSelectionChange={onSelectionChange as ((key: Key) => void) | undefined}
    className={twMerge('flex', flow === 'row' ? 'flex-row space-x-2' : 'w-fit flex-col', flowClassName)}
  >
    <Label className={twMerge('leading-th', errorMessage && 'selection:bg-error', labelClassName)}>
      {label}
    </Label>
    <Button
      className={twMerge(
        `group flex items-center leading-th-input
          disabled:cursor-not-allowed disabled:opacity-disabled
          bg-th-light
          border-th-light
          focus:border-transparent focus:dark:border-transparent
          focus:outline-none appearance-none focus:ring-2 ring-offset-0
          ring-primary
          hover:bg-th-hover`,
        errorMessage && 'border-error ring-error',
        border === 'rounded' ? 'rounded-md' : 'rounded-none', // rounded-none is necessary for iPad
        border === 'bottom' && `border-b focus:border-b-transparent focus:dark:border-b-transparent`,
        border === 'rounded' && 'border',
      )}
      data-error={Boolean(errorMessage)}
    >
      <SelectValue
        className={twMerge(
          className,
          'grow px-3 py-1',
          border === 'rounded' &&
            `relative
            after:absolute after:-bottom-px after:-right-px after:w-px after:h-px
            after:group-focus:bg-primary
            before:absolute before:-top-px before:-right-px before:w-px before:h-px
            before:group-focus:bg-primary`,
          errorMessage && 'selection:bg-error',
        )}
      />
      <Icon
        id="chevron-down"
        aria-hidden="true"
        className={twMerge(
          'my-auto min-h-full border-l px-3 py-1 w-input h-input',
          border === 'rounded' ? 'border-th-light group-focus:border-primary' : 'border-th-bg',
          errorMessage && 'text-error',
          errorMessage && border === 'rounded' && 'border-error group-focus:border-error',
        )}
      />
    </Button>
    {description && (
      <Text slot="description" className={twMerge('leading-th', errorMessage && 'selection:bg-error')}>
        {description}
      </Text>
    )}
    {errorMessage && (
      <Text
        slot="errorMessage"
        className={twMerge('leading-th text-destructive', errorMessage && 'selection:bg-error')}
      >
        {errorMessage}
      </Text>
    )}
    <Popover
      className={twMerge(
        `rounded-md leading-7
          border border-th-light
          bg-th
          shadow-th`,
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
