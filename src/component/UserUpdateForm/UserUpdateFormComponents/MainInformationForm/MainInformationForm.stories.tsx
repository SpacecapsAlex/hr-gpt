import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MainInformationForm } from '..';
import { AdditionalInformationType } from '../../../../types/types';

const additionalInformation: AdditionalInformationType[] = [
  {
    title: '123',
    description: 'dkjadhkasjdhgjhbschbascilasnckasjn',
  },
  {
    title: '321',
    description: 'qweqweqweqweqweqwe',
  },
  {
    title: '456',
    description: 'zxczxczxczxczxc',
  },
];

export default {
  title: 'Components/UserUpdateFormComponent/MainInformation',
  component: MainInformationForm,
} as ComponentMeta<typeof MainInformationForm>;

export const MainInformationFormComponent: ComponentStory<
  typeof MainInformationForm
> = (args) => <MainInformationForm {...args} />;

MainInformationFormComponent.args = {
  additionalInformation,
  handleFinish: (data) => {
    console.log(data);
  },
};
