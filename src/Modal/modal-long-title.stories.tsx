import { useRef } from 'react';

import { Button } from '../Button';
import { Modal, type ModalRef } from './index';

export default {
  title: 'Components > Modal',
};

export const ModalStory = () => {
  const modalRef = useRef<ModalRef>(null);
  const openModal = () => {
    modalRef.current?.openModal();
  };

  return (
    <section className="space-y-6">
      <h2>Modal with long title</h2>
      <Button onPress={openModal}>Open modal</Button>

      <Modal
        ref={modalRef}
        title="Example modal with a long title that is being truncated"
        contentProps={{ className: 'max-w-xs' }}
      >
        <Modal.Content>
          <p>
            Example modal with a long title that is being truncated. <br />
            By default, no max width is set on the modal. You have to set it through{' '}
            <code>contentProps.className</code>.
          </p>
        </Modal.Content>
      </Modal>
    </section>
  );
};

ModalStory.storyName = 'Long title';
