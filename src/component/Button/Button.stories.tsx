import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '..';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const ButtonComponent: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

ButtonComponent.args = {
  text: 'Button',
  type: 'default',
};
