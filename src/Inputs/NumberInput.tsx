import { type FC, type PropsWithChildren, RefAttributes } from 'react';
import {
  Button,
  ButtonProps,
  Group,
  Input,
  Label,
  NumberField,
  type NumberFieldProps,
  Text,
} from 'react-aria-components';

import type { InputBorder, InputFlow, InputWidth } from '../types';
import { Icon } from '../assets/Icon';

interface NumberInputProps extends NumberFieldProps, RefAttributes<HTMLDivElement> {
  label?: string;
  placeholder?: string;
  description?: string;
  errorMessage?: string;
  flow?: InputFlow;
  border?: InputBorder;
  width?: InputWidth;
}

interface NumberInputButtonProps
  extends Omit<PropsWithChildren<ButtonProps & RefAttributes<HTMLButtonElement>>, 'className'> {
  side: 'left' | 'right';
}

const NumberInputButton: FC<NumberInputButtonProps> = ({ side, children, ...props }) => (
  <Button
    data-side={side}
    className="inline-flex items-center w-fit
      px-3 py-1 space-x-2
      rounded-none
      in-data-[border=rounded]:data-[side=left]:rounded-l-md
      in-data-[border=rounded]:data-[side=right]:rounded-r-md
      invalid:text-error
      focus:outline-hidden
      disabled:cursor-not-allowed disabled:opacity-disabled
      border-none
      bg-th-light hover:bg-th-hover hover:enabled:bg-th-hover"
    {...props}
  >
    {children && <span className="inline-flex items-center">{children}</span>}
  </Button>
);

export const NumberInput = ({
  label,
  flow = 'col',
  border = 'bottom',
  width,
  description,
  errorMessage,
  ...numberFieldProps
}: NumberInputProps) => (
  <NumberField
    data-flow={flow}
    data-border={border}
    data-width={width}
    className="flex max-w-full flex-col data-[flow=row]:flex-row
      data-[flow=row]:space-x-2 data-[flow=col]:w-fit"
    {...numberFieldProps}
    isInvalid={numberFieldProps.isInvalid || !!errorMessage}
  >
    <Label className="leading-th invalid:selection:bg-error">{label}</Label>
    <Group
      // rounded-none is necessary for iPad
      className="flex leading-th-input h-input
          bg-th-light invalid:selection:bg-error
          disabled:cursor-not-allowed disabled:opacity-disabled
          border-th-light
          invalid:border-error
          in-data-[border=rounded]:border
          in-data-[border=bottom]:border-b
          in-data-[border=bottom]:focus-within:border-b-transparent
          dark:in-data-[border=bottom]:focus-within:border-b-transparent
          in-data-[border=bottom]:invalid:focus-within:border-b-transparent
          dark:in-data-[border=bottom]:invalid:focus-within:border-b-transparent
          rounded-none
          in-data-[border=rounded]:rounded-md
          focus-within:outline-2
          -outline-offset-1
          outline-primary
          invalid:outline-error"
    >
      <NumberInputButton slot="decrement" side="left">
        <Icon id="minus" className="h-icon w-icon" />
      </NumberInputButton>
      <Input
        className="px-3 py-1
            in-data-[width=xs]:w-12
            in-data-[width=s]:w-20
            in-data-[width=m]:w-28
            in-data-[width=l]:w-44
            in-data-[width=xl]:w-60
            border-x rounded-none
            bg-th-light
            border-th-bg
            in-data-[border=rounded]:border-th-light
            invalid:in-data-[border=rounded]:border-error
            focus:outline-hidden appearance-none
            focus:border-primary
            invalid:focus:border-error
            caret-primary
            invalid:caret-error"
      />
      <NumberInputButton slot="increment" side="right">
        <Icon id="plus" className="h-icon w-icon" />
      </NumberInputButton>
    </Group>
    {description && (
      <Text slot="description" className="leading-th invalid:selection:bg-error">
        {description}
      </Text>
    )}
    {errorMessage && (
      <Text slot="errorMessage" className="leading-th text-error invalid:selection:bg-error">
        {errorMessage}
      </Text>
    )}
  </NumberField>
);
