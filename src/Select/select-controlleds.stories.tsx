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
  { textValue: 'Zero', value: 0 },
  { textValue: 'One', value: 1 },
  { textValue: 'Two', value: 2 },
  { textValue: 'Three', value: 3 },
  { textValue: 'Four', value: 4 },
  { textValue: 'Five', value: 5 },
  { textValue: 'Six', value: 6 },
  { textValue: 'Seven', value: 7 },
  { textValue: 'Eight', value: 8 },
  { textValue: 'Nine', value: 9 },
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
        {(item) => <Select.Item key={item.textValue} {...item} />}
      </Select>
    </Section>
  );
};
SelectStory.storyName = 'Controlled';
