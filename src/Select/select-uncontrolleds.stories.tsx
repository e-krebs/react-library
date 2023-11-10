import type { Story } from '@ladle/react';
import { Section } from 'utils';

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

export const SelectStory: Story<StoryParams> = ({ label, description, error, border, flow }) => {
  return (
    <Section title="Select">
      <Select
        label={label}
        description={description}
        errorMessage={error}
        border={border}
        flow={flow}
        items={options}
      />
    </Section>
  );
};
SelectStory.storyName = 'Uncontrolled';
SelectStory.args = {
  label: 'with a label',
  description: 'and a description',
  error: 'and an error',
} as StoryParams;
SelectStory.argTypes = {
  border: {
    options: ['none', 'bottom', 'rounded'],
    control: { type: 'select' },
    defaultValue: 'bottom',
  },
  flow: {
    options: ['col', 'row'],
    control: { type: 'radio' },
    defaultValue: 'col',
  },
};
