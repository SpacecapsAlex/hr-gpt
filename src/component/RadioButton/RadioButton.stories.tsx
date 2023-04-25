import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RadioButtonGroup } from '..';

const optionsStory = [
  {
    label: '1',
    value: 'first',
  },
  {
    label: '2',
    value: 'second',
  },
  {
    label: '3',
    value: 'third',
  },
];
export default {
  title: 'Components/RadioGroup',
  component: RadioButtonGroup,
} as ComponentMeta<typeof RadioButtonGroup>;

export const RadioGroupButtonComponent: ComponentStory<
  typeof RadioButtonGroup
> = (args) => <RadioButtonGroup {...args} />;

RadioGroupButtonComponent.args = {
  options: optionsStory,
  defaultValue: 'first',
  handleChange: (value: string) => {
    console.log(value);
  },
};
