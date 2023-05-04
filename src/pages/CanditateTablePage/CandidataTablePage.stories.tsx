import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RecoilRoot } from 'recoil';
import { CandidateTablePage } from '..';

export default {
  title: 'Pages/CandidateTablePage',
  component: CandidateTablePage,
} as ComponentMeta<typeof CandidateTablePage>;

export const CandidateTablePageComponent:ComponentStory<typeof CandidateTablePage> = () => <RecoilRoot><CandidateTablePage/></RecoilRoot>;
