import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Tags } from '..';

export default {
  title: 'Components/Tags',
  component: Tags,
} as ComponentMeta<typeof Tags>;

export const TagsComponent: ComponentStory<typeof Tags> = (args) => <Tags {...args} />;

TagsComponent.args = {
  tagsValue: ['tag 1', 'tag 2', 'tag 3'],
};
