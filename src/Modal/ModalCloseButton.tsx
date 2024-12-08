import { FC, type RefAttributes, type PropsWithChildren } from 'react';
import { Button, type ButtonProps } from 'react-aria-components';

import { useModalContext } from './useModal';

type ModalCloseButton = Omit<
  PropsWithChildren<ButtonProps & RefAttributes<HTMLButtonElement>>,
  'type' | 'formMethod' | 'onPress'
>;

export const ModalCloseButton: FC<ModalCloseButton> = ({ children, ...props }) => {
  const { closeModal } = useModalContext();

  return (
    <Button
      className="inline-flex items-center h-input w-fit
        px-2 space-x-2 rounded-md
        border border-primary ring-primary
        focus:outline-none focus:ring-2
        ring-offset-2 ring-offset-th
        disabled:cursor-not-allowed disabled:opacity-disabled
        transition-all duration-150 motion-reduce:transition-none
        text-primary
        bg-th hover:enabled:bg-primary/5"
      {...props}
      type="submit"
      formMethod="dialog"
      onPress={closeModal}
    >
      {children && <span className="inline-flex items-center">{children}</span>}
    </Button>
  );
};
