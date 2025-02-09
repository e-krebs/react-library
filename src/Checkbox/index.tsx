import type { FC, RefAttributes } from 'react';
import {
  Checkbox as AriaCheckBox,
  type CheckboxProps as AriaCheckboxProps,
} from 'react-aria-components';

export interface CheckboxProps
  extends Omit<AriaCheckboxProps, 'children'>,
    RefAttributes<HTMLLabelElement> {
  label?: string;
}

export const Checkbox: FC<CheckboxProps> = ({ label, ...props }) => (
  <AriaCheckBox
    className="
      flex items-center gap-x-2 w-fit
      disabled:cursor-not-allowed disabled:opacity-disabled"
    {...props}
  >
    <div
      className="
        flex items-center justify-center h-5 w-5
        border-2 rounded border-th
        in-selected:border-primary
        in-selected:bg-primary
        in-focus:ring-2 ring-th
        in-selected:ring-primary
        ring-offset-2 ring-offset-th
        transition-all duration-150 motion-reduce:transition-none"
    >
      <svg
        viewBox="0 0 18 18"
        aria-hidden="true"
        className="
          w-icon h-icon fill-none
          stroke-3 stroke-th
          [stroke-dasharray:22px]
          [stroke-dashoffset:66] in-selected:[stroke-dashoffset:44]
          transition-all duration-150 motion-reduce:transition-none"
      >
        <polyline points="1 9 7 14 15 4" />
      </svg>
    </div>
    {label}
  </AriaCheckBox>
);
