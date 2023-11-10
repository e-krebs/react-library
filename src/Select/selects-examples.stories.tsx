import type { Story } from '@ladle/react';
import { Section } from 'utils';

import { Select } from './Select';

export default {
  title: 'Components > Select',
};

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

export const CheckboxStory: Story = () => (
  <Section title="Text Input: Examples">
    <Select label="with a default value" items={options} defaultSelectedKey={7} />
    <div className="2xl:flex gap-6">
      <div className="space-y-6 2xl:w-1/2">
        <h2>Col flow (default)</h2>
        <Select label="bottom border (default)" items={options} />
        <Select border="rounded" label="rounded border" items={options} />
        <Select border="none" label="no border" items={options} />
        <h2>Row flow</h2>
        <Select flow="row" label="bottom border (default)" items={options} />
        <Select flow="row" border="rounded" label="rounded border" items={options} />
        <Select flow="row" border="none" label="no border" items={options} />
      </div>
      <div className="space-y-6 2xl:w-1/2">
        <h2>Col flow disabled</h2>
        <Select label="bottom border (default)" items={options} isDisabled={true} />
        <Select border="rounded" label="rounded border" items={options} isDisabled={true} />
        <Select border="none" label="no border" items={options} isDisabled={true} />
        <h2>Row flow disabled</h2>
        <Select flow="row" label="bottom border (default)" items={options} isDisabled={true} />
        <Select flow="row" border="rounded" label="rounded border" items={options} isDisabled={true} />
        <Select flow="row" border="none" label="no border" items={options} isDisabled={true} />
      </div>
      <div className="space-y-6 2xl:w-1/2">
        <h2>with error</h2>
        <Select label="bottom border (default)" errorMessage="you made a mistake!" items={options} />
        <Select
          border="rounded"
          label="rounded border"
          errorMessage="you made a mistake!"
          items={options}
        />
        <Select border="none" label="no border" errorMessage="you made a mistake!" items={options} />
        <h2>with error (row flow)</h2>
        <Select
          flow="row"
          label="bottom border (default)"
          errorMessage="you made a mistake!"
          items={options}
        />
        <Select
          flow="row"
          border="rounded"
          label="rounded border"
          errorMessage="you made a mistake!"
          items={options}
        />
        <Select
          flow="row"
          border="none"
          label="no border"
          errorMessage="you made a mistake!"
          items={options}
        />
      </div>
    </div>
  </Section>
);
CheckboxStory.storyName = 'Examples';
