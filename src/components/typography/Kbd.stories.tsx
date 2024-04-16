import { Kbd, type KbdProps } from "./Kbd"
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<KbdProps> = {
  title: 'Components / Typography / Kbd',
  component : Kbd,
  parameters: {
    docs: {
      description: {
        component: 'Kbd component for displaying inline code.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const KbdExample: Story = {
  args: {
    children: "Cmd",
  },
};