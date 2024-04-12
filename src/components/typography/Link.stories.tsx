import { Link, type LinkProps } from "./Link"
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<LinkProps> = {
  title: 'Components / Typography / Link',
  component : Link,
  parameters: {
    docs: {
      description: {
        component: 'A customizable badge component for React applications.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: { 
        control: 'select', 
        options: ["xs", "sm", "base", "lg", "xl"] 
    },
    align: {
        control: 'select',
        options: ["left", "center", "right"]
    },
    intent: {
        control: 'select',
        options: ["primary", "info", "gray", "neutral"]
      },
      variant: {
        control: 'select',
        options: ["plain", "underlined", "ghost", "animated"]
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

export const LinkExample: Story = {
  args: {
    children: "This is as link",
    href:"https://beta.tailus.io",
    target:"_blank"
  },
};