import { ComponentMeta, ComponentStory } from '@storybook/react';
import { UserCard } from '..';

export default {
  title: 'Components/UserCard',
  component: UserCard,
} as ComponentMeta<typeof UserCard>;

export const UserCardComponent: ComponentStory<typeof UserCard> = (args) => <UserCard {...args} />;

UserCardComponent.args = {
  title: 'Card Title',
  extraText: 'More',
  extraLink: 'https://ant.design',
  width: 300,
  height: 200,
  children: 'Card Content',
  className: 'card',
};
