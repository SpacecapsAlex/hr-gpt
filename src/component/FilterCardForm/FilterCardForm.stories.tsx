import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RecoilRoot } from 'recoil';
import { FilterCardForm } from '..';

export default {
  title: 'Components/FilterCard',
  component: FilterCardForm,
} as ComponentMeta<typeof FilterCardForm>;

export const FilterCardFormComponent: ComponentStory<typeof FilterCardForm> = (args) => <RecoilRoot><FilterCardForm {...args} /></RecoilRoot>;

FilterCardFormComponent.args = {
  handleFilter: (value) => {
    console.log(value);
  },
};
