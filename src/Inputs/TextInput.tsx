import cx from 'classnames';
import { FC, useRef } from 'react';
import { AriaTextFieldOptions, useTextField } from '@react-aria/textfield';

export type InputBorder = 'none' | 'bottom' | 'rounded';
export type InputFlow = 'col' | 'row';

export interface TextInputProps extends AriaTextFieldOptions<'input'> {
  className?: string;
  labelClassName?: string;
  flow?: InputFlow;
  flowClassName?: string;
  border?: InputBorder;
}

export const TextInput: FC<TextInputProps> = (props) => {
  const { label, className, labelClassName, flow, flowClassName } = props;
  const border = props.border ?? 'bottom';
  const ref = useRef(null);
  const {
    labelProps,
    inputProps: { className: inputClassName, ...inputProps },
    descriptionProps: { className: descriptionClassName, ...descriptionProps },
    errorMessageProps: { className: errorClassName, ...errorMessageProps },
  } = useTextField(props, ref);

  return (
    <div className={cx('flex', flow === 'row' ? 'flex-row space-x-2' : 'flex-col', flowClassName)}>
      <label {...labelProps} className={cx('leading-9', labelClassName)}>
        {label}
      </label>
      <input
        {...inputProps}
        ref={ref}
        className={cx(
          inputClassName,
          className,
          'p-1 bg-gray-100 dark:bg-gray-800 border-gray-500 dark:border-gray-400 outline-none',
          border === 'bottom' && 'border-b',
          border === 'rounded' && 'border rounded-md'
        )}
      />
      {props.description && (
        <div {...descriptionProps} className={cx('leading-9', descriptionClassName)}>{props.description}</div>
      )}
      {props.errorMessage && (
        <div {...errorMessageProps} className={cx(errorClassName, 'leading-9 text-red-600 dark:text-red-400')}>
          {props.errorMessage}
        </div>
      )}
    </div>
  );
};
