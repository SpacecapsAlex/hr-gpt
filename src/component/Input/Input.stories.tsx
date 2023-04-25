import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from '..';

export default {
  title: 'Components/input',
  component: Input,
} as ComponentMeta<typeof Input>;

export const InputComponent: ComponentStory<typeof Input> = (args) => (
  <Input {...args} />
);

InputComponent.args = {
  placeholder: 'text',
};
