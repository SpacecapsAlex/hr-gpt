import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { RecoilRoot } from 'recoil';
import { LoginForm } from './LoginForm';

export default {
  title: 'Components/LoginForm',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

export const LoginFormComponent: ComponentStory<typeof LoginForm> = () => <RecoilRoot><MemoryRouter initialEntries={['/']}> <LoginForm /> </MemoryRouter></RecoilRoot>;
