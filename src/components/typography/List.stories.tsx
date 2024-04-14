import { List, type ListProps } from "./List"
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<ListProps> = {
  title: 'Components / Typography / List',
  component : List,
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
      options: ["ol", "ul"] 
    },
    type: {
        control: 'select',
        options: ["decimal", "disc", "none"]
    },
    neutral: { control: 'boolean' },
    inside: { control: 'boolean' },
    size: { 
      control: 'select', 
      options: ["sm", "base", "lg", "xl"] 
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

export const ListExample: Story = {
  args: {
    size: "base",
    as: "ul",
    children: (
      <>
        <li>Modern</li>
        <li>Customizable</li>
        <li>Responsive</li>
        <li>Accessible</li>
      </>
    )
  },
};