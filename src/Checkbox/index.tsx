import type { FC, RefAttributes } from 'react';
import {
  Checkbox as AriaCheckBox,
  type CheckboxProps as AriaCheckboxProps,
} from 'react-aria-components';

import { twMerge } from '../utils';

export interface CheckboxProps
  extends Omit<AriaCheckboxProps, 'children' | 'className'>,
    RefAttributes<HTMLLabelElement> {
  label?: string;
  className?: string;
}

export const Checkbox: FC<CheckboxProps> = ({ label, className, ...props }) => (
  <AriaCheckBox
    {...props}
    className={twMerge(
      `group
      flex items-center gap-x-2 w-fit
      disabled:cursor-not-allowed disabled:opacity-disabled`,
      className,
    )}
  >
    <div
      className={`
        flex items-center justify-center h-5 w-5
        border-2 rounded border-th
        group-selected:border-primary
        group-selected:bg-primary
        group-focus:ring-2 ring-th
        group-selected:ring-primary
        ring-offset-2 ring-offset-th
        transition-all duration-150 motion-reduce:transition-none
      `}
    >
      <svg
        viewBox="0 0 18 18"
        aria-hidden="true"
        className={`
          w-icon h-icon fill-none
          stroke-3 stroke-th
          [stroke-dasharray:22px]
          [stroke-dashoffset:66] group-selected:[stroke-dashoffset:44]
          transition-all duration-150 motion-reduce:transition-none
        `}
      >
        <polyline points="1 9 7 14 15 4" />
      </svg>
    </div>
    {label}
  </AriaCheckBox>
);
