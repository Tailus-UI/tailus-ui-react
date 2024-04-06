import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from "./Badge";


const meta: Meta<typeof Badge> = {
  title: 'Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customizable badge component for React applications.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { 
      control: 'select', 
      options: ['solid', 'soft', 'outlined'] 
    },
    intent: { 
      control: 'select', 
      options: ["primary", "secondary", "accent", "danger", "success", "warning", "info", "gray",] 
    },
    size: { 
        control: 'select', 
        options: ["xs", "sm", "md", "lg"] 
      },
    children: { control: 'text' }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;


export const Solid: Story = {
  args: {
    variant: 'solid',
    intent: 'primary',
    size: "md",
    children: "Open",
  },
};

export const Soft: Story = {
  args: {
    variant: 'soft',
    intent: 'primary',
    size: "md",
    children: "Open",
  },
};

export const Oulined: Story = {
  args: {
    variant: 'outlined',
    intent: "primary",
    size: "md",
    children: "Open",
  },
};

