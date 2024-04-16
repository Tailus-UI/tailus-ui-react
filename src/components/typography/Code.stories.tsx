import { Code, type CodeProps } from "./Code"
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<CodeProps> = {
  title: 'Components / Typography / Code',
  component : Code,
  parameters: {
    docs: {
      description: {
        component: 'Code component for displaying inline code.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    intent: {
        control: "select",
        options: ["primary", "secondary", "accent", "gray", "neutral"],
    },
    children: { control: 'text' }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const CodeExample: Story = {
  args: {
    intent: "gray",
    children: "button['variant'].primary",
  },
};