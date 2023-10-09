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
      control: 'inline-radio', 
      options: ['solid', 'soft', 'outlined'] 
    },
    colorVariant: { 
      control: 'inline-radio', 
      options: ["primary", "secondary", "accent", "danger", "success", "warning", "info", "gray",] 
    },
    size: { 
        control: 'inline-radio', 
        options: ["sm", "md", "lg"] 
      },
    children: { control: 'text' },
    className: { control: 'text' }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;


export const Solid: Story = {
  args: {
    variant: 'solid',
    colorVariant: 'primary',
    size: "sm",
    children: "solid",
    className: ""
  },
};

export const Soft: Story = {
  args: {
    variant: 'soft',
    colorVariant: 'primary',
    children: "soft",
    size: "sm",
    className: ""
  },
};

export const Oulined: Story = {
  args: {
    variant: 'outlined',
    colorVariant: "primary",
    size: "sm",
    children: "outlined",
    className: ""
  },
};

