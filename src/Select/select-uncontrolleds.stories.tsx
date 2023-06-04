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

export const SelectStory: Story<StoryParams> = ({ label, description, error, border, flow }) => {
  return (
    <Section title="Select">
      <Select label={label} description={description} errorMessage={error} border={border} flow={flow}>
        <Select.Item value={0}>Zero</Select.Item>
        <Select.Item value={1}>One</Select.Item>
        <Select.Item value={2}>Two</Select.Item>
        <Select.Item value={3}>Three</Select.Item>
        <Select.Item value={4}>Four</Select.Item>
        <Select.Item value={5}>Five</Select.Item>
        <Select.Item value={6}>Six</Select.Item>
        <Select.Item value={7}>Seven</Select.Item>
        <Select.Item value={8}>Eight</Select.Item>
        <Select.Item value={9}>Nine</Select.Item>
      </Select>
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
