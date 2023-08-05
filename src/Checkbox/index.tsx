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
      data-disabled:cursor-not-allowed data-disabled:opacity-40`,
      className,
    )}
  >
    <div
      className={`
        flex items-center justify-center m-0.5 p-0 h-5 w-5
        border-2 rounded border-th-border dark:border-th-dark-border
        group-data-selected/checkbox:border-th-primary dark:group-data-selected/checkbox:border-th-dark-primary
        group-data-focused/checkbox:ring-2 ring-th-border dark:ring-th-dark-border
        ring-offset-2 ring-offset-th-bg dark:ring-offset-th-dark-bg
        transition motion-reduce:transition-none
      `}
    >
      <svg
        viewBox="0 0 18 18"
        aria-hidden="true"
        className={`
          fill-none
          group-data-selected/checkbox:bg-th-primary dark:group-data-selected/checkbox:bg-th-dark-primary
          stroke-3 stroke-transparent
          group-data-selected/checkbox:stroke-th-bg dark:group-data-selected/checkbox:stroke-th-border
          transition motion-reduce:transition-none
        `}
      >
        <polyline points="1 9 7 14 15 4" />
      </svg>
    </div>
    {label}
  </AriaCheckBox>
);
