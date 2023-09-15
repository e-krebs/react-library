import type { FC, RefAttributes } from 'react';
import {
  Checkbox as AriaCheckBox,
  type CheckboxProps as AriaCheckboxProps,
} from 'react-aria-components';
import { twMerge } from 'tailwind-merge';

export interface CheckboxProps
  extends Omit<AriaCheckboxProps, 'children' | 'className'>,
    RefAttributes<HTMLInputElement> {
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
        border-2 rounded border-th dark:border-th-dark
        group-selected:border-th-primary dark:group-selected:border-th-dark-primary
        group-selected:bg-th-primary dark:group-selected:bg-th-dark-primary
        group-focus:ring-2 ring-th dark:ring-th-dark
        group-selected:ring-th-primary group-selected:dark:ring-th-dark-primary
        ring-offset-2 ring-offset-th dark:ring-offset-th-dark
        transition-all duration-300 motion-reduce:transition-none
      `}
    >
      <svg
        viewBox="0 0 18 18"
        aria-hidden="true"
        className={`
          w-icon h-icon fill-none
          stroke-3 stroke-th dark:stroke-th-dark
          [stroke-dasharray:22px]
          [stroke-dashoffset:66] group-selected:[stroke-dashoffset:44]
          transition-all duration-300 motion-reduce:transition-none
        `}
      >
        <polyline points="1 9 7 14 15 4" />
      </svg>
    </div>
    {label}
  </AriaCheckBox>
);
