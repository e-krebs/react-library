import { FC, HTMLAttributes, PropsWithChildren } from 'react';

import { twMerge } from '../utils';

export const ModalFooter: FC<PropsWithChildren<HTMLAttributes<HTMLElement>>> = ({
  children,
  className,
  ...props
}) => (
  <footer {...props} className={twMerge('flex justify-end px-1', className)}>
    {children}
  </footer>
);
