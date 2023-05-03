import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ParserExample } from './parserExample';

export default {
  title: 'Components/ParserExample',
  component: ParserExample,
} as ComponentMeta<typeof ParserExample>;

export const ParserExampleComponent: ComponentStory<typeof ParserExample> = () => (
  <ParserExample />
);
