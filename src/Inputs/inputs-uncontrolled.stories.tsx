import type { Story } from "@ladle/react";
import { Section } from 'utils';
import { type InputBorder, TextInput, type InputFlow } from './TextInput';

export default {
  title: "Components > Text Input",
};

interface StoryParams {
  label?: string;
  placeholder?: string;
  description?: string;
  error?: string;
  border?: InputBorder;
  flow?: InputFlow;
}

export const CheckboxStory: Story<StoryParams> = ({
  placeholder, label, description, error, border, flow
}) => (
  <Section title="Text Input: Basics" showInfoControls>
    <TextInput
      autoFocus
      label={label}
      placeholder={placeholder}
      description={description}
      errorMessage={error}
      border={border}
      flow={flow}
      aria-label="fallback label"
    />
  </Section>
);
CheckboxStory.storyName = "Uncontrolled";
CheckboxStory.args = {
  label: 'with a label',
  placeholder: "and a placeholder",
  description: "and a description",
  error: 'and an error'
} as StoryParams;
CheckboxStory.argTypes = {
  border: {
    options: ['none', 'bottom', 'rounded'],
    control: { type: 'select' },
    defaultValue: 'bottom'
  },
  flow: {
    options: ['col', 'row'],
    control: { type: 'radio' },
    defaultValue: 'col'
  }
}
