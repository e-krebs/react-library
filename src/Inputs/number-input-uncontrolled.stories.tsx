import type { Story } from '@ladle/react';
import { Section } from 'utils';

import { NumberInput } from './NumberInput';
import type { InputBorder, InputFlow } from '../types';

export default {
  title: 'Components > Number Input',
};

interface StoryParams {
  label?: string;
  description?: string;
  error?: string;
  border?: InputBorder;
  flow?: InputFlow;
  step?: string;
}

export const CheckboxStory: Story<StoryParams> = ({ label, description, error, border, flow, step }) => (
  <Section title="Text Input: Basics" showInfoControls>
    <NumberInput
      label={label}
      description={description}
      errorMessage={error}
      border={border}
      flow={flow}
      step={parseInt(step ?? '1')}
      aria-label="fallback label"
      defaultValue={0}
    />
  </Section>
);
CheckboxStory.storyName = 'Uncontrolled';
CheckboxStory.args = {
  label: 'with a label',
  description: 'and a description',
  error: 'and an error',
  step: undefined,
} as StoryParams;
CheckboxStory.argTypes = {
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
  step: {
    options: ['1', '10', '100'],
    control: { type: 'select' },
    defaultValue: '1',
  },
};
