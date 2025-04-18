import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from './TextInput';

const meta = {
  title: 'Components/DataEntry/TextInput',
  component: TextInput,
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'tel', 'url'],
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Text input component for collecting user text data.',
      },
    },
    a11y: {
      config: {
        rules: [
          {
            id: 'label',
            enabled: true,
          },
        ],
      },
    },
  },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    label: 'Name',
    placeholder: 'Enter your name',
    helperText: 'Please enter your full name',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    error: true,
    errorMessage: 'Please enter a valid email address',
    value: 'invalid-email',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    disabled: true,
    value: 'username',
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    startIcon: <span>🔍</span>,
  },
};