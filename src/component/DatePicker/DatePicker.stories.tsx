import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DatePicker } from '..';

export default {
  title: 'Components/DatePicker',
  component: DatePicker,
} as ComponentMeta<typeof DatePicker>;

export const DatePickerComponent: ComponentStory<typeof DatePicker> = (
  args,
) => <DatePicker {...args} />;

DatePickerComponent.args = {
  defaultDate: '01/03/2023',
  handleChange: (value: string) => {
    console.log(value);
  },
};
