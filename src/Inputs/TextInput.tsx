import { FC, type RefAttributes } from 'react';
import { Input, Label, Text, TextField, type TextFieldProps } from 'react-aria-components';

import { twMerge } from '../utils';
import type { InputBorder, InputFlow } from '../types';

export interface TextInputProps
  extends TextFieldProps,
    Omit<RefAttributes<HTMLDivElement>, 'className'> {
  label?: string;
  placeholder?: string;
  description?: string;
  errorMessage?: string;
  inputClassName?: string;
  labelClassName?: string;
  flow?: InputFlow;
  wrapperClassName?: string;
  border?: InputBorder;
}

export const TextInput: FC<TextInputProps> = ({
  label,
  flow,
  border = 'bottom',
  description,
  errorMessage,
  inputClassName,
  labelClassName,
  wrapperClassName,
  ...textFieldProps
}) => (
  <TextField
    {...textFieldProps}
    isInvalid={textFieldProps.isInvalid || !!errorMessage}
    className={twMerge(
      'flex',
      flow === 'row' ? 'flex-row space-x-2' : 'flex-col w-fit',
      wrapperClassName,
    )}
  >
    <Label className={twMerge('leading-th', labelClassName)}>{label}</Label>
    <Input
      className={twMerge(
        inputClassName,
        `bg-th-light p-1 dark:bg-th-dark-light
        disabled:cursor-not-allowed disabled:opacity-disabled
        border-th/50 dark:border-th-dark/50
        invalid:border-error invalid:dark:border-error-dark
        focus:border-transparent focus:dark:border-transparent
        invalid:focus:border-transparent invalid:focus:dark:border-transparent
        focus:outline-none appearance-none focus:ring-2
        ring-offset-0
        ring-th-primary dark:ring-th-dark-primary
        invalid:ring-error invalid:dark:ring-error-dark
        caret-th-primary dark:caret-th-dark-primary
        invalid:caret-error invalid:dark:caret-error-dark`,
        border !== 'bottom' ? 'rounded-md' : 'rounded-none', // rounded-none is necessary for iPad
        border === 'bottom' &&
          `border-b focus:border-b-transparent focus:dark:border-b-transparent
          invalid:focus:border-b-transparent invalid:focus:dark:border-b-transparent`,
        border === 'rounded' && 'border',
      )}
    />
    {description && (
      <Text slot="description" className="leading-th">
        {description}
      </Text>
    )}
    {errorMessage && (
      <Text slot="errorMessage" className="leading-th text-error dark:text-error-dark">
        {errorMessage}
      </Text>
    )}
  </TextField>
);
