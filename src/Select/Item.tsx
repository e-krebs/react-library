import { Item as AriaItem, type ItemProps as AriaItemProps } from 'react-aria-components';
import { Check } from 'react-feather';
import { twMerge } from 'tailwind-merge';

interface ItemProps<T> extends Omit<AriaItemProps<{ value: T }>, 'value'> {
  value?: T;
  className?: string;
}

export function Item<T>({ children, value, childItems, className, ...props }: ItemProps<T>) {
  return (
    <AriaItem
      {...props}
      value={{ value }}
      className={twMerge(
        'flex items-center px-3 py-1 text-gray-500 hover:bg-gray-200 dark:text-gray-400 hover:dark:bg-gray-700',
        className,
      )}
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
