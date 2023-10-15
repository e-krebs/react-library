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
      ring-offset-2 ring-offset-th
      disabled:cursor-not-allowed disabled:opacity-disabled
      duration-150 motion-reduce:transition-none`,
      variant === 'unstyled'
        ? 'transition-[box-shadow] hover:enabled:bg-th-hover'
        : 'transition-all border',
      variant === 'regular' &&
        `text-primary border-primary ring-primary
        bg-th hover:enabled:bg-primary/5`,
      variant === 'primary' &&
        `font-medium
        text-th-reversed border-primary ring-primary
        bg-primary hover:enabled:bg-primary/95`,
      variant === 'destructive' &&
        `font-medium
        text-destructive
        border-destructive
        bg-th hover:enabled:bg-destructive/5
        ring-destructive`,
      className,
    )}
  >
    {IconStart !== undefined && <IconStart className="h-icon w-icon" />}
    {children && <span className="inline-flex items-center">{children}</span>}
    {IconEnd !== undefined && <IconEnd className="h-icon w-icon" />}
  </AriaButton>
);
