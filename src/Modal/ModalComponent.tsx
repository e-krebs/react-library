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
  FC,
  RefAttributes,
} from 'react';
import { X } from 'react-feather';

interface ModalFCProps {
  title: string;
  titleProps?: HTMLAttributes<HTMLHeadingElement>;
  headerProps?: HTMLAttributes<HTMLHeadElement>;
  contentProps?: Omit<HTMLAttributes<HTMLDivElement>, 'role' | 'aria-labelledby'>;
  dialogProps?: HTMLAttributes<HTMLDialogElement>;
  onClosed?: () => void;
}

export interface ModalRef {
  openModal: () => void;
  closeModal: () => void;
}

export type ModalComponentProps = FC<PropsWithChildren<ModalFCProps> & RefAttributes<ModalRef>>;

export const ModalComponent: ModalComponentProps = forwardRef<ModalRef, PropsWithChildren<ModalFCProps>>(
  (
    {
      title,
      children,
      onClosed,
      contentProps: { className: contentClassName, ...contentProps } = {},
      titleProps: { id, className: titleClassName, ...titleProps } = {},
      headerProps: { className: headerClassName, ...headerProps } = {},
      dialogProps: { className: dialogClassName, ...dialogProps } = {},
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
        {...dialogProps}
        ref={modalRef}
        className={cx(
          '!m-auto overflow-y-hidden bg-transparent backdrop:bg-gray-700/80 backdrop:backdrop-blur-sm',
          dialogClassName
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          {...contentProps}
          role="dialog"
          aria-labelledby={titleId}
          className={cx(
            'relative flex flex-col rounded-xl p-6',
            'bg-white text-base text-gray-500',
            'dark:bg-gray-900 dark:fill-gray-400 dark:text-gray-400',
            closing ? 'animate-modal-shrink opacity-0' : 'animate-modal-grow',
            contentClassName
          )}
        >
          <header {...headerProps} className={cx('flex items-center space-x-1', headerClassName)}>
            <h1
              {...titleProps}
              id={titleId}
              className={cx('m-0 grow truncate text-xl font-bold capitalize', titleClassName)}
            >
              {title}
            </h1>
            <X
              className="h-8 w-8 shrink-0 cursor-pointer rounded-full p-1 hover:bg-gray-200 dark:hover:bg-gray-700"
              onClick={closeModal}
            />
          </header>
          {children}
        </div>
      </dialog>
    );
  }
);
ModalComponent.displayName = 'Modal';
