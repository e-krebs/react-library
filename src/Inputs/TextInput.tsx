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
        `bg-th-light p-1
        disabled:cursor-not-allowed disabled:opacity-disabled
        border-th
        invalid:border-error
        focus:border-transparent focus:dark:border-transparent
        invalid:focus:border-transparent invalid:focus:dark:border-transparent
        focus:outline-none appearance-none focus:ring-2
        ring-offset-0
        ring-primary
        invalid:ring-error
        caret-primary
        invalid:caret-error`,
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
      <Text slot="errorMessage" className="leading-th text-error">
        {errorMessage}
      </Text>
    )}
  </TextField>
);
