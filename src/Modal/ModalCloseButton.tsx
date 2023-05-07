import { FC } from 'react';

import { Button, ButtonProps } from '../Button';
import { useModalContext } from './useModal';

type ModalCloseButton = Omit<ButtonProps, 'type' | 'formMethod' | 'onPress'>;

export const ModalCloseButton: FC<ModalCloseButton> = ({ children, ...props }) => {
  const { closeModal } = useModalContext();

  return (
    <Button type="submit" formMethod="dialog" onPress={closeModal} {...props}>
      {children}
    </Button>
  );
};
