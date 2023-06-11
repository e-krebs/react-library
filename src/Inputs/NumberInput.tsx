import cx from 'classnames';
import { RefAttributes } from 'react';
import { Group, Input, Label, NumberField, type NumberFieldProps, Text } from 'react-aria-components';
import { Minus, Plus } from 'react-feather';

import { Button } from '../Button';
import { InputBorder, InputFlow } from '../types';

interface NumberInputProps extends NumberFieldProps, RefAttributes<HTMLDivElement> {
  label?: string;
  description?: string;
  errorMessage?: string;
  className?: string;
  labelClassName?: string;
  flow?: InputFlow;
  flowClassName?: string;
  border?: InputBorder;
}

export const NumberInput = ({
  label,
  className,
  labelClassName,
  flow,
  flowClassName,
  description,
  errorMessage,
  ...props
}: NumberInputProps) => {
  const { border = 'bottom', ...numberFieldProps } = props;

  const buttonClassName =
    'px-3 py-1 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 hover:dark:bg-gray-700 w-9 h-9';
  const iconClassName = 'h-3 w-3';

  return (
    <NumberField
      {...numberFieldProps}
      className={cx('flex', flow === 'row' ? 'flex-row space-x-2' : 'w-fit flex-col', flowClassName)}
    >
      <Label className={cx('leading-9', labelClassName)}>{label}</Label>
      <Group
        className={cx(
          'flex border-gray-500 leading-7',
          border === 'rounded' ? 'rounded-md' : 'rounded-none', // rounded-none is necessary for iPad
          border === 'bottom' && 'border-b',
          border === 'rounded' && 'border'
        )}
      >
        <Button
          variant="unstyled"
          slot="decrement"
          className={cx(
            'border-r',
            border === 'rounded'
              ? 'rounded-l-md border-gray-500 dark:border-gray-400'
              : 'rounded-l-none border-white dark:border-gray-900',
            buttonClassName
          )}
        >
          <Minus className={iconClassName} />
        </Button>
        <Input
          className={cx(className, 'z-10 bg-gray-100  px-3 py-1 dark:border-gray-400 dark:bg-gray-800')}
        />
        <Button
          variant="unstyled"
          slot="increment"
          className={cx(
            'border-l',
            border === 'rounded'
              ? 'rounded-r-md border-gray-500 dark:border-gray-400'
              : 'rounded-r-none border-white dark:border-gray-900',
            buttonClassName
          )}
        >
          <Plus className={iconClassName} />
        </Button>
      </Group>
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
    </NumberField>
  );
};
