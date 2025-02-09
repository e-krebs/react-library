import { FC, type RefAttributes } from 'react';
import { Input, Label, Text, TextField, type TextFieldProps } from 'react-aria-components';

import type { InputBorder, InputFlow, InputWidth } from '../types';

export interface TextInputProps extends TextFieldProps, RefAttributes<HTMLDivElement> {
  label?: string;
  placeholder?: string;
  description?: string;
  errorMessage?: string;
  flow?: InputFlow;
  border?: InputBorder;
  width?: InputWidth;
}

export const TextInput: FC<TextInputProps> = ({
  label,
  flow = 'col',
  border = 'bottom',
  width,
  description,
  errorMessage,
  ...textFieldProps
}) => (
  <TextField
    className="flex max-w-full
      data-[flow=row]:flex-row data-[flow=row]:space-x-2
      data-[flow=col]:flex-col data-[flow=col]:w-fit"
    {...textFieldProps}
    data-flow={flow}
    data-border={border}
    data-width={width}
    isInvalid={textFieldProps.isInvalid || !!errorMessage}
  >
    <Label className="leading-th invalid:selection:bg-error">{label}</Label>
    <Input
      // rounded-none is necessary for iPad
      className="
        bg-th-light p-1
        in-data-[width=xs]:w-12
        in-data-[width=s]:w-20
        in-data-[width=m]:w-28
        in-data-[width=l]:w-44
        in-data-[width=xl]:w-60
        disabled:cursor-not-allowed disabled:opacity-disabled
        in-data-[border=rounded]:border
        in-data-[border=bottom]:border-b
        in-data-[border=bottom]:focus:border-b-transparent
        in-data-[border=bottom]:dark:focus:border-b-transparent
        in-data-[border=bottom]:invalid:focus:border-b-transparent
        in-data-[border=bottom]:dark:invalid:focus:border-b-transparent
        border-th
        invalid:border-error
        focus:border-transparent dark:focus:border-transparent
        invalid:focus:border-transparent dark:invalid:focus:border-transparent
        rounded-md
        in-data-[border=bottom]:rounded-none
        focus:outline-hidden appearance-none focus:ring-2
        ring-offset-0
        ring-primary
        invalid:ring-error
        caret-primary
        invalid:caret-error
        invalid:selection:bg-error"
    />
    {description && (
      <Text slot="description" className="leading-th in-invalid:bg-error">
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
