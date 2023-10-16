import type { Meta, StoryObj } from '@storybook/react';
import { Button } from "./Button";


const meta: Meta<typeof Button> = {
  title: 'Button/Icon',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customizable button component for React applications.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { 
      control: 'select', 
      options: ['solid', 'soft', 'outlined', 'ghost'] 
    },
    colorVariant: { 
      control: 'select', 
      options: ["primary", "secondary", "accent", "danger", "success", "warning", "info", "gray", "neutral"] 
    },
    size: { 
        control: 'select', 
        options: ["xs", "sm", "md", "lg", "xl"] 
      },
    disabled: {
        control: 'boolean'
    },
    children: { control: 'text' }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;


export const Solid: Story = {
  args: {
    variant: 'solid',
    colorVariant: 'primary',
    size: "md",
    children: "Open",
  },
};

export const Soft: Story = {
  args: {
    variant: 'soft',
    colorVariant: 'primary',
    size: "md",
    children: "Open",
  },
};

export const Oulined: Story = {
    args: {
      variant: 'outlined',
      colorVariant: "primary",
      size: "md",
      children: "Boost button",
    },
  };

  export const Ghost: Story = {
    args: {
      variant: 'ghost',
      colorVariant: "primary",
      size: "md",
      children: "Open",
    },
  };
  
