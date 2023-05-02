import { ComponentMeta, ComponentStory } from '@storybook/react';
import { LayoutProvider } from './';

export default {
  title: 'Components/LayoutProvider',
  component: LayoutProvider,
} as ComponentMeta<typeof LayoutProvider>;

export const LayoutProviderComponent: ComponentStory<typeof LayoutProvider> = (args) => (
  <LayoutProvider {...args} />
);

LayoutProviderComponent.args = {};
