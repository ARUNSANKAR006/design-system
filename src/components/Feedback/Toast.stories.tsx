import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from './Toast';

const meta = {
  title: 'Components/Feedback/Toast',
  component: Toast,
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
    },
    position: {
      control: 'select',
      options: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
    },
    duration: {
      control: 'number',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Toast notification component for providing feedback to users.',
      },
    },
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof Toast>;

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Information',
    message: 'This is an informational message for the user.',
    duration: 0, // Set to 0 for Storybook to prevent auto-closing
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Success',
    message: 'Your changes have been saved successfully!',
    duration: 0,
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Warning',
    message: 'Please save your changes before leaving this page.',
    duration: 0,
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Error',
    message: 'An error occurred while processing your request. Please try again.',
    duration: 0,
  },
};