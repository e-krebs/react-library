import { useButton } from '@react-aria/button';
import { type AriaButtonProps } from '@react-types/button';
import cx from 'classnames';
import { FC, PropsWithChildren, useRef } from 'react';
import { Icon } from 'react-feather';

export interface ButtonProps extends PropsWithChildren<AriaButtonProps<'button'>> {
  className?: string;
  iconStart?: Icon;
  iconEnd?: Icon;
  formMethod?: string | undefined;
  variant?: 'regular' | 'unstyled';
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  iconStart: IconStart,
  iconEnd: IconEnd,
  variant = 'regular',
  ...props
}) => {
  const ref = useRef(null);
  const { buttonProps } = useButton(props, ref);

  return (
    <button
      {...buttonProps}
      ref={ref}
      className={cx(
        variant !== 'unstyled' &&
          `inline-flex h-9 w-fit items-center space-x-2
          rounded-md border border-gray-500 bg-gray-100
          px-2 outline-none
          dark:border-gray-400 dark:bg-gray-800 `,
        buttonProps.disabled && 'cursor-not-allowed opacity-40',
        !buttonProps.disabled && variant !== 'unstyled' && 'hover:bg-gray-200 hover:dark:bg-gray-700',
        className
      )}
    >
      {IconStart !== undefined && <IconStart className="h-4 w-4" />}
      {children != null && <span>{children}</span>}
      {IconEnd !== undefined && <IconEnd className="h-4 w-4" />}
    </button>
  );
};
