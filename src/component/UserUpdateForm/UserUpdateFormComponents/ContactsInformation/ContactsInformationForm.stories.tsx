import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ContactsInformationForm } from '..';

const contat = [
  {
    name: 'telegram',
    value: 'kek',
    isMain: true,
  },
  {
    name: 'viber',
    value: 'lol',
    isMain: false,
  },
  {
    name: 'phone number',
    value: '+375553337744',
    isMain: false,
  },
];

export default {
  title: 'Components/UserUpdateFormComponent/ContactsInformation',
  component: ContactsInformationForm,
} as ComponentMeta<typeof ContactsInformationForm>;

export const ContactsInformationFormComponent: ComponentStory<typeof ContactsInformationForm> = (args) => <ContactsInformationForm {...args} />;

ContactsInformationFormComponent.args = {
  handleFinish: (data) => {
    console.log(data);
  },
  contacts: contat,
};
