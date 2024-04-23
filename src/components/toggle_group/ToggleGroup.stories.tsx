import { FontBoldIcon, FontItalicIcon, TextAlignCenterIcon, TextAlignJustifyIcon, TextAlignLeftIcon, TextAlignRightIcon, UnderlineIcon } from "@radix-ui/react-icons";
import {
  ToggleGroupItem,
  ToggleGroupRoot,
  ToggleGroupIcon
} from "./ToggleGroup";
import { Meta, StoryObj } from "@storybook/react";
import { type ToggleRootProps } from "@tailus/themer";


const TextFormat = (args: ToggleRootProps) => {
  return (
    <ToggleGroupRoot
      {...args}
      type="multiple" aria-label="text formatting options"
    >
      <ToggleGroupItem value="bold" aria-label="Bold">
        <ToggleGroupIcon>
          <FontBoldIcon />
        </ToggleGroupIcon>
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Italic">
         <ToggleGroupIcon>
          <FontItalicIcon />
        </ToggleGroupIcon>
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Underline">
         <ToggleGroupIcon>
          <UnderlineIcon />
        </ToggleGroupIcon>
      </ToggleGroupItem>
    </ToggleGroupRoot>
  )
};

const Alignment = (args: ToggleRootProps) => {
  return (
    <ToggleGroupRoot
      {...args}
      type="single" aria-label="text alignment options"
    >
      <ToggleGroupItem value="left" aria-label="left">
        <ToggleGroupIcon>
          <TextAlignLeftIcon />
        </ToggleGroupIcon>
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="center">
         <ToggleGroupIcon>
          <TextAlignCenterIcon />
        </ToggleGroupIcon>
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="right">
         <ToggleGroupIcon>
          <TextAlignRightIcon />
        </ToggleGroupIcon>
      </ToggleGroupItem>
      <ToggleGroupItem value="justify" aria-label="justify">
         <ToggleGroupIcon>
          <TextAlignJustifyIcon />
        </ToggleGroupIcon>
      </ToggleGroupItem>
    </ToggleGroupRoot>
  )
};

const meta: Meta<typeof TextFormat> = {
  title: 'ToggleGroup',
  component: TextFormat,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'The toggle group component theme is a collection of Tailwind CSS utilities that can be used to ' +
          'create toggles with different colors, sizes, and variants. Toggles are used to allow users to switch ' +
          'between two states, such as on and off, or enabled and disabled.',
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

export const ToggleGroup: Story = {
  args: {},
  render: TextFormat
};

export const AlignmentToggleGroup: Story = {
  args: {},
  render: Alignment
};