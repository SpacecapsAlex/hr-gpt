import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Label } from '..';

export default {
  title: 'Components/Label',
  component: Label,
} as ComponentMeta<typeof Label>;

export const LabelComponent: ComponentStory<typeof Label> = (args) => (
  <Label {...args} />
);

LabelComponent.args = {
  text: 'Test text',
  type: 'paragraph',
  isEditable: true,
  isCopyable: true,
};
