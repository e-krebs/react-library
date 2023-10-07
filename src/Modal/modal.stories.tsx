import { useRef, useState } from 'react';
import { X } from 'react-feather';

import { Button } from '../Button';
import { Modal, type ModalRef } from './index';

export default {
  title: 'Components > Modal',
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
      <Button onPress={openModal}>Open modal</Button>
      <p className="space-x-2">
        <span>The modal has been close {nb} times.</span>
        <Button onPress={() => setNb(0)}>reset counter</Button>
      </p>

      <Modal ref={modalRef} title="Example modal" onClosed={() => setNb((nb) => nb + 1)}>
        <Modal.Content>
          <p>
            With some text inside for content.
            <br />
            This example uses both <code>Modal.Content</code> & <code>Modal.Footer</code> components.
          </p>
          You can close the modal by:
          <ol className="leading-8">
            <li>
              Hitting <b>{'<Esc>'}</b> on your Keyboard,
            </li>
            <li>Clicking outside of the modal,</li>
            <li>
              Clicking the <X /> Button at the top-right of the modal,
            </li>
            <li>Clicking either button below.</li>
          </ol>
        </Modal.Content>
        <Modal.Footer className="flex-col items-end space-y-2">
          <div className="space-x-2">
            <span className="italic">regular Button calling closeModal →</span>
            <Button onPress={closeModal}>Close Modal</Button>
          </div>
          <div className="space-x-2">
            <span className="italic">Modal.CloseButton →</span>
            <Modal.CloseButton>Close Modal</Modal.CloseButton>
          </div>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

ModalStory.storyName = 'Default';
