import { useCallback, useState } from 'react';
import { Minus, Plus } from 'react-feather';
import { Section } from 'utils';

import { Button } from '../Button';
import { TextInput } from './TextInput';

export default {
  title: 'Components > Text Input',
};

export const CheckboxStory = () => {
  const [value, setValue] = useState(0);
  const [error, setError] = useState<string>();

  const plusOne = useCallback(() => {
    setError(undefined);
    setValue((x) => x + 1);
  }, []);

  const minusOne = useCallback(() => {
    setError(undefined);
    setValue((x) => x - 1);
  }, []);

  const onChange = useCallback((newValue: string) => {
    if (isNaN(newValue as unknown as number)) {
      setError('input must be a number.');
      setValue(0);
    } else {
      setError(undefined);
      setValue(parseInt(newValue));
    }
  }, []);

  return (
    <Section title="Text Input: Controlled">
      <section className="flex flex-row space-x-3">
        <Button iconStart={Minus} onPress={minusOne} />
        <Button iconStart={Plus} onPress={plusOne} />
      </section>
      <TextInput
        label="controlled input"
        value={value.toString()}
        onChange={onChange}
        errorMessage={error}
      />
    </Section>
  );
};
CheckboxStory.storyName = 'Controlled';
