import { RefAttributes } from 'react';
import { Group, Input, Label, NumberField, type NumberFieldProps, Text } from 'react-aria-components';
import { Minus, Plus } from 'react-feather';
import { twMerge } from 'tailwind-merge';

import { Button } from '../Button';
import { InputBorder, InputFlow } from '../types';

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
}: NumberInputProps) => {
  const buttonClassName =
    'px-3 py-1 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 hover:dark:bg-gray-700 w-9 h-9';
  const iconClassName = 'h-3 w-3';

  return (
    <NumberField
      {...numberFieldProps}
      isInvalid={numberFieldProps.isInvalid || !!errorMessage}
      className={twMerge(
        'flex',
        flow === 'row' ? 'flex-row space-x-2' : 'flex-col w-fit',
        wrapperClassName,
      )}
    >
      <Label className={twMerge('leading-th', labelClassName)}>{label}</Label>
      <Group
        className={twMerge(
          `flex group leading-th-input h-input
          bg-th-light dark:bg-th-dark-light
          disabled:cursor-not-allowed disabled:opacity-disabled
          border-th/50 dark:border-th-dark/50
          invalid:border-error invalid:dark:border-error-dark
          focus-within:ring-2
          ring-offset-0
          ring-th-primary dark:ring-th-dark-primary
          invalid:ring-error invalid:dark:ring-error-dark`,
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
            `border-r h-initial transition-none
            group-focus-within:border-th-primary group-focus-within:dark:border-th-dark-primary
            group-invalid:group-focus-within:border-error group-invalid:group-focus-within:dark:border-error-dark
            relative after:absolute after:-bottom-px after:-right-px after:w-px after:h-px
            after:group-focus-within:bg-th-primary after:dark:group-focus-within:bg-th-dark-primary
            after:group-invalid:group-focus-within:bg-error after:dark:group-invalid:group-focus-within:bg-error-dark`,
            border === 'rounded'
              ? `rounded-l-md rounded-r-none
                border-th/50 dark:border-th-dark/50
                group-invalid:border-error group-invalid:dark:border-error-dark`
              : 'rounded-none border-th-bg dark:border-th-dark-bg',
            buttonClassName,
          )}
        >
          <Minus className={iconClassName} />
        </Button>
        <Input
          className={twMerge(
            inputClassName,
            `z-10 px-3 py-1
            bg-th-light dark:bg-th-dark-light
            border-th/50 dark:border-th-dark/50
            focus:outline-none appearance-none
            caret-th-primary dark:caret-th-dark-primary
            group-invalid:caret-error group-invalid:dark:caret-error-dark`,
          )}
        />
        <Button
          variant="unstyled"
          slot="increment"
          className={twMerge(
            `border-l h-initial transition-none
            group-focus-within:border-th-primary group-focus-within:dark:border-th-dark-primary
            group-invalid:group-focus-within:border-error group-invalid:group-focus-within:dark:border-error-dark
            relative after:absolute after:-bottom-px after:-left-px after:w-px after:h-px
            after:group-focus-within:bg-th-primary after:dark:group-focus-within:bg-th-dark-primary
            after:group-invalid:group-focus-within:bg-error after:dark:group-invalid:group-focus-within:bg-error-dark`,
            border === 'rounded'
              ? `rounded-r-md rounded-l-none
                border-th/50 dark:border-th-dark/50
                group-invalid:border-error group-invalid:dark:border-error-dark`
              : 'rounded-none border-th-bg dark:border-th-dark-bg',
            buttonClassName,
          )}
        >
          <Plus className={iconClassName} />
        </Button>
      </Group>
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
    </NumberField>
  );
};
