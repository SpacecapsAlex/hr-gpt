import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProjectsInformationForm } from '..';

const projects = [
  {
    name: 'test1',
    startDate: '10/01/2012',
    endDate: '20/04/2022',
    time: '10 лет',
    position: 'qweqwe',
    description: 'qweqwe',
    someInformation: 'qweqwe',
    mainInformation: 'qweqwe',
    responsibilities: ['qwe', 'asd', 'zxc'],
    skills: ['qwe', 'asd', 'zxc'],
  },
  {
    name: 'test2',
    startDate: '23/10/2022',
    endDate: '12/02/2024',
    time: '2 years',
    position: 'rty',
    description: 'fgh',
    someInformation: 'vbn',
    mainInformation: 'vbn',
    responsibilities: ['bnm', 'jkl', 'uioi'],
    skills: ['zxc', 'zxc', 'zxc'],
  },
];
export default {
  title: 'Components/UserUpdateFormComponent/ProjectInformation',
  component: ProjectsInformationForm,
} as ComponentMeta<typeof ProjectsInformationForm>;

export const ProjectsInformationFormComponent: ComponentStory<
  typeof ProjectsInformationForm
> = (args) => <ProjectsInformationForm {...args} />;

ProjectsInformationFormComponent.args = {
  handleFinish: (data) => {
    console.log(data);
  },
  projects,
};
