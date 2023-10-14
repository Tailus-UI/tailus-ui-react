import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from "./Checkbox";


const meta: Meta<typeof Checkbox> = {
  title: 'Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customizable checkbox component for React applications.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { 
      control: 'select', 
      options: ['default', 'ring',] 
    },
    children: { control: 'text' },
    id: {control: 'text'}
  }
};

export default meta;

type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
    variant: 'default',
    children: "Keep me signed in",
    id: 'c1',
  },
};

export const Ring: Story = {
  args: {
    variant: 'ring',
    children: "Keep me signed in",
    id: 'c1',
  },
};

