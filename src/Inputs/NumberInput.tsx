import { RefAttributes } from 'react';
import { Group, Input, Label, NumberField, type NumberFieldProps, Text } from 'react-aria-components';

import { twMerge } from '../utils';
import { Button } from '../Button';
import { InputBorder, InputFlow } from '../types';
import { Icon } from '../assets/Icons';

interface NumberInputProps extends NumberFieldProps, Omit<RefAttributes<HTMLDivElement>, 'className'> {
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

export const NumberInput = ({
  label,
  flow,
  border = 'bottom',
  description,
  errorMessage,
  inputClassName,
  labelClassName,
  wrapperClassName,
  ...numberFieldProps
}: NumberInputProps) => (
  <NumberField
    {...numberFieldProps}
    isInvalid={numberFieldProps.isInvalid || !!errorMessage}
    className={twMerge(
      'flex group',
      flow === 'row' ? 'flex-row space-x-2' : 'flex-col w-fit',
      wrapperClassName,
    )}
  >
    <Label className={twMerge('leading-th group-invalid:selection:bg-error', labelClassName)}>
      {label}
    </Label>
    <Group
      className={twMerge(
        `flex group leading-th-input h-input
          bg-th-light invalid:selection:bg-error
          disabled:cursor-not-allowed disabled:opacity-disabled
          border-th-light
          invalid:border-error
          focus-within:outline-2
          -outline-offset-1 focus-within:outline
          outline-primary
          invalid:outline-error`,
        border === 'rounded' ? 'rounded-md' : 'rounded-none', // rounded-none is necessary for iPad
        border === 'bottom' &&
          `border-b focus-within:border-b-transparent focus-within:dark:border-b-transparent
          invalid:focus-within:border-b-transparent invalid:focus-within:dark:border-b-transparent`,
        border === 'rounded' && 'border',
      )}
    >
      <Button
        variant="unstyled"
        slot="decrement"
        className={twMerge(
          `px-3 py-1
            bg-th-light hover:bg-th-hover
            border-none h-initial transition-none
            group-invalid:text-error
            focus:ring-transparent focus:ring-offset-transparent`,
          border === 'rounded' ? 'rounded-l-md rounded-r-none' : 'rounded-none ',
        )}
      >
        <Icon id="minus" className="h-icon w-icon" />
      </Button>
      <Input
        className={twMerge(
          inputClassName,
          `px-3 py-1
            border-x rounded-none
            bg-th-light
            border-th-light
            focus:outline-none appearance-none
            group-focus-within:border-primary
            group-invalid:group-focus-within:border-error
            caret-primary
            group-invalid:caret-error`,
          border === 'rounded' ? 'border-th-light group-invalid:border-error' : 'border-th-bg',
        )}
      />
      <Button
        variant="unstyled"
        slot="increment"
        className={twMerge(
          `px-3 py-1
            bg-th-light hover:bg-th-hover
            border-none h-initial transition-none
            group-invalid:text-error
            focus:ring-transparent focus:ring-offset-transparent`,
          border === 'rounded' ? 'rounded-r-md rounded-l-none' : 'rounded-none ',
        )}
      >
        <Icon id="plus" className="h-icon w-icon" />
      </Button>
    </Group>
    {description && (
      <Text slot="description" className="leading-th group-invalid:selection:bg-error">
        {description}
      </Text>
    )}
    {errorMessage && (
      <Text slot="errorMessage" className="leading-th text-error group-invalid:selection:bg-error">
        {errorMessage}
      </Text>
    )}
  </NumberField>
);
