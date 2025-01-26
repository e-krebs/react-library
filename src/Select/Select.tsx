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
    className="flex data-[flow=col]:flex-col data-[flow=col]:w-fit data-[flow=row]:flex-row data-[flow=row]:space-x-2"
    {...props}
    data-error={Boolean(errorMessage)}
    data-flow={flow}
    data-border={border}
    onSelectionChange={onSelectionChange as ((key: Key) => void) | undefined}
  >
    <Label className="leading-th data-error:selection:bg-error">{label}</Label>
    <Button
      // rounded-none is necessary for iPad
      className="flex items-center leading-th-input
          disabled:cursor-not-allowed disabled:opacity-disabled
          bg-th-light
          border-th-light data-error:border-error
          focus:border-transparent dark:focus:border-transparent
          focus:outline-hidden appearance-none focus:ring-2 ring-offset-0
          ring-primary data-error:ring-error
          hover:bg-th-hover
          rounded-none in-data-[border=rounded]:rounded-md
          in-data-[border=bottom]:border-b in-data-[border=bottom]:focus:border-b-transparent dark:in-data-[border=bottom]:focus:border-b-transparent
          in-data-[border=rounded]:border"
    >
      <SelectValue
        className="grow px-3 py-1 data-error:selection:bg-error
          in-data-[border=rounded]:relative
          in-data-[border=rounded]:after:absolute
          after:-bottom-px
          in-data-[border=rounded]:after:-right-px
          in-data-[border=rounded]:after:w-px
          in-data-[border=rounded]:after:h-px
          in-data-[border=rounded]:in-focus:after:bg-primary
          in-data-[border=rounded]:before:absolute
          in-data-[border=rounded]:before:-top-px
          in-data-[border=rounded]:before:-right-px
          in-data-[border=rounded]:before:w-px
          in-data-[border=rounded]:before:h-px
          in-data-[border=rounded]:in-focus:before:bg-primary"
      />
      <Icon
        id="chevron-down"
        aria-hidden="true"
        className="my-auto min-h-full border-l px-3 py-1 w-input h-input
          border-th-bg in-data-[border=rounded]:border-th-light
          in-focus:not-in-data-[open=true]:in-data-[border=rounded]:border-primary
          data-error:text-error
          in-data-[border=rounded]:data-error:border-error
          in-data-[border=rounded]:data-error:in-focus:border-error"
      />
    </Button>
    {description && (
      <Text slot="description" className="leading-th data-error:selection:bg-error">
        {description}
      </Text>
    )}
    {errorMessage && (
      <Text slot="errorMessage" className="leading-th text-destructive data-error:selection:bg-error">
        {errorMessage}
      </Text>
    )}
    <Popover
      className="rounded-md leading-7
          border border-th-light
          bg-th
          shadow-th"
    >
      <ListBox className="p-2 outline-hidden">
        {children ? children : items?.map((item) => <Select.Item key={item.textValue} {...item} />)}
      </ListBox>
    </Popover>
  </AriaSelect>
);

Select.Item = Item;
