import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Form } from '..';
import { FormItemType } from '../../types/types';

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

const testForm:FormItemType[] = [

  {
    name: 'datePiciker',
    label: 'datePicker',
    isRequared: false,
    validationMassage: 'select date',
    itemType: 'datePicker',
    // defaultValue: '01/03/2023',
    value: '01/03/2022',
  },
  {
    name: 'input',
    label: 'input',
    isRequared: true,
    validationMassage: 'enter something',
    itemType: 'input',
    placeholder: 'test',
    value: 'ojoijo',
  },
  {
    name: 'radio',
    label: 'radio',
    isRequared: true,
    validationMassage: 'select value',
    itemType: 'radio',
    options: optionsStory,
    value: optionsStory[0].value,
  },
  {
    name: 'select',
    label: 'select',
    isRequared: false,
    validationMassage: 'select value',
    itemType: 'select',
    value: 'jack',
    options: [
      { value: 'jack', label: 'Jack' },
      { value: 'lucy', label: 'Lucy' },
      { value: 'Yiminghe', label: 'yiminghe' },
      { value: 'disabled', label: 'Disabled', disabled: true },
    ],
  },
  {
    name: 'checkBox',
    label: 'checkBox',
    isRequared: false,
    validationMassage: 'select value',
    itemType: 'checkBox',
    itemText: 'checkBox',
    value: false,
  },
];

export default {
  title: 'Components/Form',
  component: Form,
} as ComponentMeta<typeof Form>;

export const FormComponent: ComponentStory<typeof Form> = (args) => (
  <Form {...args} />
);

FormComponent.args = {
  handleFinish: (values: any) => {
    console.log(values);
  },
  formItems: testForm,
};
