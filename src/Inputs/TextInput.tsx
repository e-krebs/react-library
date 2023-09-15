import { FC, type RefAttributes } from 'react';
import { Input, Label, Text, TextField, type TextFieldProps } from 'react-aria-components';
import { twMerge } from 'tailwind-merge';

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
        `bg-th-hover p-1 dark:bg-th-dark-hover
        outline-0 focus:ring-2
        ring-offset-2 ring-offset-th dark:ring-offset-th-dark
        transition-all duration-300 motion-reduce:transition-none`,
        border !== 'bottom' ? 'rounded-md' : 'rounded-none', // rounded-none is necessary for iPad
        border === 'bottom' && 'border-b',
        border === 'rounded' && 'border',
        errorMessage
          ? 'border-error dark:border-error-dark ring-error dark:ring-error-dark'
          : 'border-th/50 dark:border-th-dark/50 ring-th-primary/50 dark:ring-th-dark-primary',
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
