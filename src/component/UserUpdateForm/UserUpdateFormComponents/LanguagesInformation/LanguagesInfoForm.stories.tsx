import { ComponentMeta, ComponentStory } from '@storybook/react';
import { LanguagesInformationForm } from '..';

const languages = [
  {
    name: 'english',
    level: 'b1',
    isMain: false,
  },
  {
    name: 'russian',
    level: 'c2',
    isMain: true,
  },
];

export default {
  title: 'Components/UserUpdateFormComponent/LanguagesInfoForm',
  component: LanguagesInformationForm,
} as ComponentMeta<typeof LanguagesInformationForm>;

export const LanguagesInformationFormComponent: ComponentStory<typeof LanguagesInformationForm> = (args) => <LanguagesInformationForm {...args} />;

LanguagesInformationFormComponent.args = {
  handleFinish: (data) => {
    console.log(data);
  },
  languages,
};
