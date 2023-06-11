import cx from 'classnames';
import type { FC, RefAttributes } from 'react';
import {
  Checkbox as AriaCheckBox,
  type CheckboxProps as AriaCheckboxProps,
} from 'react-aria-components';
import { CheckSquare, Square } from 'react-feather';

export interface CheckboxProps
  extends Omit<AriaCheckboxProps, 'children'>,
    RefAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
}

export const Checkbox: FC<CheckboxProps> = ({ label, className, ...props }) => (
  <AriaCheckBox
    {...props}
    className={({ isDisabled }) =>
      cx('flex w-fit items-center gap-x-2', isDisabled && 'cursor-not-allowed opacity-40', className)
    }
  >
    {({ isSelected }) => (
      <>
        {isSelected ? <CheckSquare /> : <Square />}
        {label}
      </>
    )}
  </AriaCheckBox>
);
