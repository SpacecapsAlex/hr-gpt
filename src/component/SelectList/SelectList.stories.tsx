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
};
