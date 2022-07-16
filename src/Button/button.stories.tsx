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
          <Button onPress={increment}>Enabled</Button> clicked {nb} times.
        </p>
        <Button isDisabled={true}>Disabled</Button>
        <Button iconStart={Anchor}>With start icon</Button>
        <Button iconEnd={Aperture}>With end icon</Button>
        <Button iconStart={Anchor} iconEnd={Aperture}>
          With both icons 🤷
        </Button>
      </div>
    </section>
  );
};

ModalStory.storyName = 'Button';
