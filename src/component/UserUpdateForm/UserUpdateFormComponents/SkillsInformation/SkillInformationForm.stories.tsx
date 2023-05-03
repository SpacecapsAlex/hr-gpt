import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SkillInformationForm } from '..';

export default {
  title: 'Components/UserUpdateFormComponent/SkillInformation',
  component: SkillInformationForm,
} as ComponentMeta<typeof SkillInformationForm>;

export const SkillInformationFormComponent: ComponentStory<
  typeof SkillInformationForm
> = (args) => <SkillInformationForm {...args} />;

SkillInformationFormComponent.args = {
  skills: ['Js', 'C++', 'C#', 'QA'],
  handleFinish: (data) => {
    console.log(data);
  },
};
