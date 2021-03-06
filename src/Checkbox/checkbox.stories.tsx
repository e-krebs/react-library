import { Checkbox } from './index';

export default {
  title: 'Components',
};

export const CheckboxStory = () => (
  <section className="space-y-6">
    <h2>Checkbox</h2>
    <Checkbox label="enabled" />
    <Checkbox label="disabled unchecked" isDisabled={true} />
    <Checkbox label="disabled checked" isDisabled={true} defaultSelected={true} />
  </section>
);
CheckboxStory.storyName = 'Checkbox';
