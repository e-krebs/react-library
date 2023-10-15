import { Button as AriaButton, ButtonProps as AriaButtonProps } from 'react-aria-components';
import type { FC, PropsWithChildren, RefAttributes } from 'react';
import { Icon } from 'react-feather';

import { twMerge } from '../utils';

export interface ButtonProps
  extends PropsWithChildren<AriaButtonProps & RefAttributes<HTMLButtonElement>> {
  className?: string;
  iconStart?: Icon;
  iconEnd?: Icon;
  variant?: 'regular' | 'primary' | 'destructive' | 'unstyled';
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
      `inline-flex items-center h-input w-fit
      px-2 space-x-2 rounded-md
      focus:outline-none focus:ring-2
      ring-offset-2 ring-offset-th dark:ring-offset-th-dark
      disabled:cursor-not-allowed disabled:opacity-disabled
      transition-all duration-150 motion-reduce:transition-none`,
      variant !== 'unstyled' && 'border',
      variant === 'unstyled' && 'hover:enabled:bg-th-hover',
      variant === 'regular' &&
        `text-th-primary dark:text-th-dark-primary
        border-th-primary dark:border-th-dark-primary
        bg-th hover:enabled:bg-th-primary/5
        dark:hover:enabled:bg-th-dark-primary/5
        ring-th-primary dark:ring-th-dark-primary`,
      variant === 'primary' &&
        `text-th-reversed font-medium
        border-th-primary hover:enabled:border-th-primary/95
        dark:border-th-dark-primary dark:hover:enabled:border-th-dark-primary/95
        bg-th-primary hover:enabled:bg-th-primary/95
        dark:bg-th-dark-primary dark:hover:enabled:bg-th-dark-primary/95
        ring-th-primary dark:ring-th-dark-primary`,
      variant === 'destructive' &&
        `text-th-destructive dark:text-th-dark-destructive font-medium
        border-th-destructive hover:enabled:border-th-destructive/95
        dark:border-th-dark-destructive dark:hover:enabled:border-th-dark-destructive/95
        bg-th hover:enabled:bg-th-destructive/5
        dark:hover:enabled:bg-th-dark-destructive/5
        ring-th-destructive dark:ring-th-dark-destructive`,
      className,
    )}
  >
    {IconStart !== undefined && <IconStart className="h-icon w-icon" />}
    {children && <span className="inline-flex items-center">{children}</span>}
    {IconEnd !== undefined && <IconEnd className="h-icon w-icon" />}
  </AriaButton>
);
