import { Button as AriaButton, ButtonProps as AriaButtonProps } from 'react-aria-components';
import type { FC, PropsWithChildren, RefAttributes } from 'react';
import { Icon } from 'react-feather';
import { twMerge } from 'tailwind-merge';

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
    className={twMerge(
      `disabled:cursor-not-allowed disabled:opacity-disabled
      data-focused:ring-2 ring-th dark:ring-th-dark
      ring-offset-2 ring-offset-th dark:ring-offset-th-dark`,
      variant !== 'unstyled' &&
        `inline-flex items-center h-input w-fit px-2 space-x-2
        text-th-primary dark:text-th-dark-primary
        border rounded-md border-th-primary dark:border-th-dark-primary
        bg-th hover:enabled:bg-th-primary/5
        dark:bg-th-dark dark:hover:enabled:bg-th-dark-primary/5`,
      className,
    )}
  >
    {IconStart !== undefined && <IconStart className="h-icon w-icon" />}
    {children && <span>{children}</span>}
    {IconEnd !== undefined && <IconEnd className="h-icon w-icon" />}
  </AriaButton>
);
