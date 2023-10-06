import { twMerge } from 'tailwind-merge';
import { FC, HTMLAttributes, PropsWithChildren } from 'react';

export const ModalFooter: FC<PropsWithChildren<HTMLAttributes<HTMLElement>>> = ({
  children,
  className,
  ...props
}) => (
  <footer {...props} className={twMerge('flex justify-end px-1', className)}>
    {children}
  </footer>
);
