import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Header from './Header';

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    menuItems: { control: 'object' },
  },
} as Meta;

interface MenuItem {
  label: string;
  link: string;
}

// Use StoryFn instead of Story
const Template: StoryFn<{ menuItems: MenuItem[] }> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  menuItems: [
    { label: 'Home', link: '#home' },
    { label: 'About', link: '#about' },
    { label: 'Contact', link: '#contact' }
  ],
};
