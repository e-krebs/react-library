import cx from 'classnames';
import { FC, HTMLAttributes, PropsWithChildren } from 'react';

export const ModalFooter: FC<PropsWithChildren<HTMLAttributes<HTMLElement>>> = ({
  children,
  className,
  ...props
}) => (
  <footer {...props} className={cx('flex justify-end px-1', className)}>
    {children}
  </footer>
);
