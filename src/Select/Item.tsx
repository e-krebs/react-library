import { Item as AriaItem, type ItemProps as AriaItemProps } from 'react-aria-components';
import { Check } from 'react-feather';

interface ItemProps<T> extends Omit<AriaItemProps<{ value: T }>, 'value'> {
  value?: T;
}

export function Item<T>({ children, value, childItems, ...props }: ItemProps<T>) {
  return (
    <AriaItem
      {...props}
      value={{ value }}
      className="flex items-center px-3 py-1 hover:bg-gray-200 hover:dark:bg-gray-700"
    >
      {({ isSelected }) => (
        <>
          {children}
          {isSelected && <Check className="py-0.5 pl-2 text-green-600 dark:text-green-400" />}
        </>
      )}
    </AriaItem>
  );
}
