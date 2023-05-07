import { createContext, useContext } from 'react';

import { ModalRef } from './ModalComponent';

export const ModalContext = createContext<ModalRef | null>(null);

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) throw Error('useModalContext used outside of ModalContext');

  return context;
};
