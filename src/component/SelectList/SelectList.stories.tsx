import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SelectList } from '..';

export default {
  title: 'Components/SelectList',
  component: SelectList,
} as ComponentMeta<typeof SelectList>;

export const SelectListComponent: ComponentStory<typeof SelectList> = (
  args,
) => <SelectList {...args} />;

SelectListComponent.args = {
  placeholder: 'text',
  options: [
    { value: 'jack', label: 'Jack' },
    { value: 'lucy', label: 'Lucy' },
    { value: 'Yiminghe', label: 'yiminghe' },
    { value: 'disabled', label: 'Disabled', disabled: true },
  ],
};
