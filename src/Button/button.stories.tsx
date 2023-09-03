import { useReducer } from 'react';
import { Anchor, Aperture } from 'react-feather';

import { Button } from './index';

export default {
  title: 'Components',
};

export const ModalStory = () => {
  const [nb, increment] = useReducer((x) => x + 1, 0);

  return (
    <section>
      <h2>Button</h2>
      <div className="flex flex-col space-y-6">
        <p>
          <Button onPress={increment}>Enabled</Button> ← clicked {nb} time{nb >= 2 && 's'}
        </p>
        <Button isDisabled={true}>Disabled</Button>
        <Button iconStart={Anchor}>With start icon</Button>
        <Button iconEnd={Aperture}>With end icon</Button>
        <Button iconStart={Anchor} iconEnd={Aperture}>
          With both icons 🤷
        </Button>
        <p>
          <Button iconStart={Anchor} /> ← button with no text
        </p>
        <Button variant="primary">Primary</Button>
        <Button variant="primary" isDisabled={true}>
          Primary disabled
        </Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="destructive" isDisabled={true}>
          Destructive disabled
        </Button>
        <Button variant="unstyled">Unstyled Button</Button>
        <Button variant="unstyled" isDisabled={true}>
          Unstyled & disabled button
        </Button>
      </div>
    </section>
  );
};

ModalStory.storyName = 'Button';
