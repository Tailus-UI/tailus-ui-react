import Select from "./Select.tsx";
import {Meta, StoryObj} from "@storybook/react";

interface SelectProps {
  softVariant: boolean,
  size: "xs" | "sm" | "md" | "lg" | "xl",
}

const SelectUI = (args: SelectProps) => (
  <Select.Root>
    <Select.Trigger aria-label="Food" placeholder="Select a fruit…" softVariant={args.softVariant} size={args.size}/>
    <Select.Content>
      <Select.Group label={"Fruits"}>
        <Select.Item value="apple">Apple</Select.Item>
        <Select.Item value="banana">Banana</Select.Item>
        <Select.Item value="blueberry">Blueberry</Select.Item>
        <Select.Item value="grapes">Grapes</Select.Item>
        <Select.Item value="pineapple">Pineapple</Select.Item>
      </Select.Group>

      <Select.Separator/>

      <Select.Group label={"Vegetables"}>
        <Select.Item value="aubergine">Aubergine</Select.Item>
        <Select.Item value="broccoli">Broccoli</Select.Item>
        <Select.Item value="carrot" disabled>Carrot</Select.Item>
        <Select.Item value="courgette">Courgette</Select.Item>
        <Select.Item value="leek">Leek</Select.Item>
      </Select.Group>

      <Select.Separator/>

      <Select.Group label={"Meat"}>
        <Select.Item value="beef">Beef</Select.Item>
        <Select.Item value="chicken">Chicken</Select.Item>
        <Select.Item value="lamb">Lamb</Select.Item>
        <Select.Item value="pork">Pork</Select.Item>
      </Select.Group>
    </Select.Content>
  </Select.Root>
);

const SelectUI2 = (args: SelectProps) => (
  <Select.Root defaultValue="apple">
    <Select.Trigger softVariant={args.softVariant} size={args.size}/>
    <Select.Content>
      <Select.Group label={"Fruits"}>
        <Select.Item value="orange">Orange</Select.Item>
        <Select.Item value="apple">Apple</Select.Item>
        <Select.Item value="grape" disabled>Grape</Select.Item>
      </Select.Group>
      <Select.Separator/>
      <Select.Group label={"Vegetables"}>
        <Select.Item value="carrot">Carrot</Select.Item>
        <Select.Item value="potato">Potato</Select.Item>
      </Select.Group>
    </Select.Content>
  </Select.Root>
);

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
    softVariant: {
      description: 'Whether to use the soft variant.',
      control: 'boolean'
    },
    size: {
      description: 'The size of the select.',
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Template: Story = {
  name: 'Select',
  args: {
    softVariant: false,
    size: 'md',
  },
  render: SelectUI,
};

export const Template2: Story = {
  name: 'Select with default value',
  args: {
    softVariant: false,
    size: 'md',
  },
  render: SelectUI2,
};