import Button from "../button/Button";
import { Display, Title, Text, Link, List, Caption } from "./"
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components / Typography / Overview',
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

export const DisplayExample: Story = {
    name: "Display",
    render: () => (
        <div>
            <Display size={
                {
                    initial: "4xl",
                    sm: "5xl",
                    xl: "6xl"
                }
            } as="h1" align={{ initial: "center" }}>Build Custom Web UIs</Display>
            <Text align="center" className="mt-4 max-w-lg mx-auto">
                Highly customizable components for building modern websites and applications that look and feel the way you want.
            </Text>
            <div className="mt-6 flex justify-center flex-wrap gap-3">
                <Button.Root>
                    <Button.Label>Start Building</Button.Label>
                </Button.Root>
                <Button.Root variant="outlined" intent="gray">
                    <Button.Label>Components</Button.Label>
                </Button.Root>
            </div>
        </div>
    )
};