import { Text, type TextProps } from "./Text"
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<TextProps> = {
  title: 'Components / Typography / Text',
  component : Text,
  parameters: {
    docs: {
      description: {
        component: 'A customizable badge component for React applications.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    as: { 
      control: 'select', 
      options: ["p", "div", "span",] 
    },
    size: { 
    control: 'select', 
    options: ["sm", "base", "lg", "xl"] 
    },
    align: {
        control: 'select',
        options: ["left", "center", "right"]
    },
    weight: {
      control: 'select',
      options: ["black", "bold", "semibold", "medium", "normal"],
    },
    children: { control: 'text' }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const TextExample: Story = {
  args: {
    size: "base",
    as: "p",
    children: "Highly customizable components for building modern websites and applications that look and feel the way you want.",
  },
};