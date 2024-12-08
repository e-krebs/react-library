import { FC, HTMLAttributes, PropsWithChildren } from 'react';

export const ModalFooter: FC<PropsWithChildren<HTMLAttributes<HTMLElement>>> = ({
  children,
  ...props
}) => (
  <footer className="flex justify-end px-1" {...props}>
    {children}
  </footer>
);
