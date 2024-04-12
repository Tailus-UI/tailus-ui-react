import { Display, type DisplayProps } from "./Display"
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<DisplayProps> = {
  title: 'Components / Typography / Display',
  component : Display,
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
    as: { 
      control: 'select', 
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "div", "span",] 
    },
    size: { 
        control: 'select', 
        options: ["4xl", "5xl", "6xl", "7xl", "8xl", "9xl"] 
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

export const DisplayExample: Story = {
  args: {
    size: "4xl",
    as: "h1",
    children: "Build Custom Web UIs",
  },
};