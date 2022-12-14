import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'shared/contexts/themeContext/ThemeContext';
import { LoginModal } from './LoginModal';

export default {
  title: 'features/LoginModal',
  component: LoginModal,
  argTypes: {},
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = (args) => (
  <LoginModal {...args} />
);

export const Light = Template.bind({});
Light.args = {
  isOpen: true,
};
Light.decorators = [
  StoreDecorator({
    loginForm: {
      username: 'admin',
      password: '123',
    },
  }),
];

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
};
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    loginForm: {
      username: 'admin',
      password: '123',
    },
  }),
];
