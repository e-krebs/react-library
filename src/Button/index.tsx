import { Button as AriaButton, ButtonProps as AriaButtonProps } from 'react-aria-components';
import type { FC, PropsWithChildren, RefAttributes } from 'react';

import { type IconComponent } from '../types';

export interface ButtonProps
  extends PropsWithChildren<AriaButtonProps & RefAttributes<HTMLButtonElement>> {
  iconStart?: IconComponent;
  iconEnd?: IconComponent;
  variant?: 'regular' | 'primary' | 'destructive' | 'unstyled';
}

export const Button: FC<ButtonProps> = ({
  children,
  iconStart: IconStart,
  iconEnd: IconEnd,
  variant = 'regular',
  ...props
}) => (
  <AriaButton
    data-variant={variant}
    className="inline-flex items-center h-input w-fit
      px-2 space-x-2 rounded-md
      focus:outline-hidden focus:ring-2
      ring-offset-2 ring-offset-th
      disabled:cursor-not-allowed disabled:opacity-disabled
      duration-150 motion-reduce:transition-none
      transition-all data-[variant=unstyled]:transition-[box-shadow]
      data-[variant=regular]:text-primary
      data-[variant=destructive]:text-destructive
      data-[variant=primary]:font-medium
      data-[variant=destructive]:font-medium
      data-[variant=primary]:text-th-reversed
      border
      data-[variant=unstyled]:border-none
      data-[variant=regular]:border-primary
      data-[variant=primary]:border-primary
      data-[variant=destructive]:border-destructive
      data-[variant=regular]:ring-primary
      data-[variant=primary]:ring-primary
      data-[variant=destructive]:ring-destructive
      data-[variant=regular]:bg-th
      data-[variant=primary]:bg-primary
      data-[variant=destructive]:bg-th
      hover:enabled:data-[variant=unstyled]:bg-th-hover
      hover:enabled:data-[variant=regular]:bg-primary/5
      hover:enabled:data-[variant=primary]:bg-primary/95
      hover:enabled:data-[variant=destructive]:bg-destructive/5
      data-[variant=primary]:selection:bg-th-reversed
      data-[variant=destructive]:selection:bg-error"
    {...props}
  >
    {IconStart !== undefined && <IconStart className="h-icon w-icon" />}
    {children && <span className="inline-flex items-center">{children}</span>}
    {IconEnd !== undefined && <IconEnd className="h-icon w-icon" />}
  </AriaButton>
);
