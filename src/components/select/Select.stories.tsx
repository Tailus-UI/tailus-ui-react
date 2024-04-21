import { CaretSortIcon, CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import Select from "./Select.tsx";
import { Meta, StoryObj } from "@storybook/react";
import React, { ReactNode } from "react";

interface SelectProps {
  variant?: "soft" | "outlined" | "mixed" | "bottomOutlined" | "plain"
  itemsVariant? : "soft" | "solid"
  size?: "sm" | "md" | "lg" | "xl",
  fancy?: boolean,
  mixed?: boolean,
  intent?: "primary" | "secondary" | "accent" | "gray" | "neutral",
  position?: "item-aligned" | "popper"
}

const SelectUI = (args: SelectProps) => (
  <Select.Root>
    <Select.Trigger
      size={args.size}
      variant={args.variant}
      aria-label="Food"
    >
      <Select.Value placeholder="Select a fruit…" />
      <Select.TriggerIcon size={args.size}>
        <CaretSortIcon className="size-5" />
      </Select.TriggerIcon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content position={args.position} align="center" sideOffset={5} variant={args.itemsVariant} fancy={args.fancy} mixed={args.mixed} intent={args.intent}>
        <Select.ScrollUpButton/>
        <Select.Viewport>
            <Select.Group>
              <Select.Label>Fruits</Select.Label>
              <SelectItem value="apple">🍎&nbsp;&nbsp;Apple</SelectItem>
              <SelectItem value="banana">🍌&nbsp;&nbsp;Banana</SelectItem>
              <SelectItem value="orange">🍊&nbsp;&nbsp;Orange</SelectItem>
              <SelectItem value="grape">🍇&nbsp;&nbsp;Grape</SelectItem>
              <SelectItem value="pear">🍐&nbsp;&nbsp;Pear</SelectItem>
            </Select.Group>
          <Select.Separator />
          <Select.Group>
            <Select.Label>Fast Food</Select.Label>
            <SelectItem value="pizza">🍕&nbsp;&nbsp;Pizza</SelectItem>
            <SelectItem value="burger">🍔&nbsp;&nbsp;Burger</SelectItem>
            <SelectItem value="fries">🍟&nbsp;&nbsp;Fries</SelectItem>
            <SelectItem value="hotdog">🌭&nbsp;&nbsp;Hot Dog</SelectItem>
            <SelectItem value="taco">🌮&nbsp;&nbsp;Taco</SelectItem>
          </Select.Group>
        </Select.Viewport>
        <Select.ScrollDownButton>
          <ChevronDownIcon />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);

const SelectItem = ({value, children}:{value:string, children:ReactNode}) => {
  return (
    <Select.Item value={value}>
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator>
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  );
};

const meta: Meta<typeof SelectUI> = {
  title: 'Select',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'The select component theme is a collection of Tailwindcss utilities that can be used to ' +
          'create select components with different colors and styles. Select components are used to allow users to' +
          ' select a single value from a list of values.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'The variant of the select.',
      control: 'select',
      options: ['soft', 'outlined', 'mixed', 'bottomOutlined', 'plain'],
    },
    fancy: {
      description: 'Whether the select has a fancy style.',
      control: 'boolean',
    },
    size: {
      description: 'The size of the select.',
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    intent: {
      description: 'The intent of the select.',
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'gray', 'neutral'],
    },
    itemsVariant: {
      description: 'The variant of the items in the select.',
      control: 'select',
      options: ['soft', 'solid'],
    },
    mixed: {
      description: 'Whether the select has a mixed style.',
      control: 'boolean',
    },
    position: {
      description: 'The position of the items in the select.',
      control: 'select',
      options: ['item-aligned', 'popper'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Template: Story = {
  name: 'Select',
  args: {
    size: 'md',
    position: "item-aligned",
    intent: "primary",
    variant: "soft",
    itemsVariant: "solid",
    fancy: false,
    mixed: false,
  },
  render: SelectUI,
};