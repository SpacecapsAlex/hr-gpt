import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CheckBox } from '..';

export default {
  title: 'Components/CheckBox',
  component: CheckBox,
} as ComponentMeta<typeof CheckBox>;

export const CheckBoxComponent: ComponentStory<typeof CheckBox> = (args) => (
  <CheckBox {...args} />
);

CheckBoxComponent.args = {
  checkBoxText: 'test',
  handleChange: (value: boolean) => {
    console.log(value);
  },
};
