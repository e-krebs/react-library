import type { Story } from '@ladle/react';
import { Section } from 'utils';

import { NumberInput } from './NumberInput';

export default {
  title: 'Components > Number Input',
};

export const CheckboxStory: Story = () => (
  <Section title="Text Input: Examples">
    <div className="flex flex-col xl:flex-row gap-6">
      <div className="space-y-6 2xl:w-1/2">
        <NumberInput
          label="with a default value"
          placeholder="and still a placeholder"
          defaultValue={0}
        />
      </div>
      <div className="space-y-6 2xl:w-1/2"></div>
      <NumberInput label="with a placeholder" placeholder="with a placeholder" />
    </div>
    <div className="2xl:flex gap-6">
      <div className="space-y-6 2xl:w-1/3">
        <h2>Col flow (default)</h2>
        <NumberInput label="bottom border (default)" />
        <NumberInput border="rounded" label="rounded border" />
        <NumberInput border="none" label="no border" />
        <h2>Row flow</h2>
        <NumberInput flow="row" label="bottom border (default)" />
        <NumberInput flow="row" border="rounded" label="rounded border" />
        <NumberInput flow="row" border="none" label="no border" />
      </div>
      <div className="space-y-6 2xl:w-1/3">
        <h2>Col flow disabled</h2>
        <NumberInput label="bottom border (default)" isDisabled={true} />
        <NumberInput border="rounded" label="rounded border" isDisabled={true} />
        <NumberInput border="none" label="no border" isDisabled={true} />
        <h2>Row flow disabled</h2>
        <NumberInput flow="row" label="bottom border (default)" isDisabled={true} />
        <NumberInput flow="row" border="rounded" label="rounded border" isDisabled={true} />
        <NumberInput flow="row" border="none" label="no border" isDisabled={true} />
      </div>
      <div className="space-y-6 2xl:w-1/3">
        <h2>with error</h2>
        <NumberInput label="bottom border (default)" errorMessage="you made a mistake!" />
        <NumberInput border="rounded" label="rounded border" errorMessage="you made a mistake!" />
        <NumberInput border="none" label="no border" errorMessage="you made a mistake!" />
        <h2>with error (row flow)</h2>
        <NumberInput flow="row" label="bottom border (default)" errorMessage="you made a mistake!" />
        <NumberInput
          flow="row"
          border="rounded"
          label="rounded border"
          errorMessage="you made a mistake!"
        />
        <NumberInput flow="row" border="none" label="no border" errorMessage="you made a mistake!" />
      </div>
    </div>
  </Section>
);
CheckboxStory.storyName = 'Examples';
