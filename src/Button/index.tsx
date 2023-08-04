import { Button as AriaButton, ButtonProps as AriaButtonProps } from 'react-aria-components';
import cx from 'classnames';
import type { FC, PropsWithChildren, RefAttributes } from 'react';
import { Icon } from 'react-feather';

export interface ButtonProps
  extends PropsWithChildren<AriaButtonProps & RefAttributes<HTMLButtonElement>> {
  className?: string;
  iconStart?: Icon;
  iconEnd?: Icon;
  variant?: 'regular' | 'unstyled';
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  iconStart: IconStart,
  iconEnd: IconEnd,
  variant = 'regular',
  ...props
}) => (
  <AriaButton
    {...props}
    className={({ isDisabled }) =>
      cx(
        variant !== 'unstyled' &&
          `inline-flex h-9 w-fit items-center space-x-2
          rounded-md border border-gray-500 bg-gray-100 px-2
          dark:border-gray-400 dark:bg-gray-800 `,
        isDisabled && 'cursor-not-allowed opacity-40',
        !isDisabled && variant !== 'unstyled' && 'hover:bg-gray-200 hover:dark:bg-gray-700',
        className,
      )
    }
  >
    {IconStart !== undefined && <IconStart className="h-4 w-4" />}
    {children && <span>{children}</span>}
    {IconEnd !== undefined && <IconEnd className="h-4 w-4" />}
  </AriaButton>
);
