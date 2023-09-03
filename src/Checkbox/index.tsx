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
      `group/checkbox
      flex items-center gap-x-2 w-fit
      data-disabled:cursor-not-allowed data-disabled:opacity-disabled`,
      className,
    )}
  >
    <div
      className={`
        flex items-center justify-center h-5 w-5
        border-2 rounded border-th dark:border-th-dark
        group-data-selected/checkbox:border-th-primary dark:group-data-selected/checkbox:border-th-dark-primary
        group-data-selected/checkbox:bg-th-primary dark:group-data-selected/checkbox:bg-th-dark-primary
        group-data-focused/checkbox:ring-2 ring-th dark:ring-th-dark
        group-data-selected/checkbox:ring-th-primary group-data-selected/checkbox:dark:ring-th-dark-primary
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
          [stroke-dashoffset:66] group-data-selected/checkbox:[stroke-dashoffset:44]
          transition-all duration-300 motion-reduce:transition-none
        `}
      >
        <polyline points="1 9 7 14 15 4" />
      </svg>
    </div>
    {label}
  </AriaCheckBox>
);
