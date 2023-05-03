import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RecoilRoot } from 'recoil';
import { EducationInformationForm } from '..';

const educ = [{
  startYear: 2018,
  finishYear: 2021,
  institution: 'qweqwe',
  specialization: 'qweqwe',
  mainInformation: 'qweqwe',
  EducationTypeName: 'qweqwe',
},
{
  startYear: 2019,
  finishYear: 2022,
  institution: 'asdasd',
  specialization: 'asdasd',
  mainInformation: 'asdasd',
  EducationTypeName: 'asdasd',
},
{
  startYear: 2012,
  finishYear: 2029,
  institution: 'zxczxc',
  specialization: 'zxczxc',
  mainInformation: 'zxczxc',
  EducationTypeName: 'zxczxc',
},
];

export default {
  title: 'Components/UserUpdateFormComponent/EducationInformation',
  component: EducationInformationForm,
} as ComponentMeta<typeof EducationInformationForm>;

export const EducationInformationComponent:ComponentStory<typeof EducationInformationForm> = (args) => <RecoilRoot><EducationInformationForm {...args} /></RecoilRoot>;

EducationInformationComponent.args = {
  education: educ,
  handleFinish: (data) => {
    console.log(data);
  },
};
