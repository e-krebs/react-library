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
import { type RequireAtLeastOne } from '../utils';
import type { InputBorder, InputFlow } from '../types';
import { Item, type ItemProps } from './Item';

type SelectProps<T extends Key> = Omit<
  AriaSelectProps<ItemProps<T>>,
  'children' | 'selectedKey' | 'defaultSelectedKey' | 'onSelectionChange' | 'className'
> & {
  label?: string;
  description?: string;
  errorMessage?: string;
  flow?: InputFlow;
  border?: InputBorder;
  selectedKey?: T | null;
  defaultSelectedKey?: T;
  onSelectionChange?: (key: T) => void;
} & RequireAtLeastOne<{
    items: ItemProps<T>[];
    children: ReactNode | ((item: ItemProps<T>) => ReactNode);
  }>;

export const Select = <T extends Key>({
  label,
  flow = 'col',
  description,
  errorMessage,
  border = 'bottom',
  children,
  items,
  onSelectionChange,
  ...props
}: SelectProps<T>) => (
  <AriaSelect
    className="group flex data-[flow=col]:flex-col data-[flow=col]:w-fit data-[flow=row]:flex-row data-[flow=row]:space-x-2"
    {...props}
    data-error={Boolean(errorMessage)}
    data-flow={flow}
    data-border={border}
    onSelectionChange={onSelectionChange as ((key: Key) => void) | undefined}
  >
    <Label className="leading-th group-data-error:selection:bg-error">{label}</Label>
    <Button
      // rounded-none is necessary for iPad
      className="group/button flex items-center leading-th-input
          disabled:cursor-not-allowed disabled:opacity-disabled
          bg-th-light
          border-th-light group-data-error:border-error
          focus:border-transparent focus:dark:border-transparent
          focus:outline-none appearance-none focus:ring-2 ring-offset-0
          ring-primary group-data-error:ring-error
          hover:bg-th-hover
          rounded-none group-data-[border=rounded]:rounded-md
          group-data-[border=bottom]:border-b focus:group-data-[border=bottom]:border-b-transparent focus:dark:group-data-[border=bottom]:border-b-transparent
          group-data-[border=rounded]:border"
    >
      <SelectValue
        className="grow px-3 py-1 group-data-error:selection:bg-error
          group-data-[border=rounded]:relative
          group-data-[border=rounded]:after:absolute
          after:-bottom-px
          group-data-[border=rounded]:after:-right-px
          group-data-[border=rounded]:after:w-px
          group-data-[border=rounded]:after:h-px
          group-data-[border=rounded]:after:group-focus/button:bg-primary
          group-data-[border=rounded]:before:absolute
          group-data-[border=rounded]:before:-top-px
          group-data-[border=rounded]:before:-right-px
          group-data-[border=rounded]:before:w-px
          group-data-[border=rounded]:before:h-px
          group-data-[border=rounded]:before:group-focus/button:bg-primary"
      />
      <Icon
        id="chevron-down"
        aria-hidden="true"
        className="my-auto min-h-full border-l px-3 py-1 w-input h-input
          border-th-bg group-data-[border=rounded]:border-th-light
          group-focus/button:group-data-[border=rounded]:border-primary
          group-data-error:text-error
          group-data-[border=rounded]:group-data-error:border-error
          group-data-[border=rounded]:group-data-error:group-focus/button:border-error"
      />
    </Button>
    {description && (
      <Text slot="description" className="leading-th group-data-error:selection:bg-error">
        {description}
      </Text>
    )}
    {errorMessage && (
      <Text
        slot="errorMessage"
        className="leading-th text-destructive group-data-error:selection:bg-error"
      >
        {errorMessage}
      </Text>
    )}
    <Popover
      className="rounded-md leading-7
          border border-th-light
          bg-th
          shadow-th"
    >
      <ListBox className="p-2 outline-none">
        {children ? children : items?.map((item) => <Select.Item key={item.textValue} {...item} />)}
      </ListBox>
    </Popover>
  </AriaSelect>
);

Select.Item = Item;
