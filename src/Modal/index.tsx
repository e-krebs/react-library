import { useId } from '@react-aria/utils';
import cx from 'classnames';
import {
  HTMLAttributes,
  PropsWithChildren,
  useCallback,
  forwardRef,
  useRef,
  useState,
  useImperativeHandle,
  useEffect,
} from 'react';
import { X } from 'react-feather';

interface ModalProps {
  title: string;
  titleProps?: HTMLAttributes<HTMLHeadingElement>;
  contentProps?: Omit<HTMLAttributes<HTMLDivElement>, 'role' | 'aria-labelledby'>;
  onClosed?: () => void;
}

export interface ModalRef {
  openModal: () => void;
  closeModal: () => void;
}

export const Modal = forwardRef<ModalRef, PropsWithChildren<ModalProps>>(
  (
    {
      title,
      children,
      onClosed,
      contentProps: { className: contentClassName, ...contentProps } = {},
      titleProps: { id, className: titleClassName, ...titleProps } = {},
    },
    ref
  ) => {
    const titleId = useId(id);
    const modalRef = useRef<HTMLDialogElement>(null);
    const [closing, setClosing] = useState(false);

    const closeModal = useCallback(() => {
      setClosing(true);
      // wait 150ms before actually closing (duration of the modal-grow animation)
      setTimeout(() => {
        if (onClosed) onClosed();
        modalRef.current?.close();
      }, 150);
    }, [modalRef, onClosed]);

    const openModal = useCallback(() => {
      setClosing(false);
      modalRef.current?.showModal();
    }, []);

    useImperativeHandle(ref, () => ({ openModal, closeModal }));

    useEffect(() => {
      const currentModalRef = modalRef.current;
      if (!currentModalRef) return;

      const onModalBackdropClick = (event: HTMLElementEventMap['click']) => {
        const rect = currentModalRef.getBoundingClientRect();
        const isInDialog =
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width;
        const targetIsDialog = (event.target as Element).tagName.toLowerCase() === 'dialog';
        // if dialog is clicked but not inside the dialog ⇒ backdrop is clicked
        if (targetIsDialog && !isInDialog) {
          closeModal();
        }
      };

      const onModalKeyDown = (event: KeyboardEvent) => {
        if (event.key !== 'Escape' || !currentModalRef.open) return;
        // the default behavior is to close the dialog but without animation
        event.preventDefault();
        closeModal();
      };

      currentModalRef.addEventListener('click', onModalBackdropClick);
      document.addEventListener('keydown', onModalKeyDown);

      return () => {
        currentModalRef.removeEventListener('click', onModalBackdropClick);
        document.removeEventListener('keydown', onModalKeyDown);
      };
    }, [closeModal, modalRef]);

    return (
      <dialog
        ref={modalRef}
        className="!m-auto overflow-y-hidden bg-transparent backdrop:bg-gray-700/80 backdrop:backdrop-blur-sm"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          {...contentProps}
          role="dialog"
          aria-labelledby={titleId}
          className={cx(
            'relative flex flex-col rounded-2xl p-8',
            'bg-white text-base text-gray-500',
            'dark:bg-gray-900 dark:fill-gray-400 dark:text-gray-400',
            closing ? 'animate-modal-shrink opacity-0' : 'animate-modal-grow',
            contentClassName
          )}
        >
          <X
            className="absolute top-0 right-0 h-8 w-8 cursor-pointer rounded-full p-1 hover:bg-gray-200 dark:hover:bg-gray-700"
            onClick={closeModal}
          />
          <h3
            {...titleProps}
            id={titleId}
            className={cx('m-0 mb-6 text-xl font-bold capitalize', titleClassName)}
          >
            {title}
          </h3>
          {children}
        </div>
      </dialog>
    );
  }
);

Modal.displayName = 'Modal';
