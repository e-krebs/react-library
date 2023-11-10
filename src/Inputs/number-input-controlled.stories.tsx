import { useCallback, useState } from 'react';
import { Section } from 'utils';

import { Minus, Plus } from '../../.ladle/Icons';
import { Button } from '../Button';
import { NumberInput } from './NumberInput';

export default {
  title: 'Components > Number Input',
};

export const CheckboxStory = () => {
  const [value, setValue] = useState(0);

  const plusOne = useCallback(() => {
    setValue((x) => x + 1);
  }, []);

  const minusOne = useCallback(() => {
    setValue((x) => x - 1);
  }, []);

  return (
    <Section title="Number Input: Controlled">
      <section className="flex flex-row space-x-3">
        <Button iconStart={Minus} onPress={minusOne} />
        <Button iconStart={Plus} onPress={plusOne} />
      </section>
      <NumberInput label="controlled number input" value={value} onChange={setValue} />
    </Section>
  );
};
CheckboxStory.storyName = 'Controlled';
