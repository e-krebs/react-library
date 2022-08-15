import { FC, HTMLAttributes, PropsWithChildren } from 'react';

export const ModalContent: FC<PropsWithChildren<HTMLAttributes<HTMLElement>>> = ({
  children,
  ...props
}) => <section {...props}>{children}</section>;
