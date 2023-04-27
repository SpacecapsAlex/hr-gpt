import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Alert } from '..';

export default {
  title: 'Components/alert',
  component: Alert,
} as ComponentMeta<typeof Alert>;

export const AlertComponent: ComponentStory<typeof Alert> = (args) => (
  <Alert {...args} />
);

AlertComponent.args = {
  title: 'Успешно',
  description: 'Операция прошла успешно',
  type: 'success',
  isIconShow: true,
  isClosable: true,
  isShow: true,
};
