import { useId } from '@react-aria/utils';
import {
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

import { ModalCloseButton } from './ModalCloseButton';
import { ModalContext } from './useModal';
import { Icon } from '../assets/Icon';

type MaxWidth =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | 'full'
  | 'min'
  | 'max'
  | 'fit'
  | 'prose'
  | 'screen-sm'
  | 'screen-md'
  | 'screen-lg'
  | 'screen-xl'
  | 'screen-2xl';

interface ModalFCProps {
  title: string;
  maxWidth?: MaxWidth;
  onClosed?: () => void;
}

export interface ModalRef {
  openModal: () => void;
  closeModal: () => void;
}

export type ModalComponentProps = FC<PropsWithChildren<ModalFCProps> & RefAttributes<ModalRef>>;

export const ModalComponent: ModalComponentProps = forwardRef<ModalRef, PropsWithChildren<ModalFCProps>>(
  ({ title, maxWidth, children, onClosed }, ref) => {
    const titleId = useId();
    const modalRef = useRef<HTMLDialogElement>(null);
    const [closing, setClosing] = useState(false);

    const closeModal = useCallback(() => {
      setClosing(true);
      // wait 150ms before actually closing (duration of the modal-grow animation)
      setTimeout(() => {
        onClosed?.();
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
          className="!m-auto overflow-y-hidden bg-transparent backdrop:bg-gray-700/80 backdrop:backdrop-blur-sm"
          ref={modalRef}
          onClick={(e) => e.stopPropagation()}
        >
          <form
            className="relative flex flex-col rounded-xl p-6
              bg-th
              text-base text-th
              fill-th
              data-[closing=true]:animate-modal-shrink
              data-[closing=false]:animate-modal-grow
              data-[closing=true]:opacity-0
              data-[max-width=xs]:max-w-xs
              data-[max-width=sm]:max-w-sm
              data-[max-width=md]:max-w-md
              data-[max-width=lg]:max-w-lg
              data-[max-width=xl]:max-w-xl
              data-[max-width=2xl]:max-w-2xl
              data-[max-width=3xl]:max-w-3xl
              data-[max-width=4xl]:max-w-4xl
              data-[max-width=5xl]:max-w-5xl
              data-[max-width=6xl]:max-w-6xl
              data-[max-width=7xl]:max-w-7xl
              data-[max-width=full]:max-w-full
              data-[max-width=min]:max-w-min
              data-[max-width=max]:max-w-max
              data-[max-width=fit]:max-w-fit
              data-[max-width=prose]:max-w-prose
              data-[max-width=screen-sm]:max-w-screen-sm
              data-[max-width=screen-md]:max-w-screen-md
              data-[max-width=screen-lg]:max-w-screen-lg
              data-[max-width=screen-xl]:max-w-screen-xl
              data-[max-width=screen-2xl]:max-w-screen-2xl"
            data-max-width={maxWidth}
            role="dialog"
            aria-labelledby={titleId}
            data-closing={closing}
          >
            <header className="flex w-full items-center justify-between space-x-8">
              <h1
                className="m-0 grow truncate text-xl font-bold capitalize leading-th text-h1"
                id={titleId}
              >
                {title}
              </h1>
              <ModalCloseButton
                className="inline-flex shrink-0 items-center h-input w-9
                  p-1.5 space-x-2 rounded-full
                  focus:outline-none focus:ring-2
                  ring-offset-0 ring-offset-th
                  ring-th
                  disabled:cursor-not-allowed disabled:opacity-disabled
                  duration-150 motion-reduce:transition-none
                  transition-[box-shadow]
                  hover:enabled:bg-th-hover"
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
