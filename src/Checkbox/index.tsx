import cx from 'classnames';
import { AriaCheckboxProps } from '@react-types/checkbox';
import { FC, useMemo, useRef } from 'react';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useFocusRing } from '@react-aria/focus';
import { useCheckbox } from '@react-aria/checkbox';
import { useToggleState } from '@react-stately/toggle';
import { CheckSquare, Icon, Square } from 'react-feather';

export interface CheckboxProps extends Omit<AriaCheckboxProps, 'children'> {
  label?: string;
}

export const Checkbox: FC<CheckboxProps> = ({ label, ...props }) => {
  const state = useToggleState(props);
  const ref = useRef(null);
  const { inputProps } = useCheckbox({ ...props, 'aria-label': label }, state, ref);
  const { focusProps } = useFocusRing();

  const CheckIcon: Icon = useMemo(() => (state.isSelected ? CheckSquare : Square), [state]);

  return (
    <label
      className={cx('flex items-center gap-x-2', props.isDisabled && 'cursor-not-allowed opacity-40')}
    >
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} aria-label={label} ref={ref} />
      </VisuallyHidden>
      <CheckIcon />
      {label && <span>{label}</span>}
    </label>
  );
};
