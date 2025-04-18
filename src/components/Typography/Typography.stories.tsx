import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

// Meta definition
const meta = {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2', 'caption', 'label', 'helper'],
    },
    children: {
      control: 'text',
    },
    color: {
      control: 'color',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Typography component for consistent text styling throughout the application.',
      },
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof Typography>;

export const Heading1: Story = {
  args: {
    variant: 'h1',
    children: 'Heading 1',
  },
};

export const Heading2: Story = {
  args: {
    variant: 'h2',
    children: 'Heading 2',
  },
};

export const Heading3: Story = {
  args: {
    variant: 'h3',
    children: 'Heading 3',
  },
};

export const Body1: Story = {
  args: {
    variant: 'body1',
    children: 'This is the primary body text style used for most paragraph content.',
  },
};

export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'Caption text is used for supplementary information',
  },
};

export const HelperText: Story = {
  args: {
    variant: 'helper',
    children: 'Helper text provides additional context',
  },
};