import { CheckIcon, DividerHorizontalIcon } from "@radix-ui/react-icons";
import {CheckboxIndicator, CheckboxLabel, CheckboxRoot} from "./Checkbox";
import {Meta, StoryObj} from "@storybook/react";
import { ReactNode } from "react";
import React from "react";

const CheckboxUI = ({ intent, label, fancy }: { intent: 'primary' | 'gray' | 'neutral', fancy?:boolean, children: ReactNode, label: string }) => {
  return (
    <div className="flex items-center">
      <CheckboxRoot intent={intent} id="c1" fancy={fancy} defaultChecked>
        <CheckboxIndicator>
          <CheckIcon className="size-5" />
        </CheckboxIndicator>
      </CheckboxRoot>
      <CheckboxLabel htmlFor="c1" className="text-gray-950 dark:text-white peer-disabled:opacity-50">
        {label}
      </CheckboxLabel>
  </div> 
  )
};

const meta: Meta<typeof CheckboxUI> = {
  title: 'Checkbox',
  component: CheckboxUI,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customizable checkbox component built with Radix UI primitives.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    intent: {
      control: 'select',
      options: ['primary', 'gray', 'neutral'],
      defaultValue: 'primary',
    },
    fancy: {
      control: 'boolean',
    },
    children: {
      control: 'hidden'
    },
    label: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Checkbox: Story = {
  args: {
    intent: 'primary',
    label: 'Keep me signed in',
  },
};
