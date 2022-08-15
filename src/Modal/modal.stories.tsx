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
      <Button className="h-9 rounded-md border px-2" onPress={openModal}>
        Open modal
      </Button>
      <p>
        The modal has been close {nb} times.
        <Button className="ml-2 h-9 rounded-md border px-2" onPress={() => setNb(0)}>
          reset counter
        </Button>
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
              Clicking the <X /> Icon at the top-right of the modal,
            </li>
            <li>Clicking the button below.</li>
          </ol>
        </Modal.Content>
        <Modal.Footer>
          <Button className="h-9 rounded-md border px-2" onPress={closeModal}>
            Close Modal
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

ModalStory.storyName = 'Default';
