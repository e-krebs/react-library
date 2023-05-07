import { FC } from 'react';

import { Button, ButtonProps } from '../Button';

type ModalCloseButton = Omit<ButtonProps, 'type' | 'formMethod'>;

export const ModalCloseButton: FC<ModalCloseButton> = ({ children, ...props }) => (
  <Button type="submit" formMethod="dialog" {...props}>
    {children}
  </Button>
);
