import { Title, type TitleProps } from "./Title"
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<TitleProps> = {
  title: 'Components / Typography / Title',
  component : Title,
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
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "div", "span",] 
    },
    size: { 
    control: 'select', 
    options: ["base", "lg", "xl", "2xl", "3xl"] 
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

export const TitleExample: Story = {
  args: {
    size: "3xl",
    as: "h1",
    children: "Build Custom Web UIs",
  },
};