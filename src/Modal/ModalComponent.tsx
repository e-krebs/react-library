import { useId } from '@react-aria/utils';
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

import { twMerge } from '../utils';
import { ModalCloseButton } from './ModalCloseButton';
import { ModalContext } from './useModal';
import { Icon } from '../assets/Icons';

interface ModalFCProps {
  title: string;
  titleProps?: HTMLAttributes<HTMLHeadingElement>;
  headerProps?: HTMLAttributes<HTMLHeadElement>;
  contentProps?: Omit<HTMLAttributes<HTMLFormElement>, 'role' | 'aria-labelledby'>;
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
    ref,
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
      if (modalRef.current?.open === false) {
        setClosing(false);
        modalRef.current?.showModal();
      }
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
      <ModalContext.Provider value={{ openModal, closeModal }}>
        <dialog
          {...dialogProps}
          ref={modalRef}
          className={twMerge(
            '!m-auto overflow-y-hidden bg-transparent backdrop:bg-gray-700/80 backdrop:backdrop-blur-sm',
            dialogClassName,
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <form
            {...contentProps}
            role="dialog"
            aria-labelledby={titleId}
            className={twMerge(
              `relative flex flex-col rounded-xl p-6
              bg-th
              text-base text-th
              fill-th dark:fill-th-dark`,
              closing ? 'animate-modal-shrink opacity-0' : 'animate-modal-grow',
              contentClassName,
            )}
          >
            <header
              {...headerProps}
              className={twMerge('flex w-full items-center justify-between space-x-8', headerClassName)}
            >
              <h1
                {...titleProps}
                id={titleId}
                className={twMerge(
                  'm-0 grow truncate text-xl font-bold capitalize leading-th text-gray-900 dark:text-gray-50',
                  titleClassName,
                )}
              >
                {title}
              </h1>
              <ModalCloseButton
                variant="unstyled"
                className="w-9 shrink-0 rounded-full p-1.5 ring-offset-0 ring-th"
              >
                <Icon id="x" />
              </ModalCloseButton>
            </header>
            {children}
          </form>
        </dialog>
      </ModalContext.Provider>
    );
  },
);
ModalComponent.displayName = 'Modal';
