// src/stories/Button.stories.jsx
import React from 'react';
import { Button } from '../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
    variant: { 
      control: { type: 'select', options: ['primary', 'secondary', 'danger'] },
    },
    onClick: { action: 'clicked' }
  },
};

export const Primary = {
  args: {
    variant: 'primary',
    label: 'Primary Button',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    label: 'Secondary Button',
  },
};

export const Danger = {
  args: {
    variant: 'danger',
    label: 'Danger Button',
  },
};