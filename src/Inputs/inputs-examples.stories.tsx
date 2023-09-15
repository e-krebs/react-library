import type { Story } from '@ladle/react';
import { Section } from 'utils';

import { TextInput } from './TextInput';
import type { InputBorder, InputFlow } from '../types';

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
}

export const CheckboxStory: Story<StoryParams> = () => (
  <Section title="Text Input: Examples">
    <TextInput
      label="with a default value"
      placeholder="and still a placeholder"
      defaultValue="whatever"
    />
    <div className="2xl:flex gap-6">
      <div className="space-y-6 2xl:w-1/2">
        <h2>Col flow (default)</h2>
        <TextInput label="bottom border (default)" />
        <TextInput border="rounded" label="rounded border" />
        <TextInput border="none" label="no border" />
        <h2>Row flow</h2>
        <TextInput flow="row" label="bottom border (default)" />
        <TextInput flow="row" border="rounded" label="rounded border" />
        <TextInput flow="row" border="none" label="no border" />
      </div>
      <div className="space-y-6 2xl:w-1/2">
        <h2>with error</h2>
        <TextInput label="bottom border (default)" errorMessage="you made a mistake!" />
        <TextInput border="rounded" label="rounded border" errorMessage="you made a mistake!" />
        <TextInput border="none" label="no border" errorMessage="you made a mistake!" />
        <h2>with error (row flow)</h2>
        <TextInput flow="row" label="bottom border (default)" errorMessage="you made a mistake!" />
        <TextInput
          flow="row"
          border="rounded"
          label="rounded border"
          errorMessage="you made a mistake!"
        />
        <TextInput flow="row" border="none" label="no border" errorMessage="you made a mistake!" />
      </div>
    </div>
  </Section>
);
CheckboxStory.storyName = 'Examples';
