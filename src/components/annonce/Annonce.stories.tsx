import type { Meta, StoryObj } from '@storybook/react';
import { Annonce } from "./Annonce";


const meta: Meta<typeof Annonce> = {
  title: 'Annonce',
  component: Annonce,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customizable Annonce component for React applications.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { 
      control: 'select', 
      options: ['soft', 'outlined'] 
    },
    colorVariant: { 
      control: 'select', 
      options: ["primary", "secondary", "accent", "danger", "success", "warning", "info", "gray",] 
    },
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Oulined: Story = {
    args: {
      variant: 'outlined',
      colorVariant: "primary",
    },
};

export const Soft: Story = {
  args: {
    variant: 'soft',
    colorVariant: 'primary',
  },
};


