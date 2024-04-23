import {Meta, StoryObj} from "@storybook/react";
import { ToggleIcon, ToggleRoot } from "./Toggle";
import { FontBoldIcon } from "@radix-ui/react-icons";
import { type ToggleRootProps } from "@tailus/themer";

const ToggleUI = (args: ToggleRootProps) => (
  <ToggleRoot aria-label="Toggle bold" {...args}>
    <ToggleIcon size={args.size}>
      <FontBoldIcon />
    </ToggleIcon>
    {
      args.withLabel && <span>Bold</span>
    }
  </ToggleRoot>
);

const meta: Meta<typeof ToggleUI> = {
  title: 'Toggle',
  component: ToggleUI,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customizable toggle component built with Radix UI primitives.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['plain', 'soft', 'mixed', 'softToSolid'],
      defaultValue: 'default',
      description: 'The variant of the toggle.'
    },
    intent: {
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'gray', 'neutral'],
      defaultValue: 'accent',
      description: 'The intent of the toggle.'
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      defaultValue: 'md',
      description: 'The size of the toggle.',
    },
    withLabel: {
      control: 'boolean',
      defaultValue: false,
      description: 'Whether to show a label with the toggle.'
    }
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Toggle: Story = {
  args: {
    variant: 'soft',
    size: 'md',
    intent: 'accent'
  },
};
