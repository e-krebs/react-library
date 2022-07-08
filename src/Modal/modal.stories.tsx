import { useRef, useState } from 'react';
import { X } from 'react-feather';

import { Modal, type ModalRef } from './index';

export default {
  title: 'Components',
};

export const ModalStory = () => {
  const [nb, setNb] = useState(0);
  const modalRef = useRef<ModalRef>(null);
  const openModal = () => {
    modalRef.current?.openModal();
  };
  const closeModal = () => {
    modalRef.current?.closeModal();
  };

  return (
    <section className="space-y-6">
      <h2>Modal</h2>
      <button className="h-9 rounded-md border px-2" onClick={openModal}>
        Open modal
      </button>
      <p>
        The modal has been close {nb} times.
        <button className="ml-2 h-9 rounded-md border px-2" onClick={() => setNb(0)}>
          reset counter
        </button>
      </p>

      <Modal ref={modalRef} title="Example modal" onClosed={() => setNb((nb) => nb + 1)}>
        <p>With some text inside for content.</p>
        You can close the modal by:
        <ol className="leading-8">
          <li>
            Hitting <b>{'<Esc>'}</b> on your Keyboard,
          </li>
          <li>Clicking outside of the modal,</li>
          <li>
            Clicking the <X /> Icon at the top-right of the modal,
          </li>
          <li>Clicking the button below.</li>
        </ol>
        <button className="h-9 rounded-md border px-2" onClick={closeModal}>
          Close Modal
        </button>
      </Modal>
    </section>
  );
};

ModalStory.storyName = 'Modal';
