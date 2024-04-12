import { Caption, type CaptionProps } from "./Caption"
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<CaptionProps> = {
  title: 'Components / Typography / Caption',
  component : Caption,
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
      options: ["p", "div", "span", "em", "strong"] 
    },
    neutral: { control: 'boolean' },
    size: { 
    control: 'select', 
    options: ["xs", "sm", "base"] 
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

export const CaptionExample: Story = {
  args: {
    size: "sm",
    as: "p",
    children: "Build Custom Web UIs",
  },
};