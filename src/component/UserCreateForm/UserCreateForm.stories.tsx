import { ComponentMeta, ComponentStory } from '@storybook/react';
import { UserCreateForm } from '..';

export default {
  title: 'Components/UserCreateForm',
  component: UserCreateForm,
} as ComponentMeta<typeof UserCreateForm>;

export const UserCreateFormComponent: ComponentStory<typeof UserCreateForm> = (
  args,
) => <UserCreateForm {...args} />;

UserCreateFormComponent.args = {};
