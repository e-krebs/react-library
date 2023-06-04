import type { Story } from '@ladle/react';
import { Key, useState, useMemo } from 'react';
import { Section } from 'utils';
import { NumberInput } from 'Inputs';

import { Select } from './Select';
import type { InputBorder, InputFlow } from '../types';

export default {
  title: 'Components > Select',
};

interface StoryParams {
  label?: string;
  description?: string;
  error?: string;
  border?: InputBorder;
  flow?: InputFlow;
}

const options = [
  { name: 'Zero', value: 0 },
  { name: 'One', value: 1 },
  { name: 'Two', value: 2 },
  { name: 'Three', value: 3 },
  { name: 'Four', value: 4 },
  { name: 'Five', value: 5 },
  { name: 'Six', value: 6 },
  { name: 'Seven', value: 7 },
  { name: 'Eight', value: 8 },
  { name: 'Nine', value: 9 },
];

export const SelectStory: Story<StoryParams> = () => {
  const [value, setValue] = useState<Key>(0);

  const numberValue = useMemo(() => (typeof value === 'string' ? parseInt(value) : value), [value]);

  return (
    <Section title="Select">
      <NumberInput minValue={0} maxValue={9} value={numberValue} onChange={setValue} />
      <Select
        label="controlled select input"
        items={options}
        selectedKey={value}
        onSelectionChange={setValue}
      >
        {(item) => (
          <Select.Item id={item.value} textValue={item.value.toString()}>
            {item.name}
          </Select.Item>
        )}
      </Select>
    </Section>
  );
};
SelectStory.storyName = 'Controlled';
