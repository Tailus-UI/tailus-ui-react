import type { Meta, StoryObj } from '@storybook/react';
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: 'Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customizable card component for React applications.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { 
      control: 'select', 
      options: ['outlined', 'elevated', 'soft', 'mixed'] 
    },
    children: { control: 'text' },
    className: { control: 'text' }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

const example = (
  <>
    <div className='aspect-auto'>
      <img className="h-full w-full object-cover dark:hidden" src="/legend.png" alt="tailus card stats img" height={688} width={1168} />
      <img className="hidden h-full w-full object-cover dark:block" src="/legend-dark.png" alt="tailus card dark stats img" height={688} width={1168} />
    </div>
    <div className="relative z-10 mt-6 space-y-3 text-center">
      <h3 className="text-xl font-medium text-gray-800 transition group-hover:text-secondary-950 dark:text-white">Faster than light</h3>
      <p className="text-base text-gray-700 dark:text-gray-300">Provident fugit vero voluptate dolores voluptates a sapiente.</p>
    </div>
  </>
);

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: example,
    className: "max-w-xs"
  },
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    children: example,
    className: "max-w-xs"
  },
};

export const Soft: Story = {
  args: {
    variant: 'soft',
    children: example,
    className: "max-w-xs"
  },
};

export const Mixed: Story = {
  args: {
    variant: 'mixed',
    children: example,
    className: "max-w-xs"
  },
};

export const SoftGradient: Story = {
  args: {
    variant: 'soft',
    gradient : true,
    children: example,
    className: "max-w-xs",
  },
};

export const ElevatedGradient: Story = {
  args: {
    variant: 'elevated',
    gradient : true,
    children: example,
    className: "max-w-xs",
  },
};
