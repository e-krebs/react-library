import { FC, type RefAttributes } from 'react';
import { Input, Label, Text, TextField, type TextFieldProps } from 'react-aria-components';

import type { InputBorder, InputFlow } from '../types';

export interface TextInputProps extends TextFieldProps, RefAttributes<HTMLDivElement> {
  label?: string;
  placeholder?: string;
  description?: string;
  errorMessage?: string;
  flow?: InputFlow;
  border?: InputBorder;
}

export const TextInput: FC<TextInputProps> = ({
  label,
  flow = 'col',
  border = 'bottom',
  description,
  errorMessage,
  ...textFieldProps
}) => (
  <TextField
    className="group flex
      data-[flow=row]:flex-row data-[flow=row]:space-x-2
      data-[flow=col]:flex-col data-[flow=col]:w-fit"
    {...textFieldProps}
    data-flow={flow}
    data-border={border}
    isInvalid={textFieldProps.isInvalid || !!errorMessage}
  >
    <Label className="leading-th group-invalid:selection:bg-error">{label}</Label>
    <Input
      // rounded-none is necessary for iPad
      className="
        bg-th-light p-1
        disabled:cursor-not-allowed disabled:opacity-disabled
        group-data-[border=rounded]:border
        group-data-[border=bottom]:border-b
        group-data-[border=bottom]:focus:border-b-transparent
        group-data-[border=bottom]:focus:dark:border-b-transparent
        group-data-[border=bottom]:invalid:focus:border-b-transparent
        group-data-[border=bottom]:invalid:focus:dark:border-b-transparent
        border-th
        invalid:border-error
        focus:border-transparent focus:dark:border-transparent
        invalid:focus:border-transparent invalid:focus:dark:border-transparent
        rounded-md
        group-data-[border=bottom]:rounded-none
        focus:outline-none appearance-none focus:ring-2
        ring-offset-0
        ring-primary
        invalid:ring-error
        caret-primary
        invalid:caret-error
        invalid:selection:bg-error"
    />
    {description && (
      <Text slot="description" className="leading-th group-invalid:bg-error">
        {description}
      </Text>
    )}
    {errorMessage && (
      <Text slot="errorMessage" className="leading-th text-error selection:bg-error">
        {errorMessage}
      </Text>
    )}
  </TextField>
);
