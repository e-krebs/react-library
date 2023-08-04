import cx from 'classnames';
import { FC, type RefAttributes } from 'react';
import { Input, Label, Text, TextField, type TextFieldProps } from 'react-aria-components';

import { InputBorder, InputFlow } from '../types';

export interface TextInputProps extends TextFieldProps, RefAttributes<HTMLDivElement> {
  label?: string;
  placeholder?: string;
  description?: string;
  errorMessage?: string;
  className?: string;
  labelClassName?: string;
  flow?: InputFlow;
  flowClassName?: string;
  border?: InputBorder;
}

export const TextInput: FC<TextInputProps> = ({
  label,
  className,
  labelClassName,
  flow,
  flowClassName,
  description,
  errorMessage,
  ...props
}) => {
  const { border = 'bottom', ...textFieldProps } = props;

  return (
    <TextField
      {...textFieldProps}
      className={cx('flex', flow === 'row' ? 'flex-row space-x-2' : 'w-fit flex-col', flowClassName)}
    >
      <Label className={cx('leading-9', labelClassName)}>{label}</Label>
      <Input
        className={cx(
          className,
          'border-gray-500 bg-gray-100 p-1 dark:border-gray-400 dark:bg-gray-800',
          border === 'rounded' ? 'rounded-md' : 'rounded-none', // rounded-none is necessary for iPad
          border === 'bottom' && 'border-b',
          border === 'rounded' && 'border',
        )}
      />
      {description && (
        <Text slot="description" className="leading-9">
          {description}
        </Text>
      )}
      {errorMessage && (
        <Text slot="errorMessage" className="leading-9 text-red-600 dark:text-red-400">
          {errorMessage}
        </Text>
      )}
    </TextField>
  );
};
