import type { Story } from '@ladle/react';
import { Section } from 'utils';

import { TextInput } from './TextInput';
import type { InputBorder, InputFlow, InputWidth } from '../types';

export default {
  title: 'Components > Text Input',
};

interface StoryParams {
  label?: string;
  placeholder?: string;
  description?: string;
  error?: string;
  border?: InputBorder;
  flow?: InputFlow;
  width?: InputWidth;
}

export const CheckboxStory: Story<StoryParams> = ({
  placeholder,
  label,
  description,
  error,
  border,
  flow,
  width,
}) => (
  <Section title="Text Input: Basics" showInfoControls>
    <TextInput
      label={label}
      placeholder={placeholder}
      description={description}
      errorMessage={error}
      border={border}
      flow={flow}
      width={width}
    />
  </Section>
);
CheckboxStory.storyName = 'Uncontrolled';
CheckboxStory.args = {
  label: 'with a label',
  placeholder: 'and a placeholder',
  description: 'and a description',
  error: 'and an error',
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
  width: {
    options: ['xs', 's', 'm', 'l', 'xl', undefined],
    control: { type: 'select' },
    defaultValue: undefined,
  },
};
