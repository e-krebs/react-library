import { ModalComponent, ModalComponentProps } from './ModalComponent';
import { ModalContent } from './ModalContent';
import { ModalFooter } from './ModalFooter';

export { type ModalRef } from './ModalComponent';

export const Modal = ModalComponent as ModalComponentProps & {
  Footer: typeof ModalFooter;
  Content: typeof ModalContent;
};
Modal.Footer = ModalFooter;
Modal.Content = ModalContent;
