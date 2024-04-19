import { CheckIcon } from "@radix-ui/react-icons";
import { CheckboxIndicator, CheckboxRoot } from "./Checkbox";
import { Meta, StoryObj } from "@storybook/react";
import Label from "../label/Label";
import { Caption } from "../typography";
import type { CheckboxProps } from "@tailus/themer";

const CheckboxUI = (args:CheckboxProps) => {
  return (
    <div className="max-w-md grid items-center gap-x-3 gap-y-1 [grid-template-columns:1fr_auto]">
      <CheckboxRoot className="size-4" intent={args.intent} id="c1" fancy={args.fancy}>
        <CheckboxIndicator>
          <CheckIcon className="size-4" />
        </CheckboxIndicator>
      </CheckboxRoot>
      <Label htmlFor="c1">
        Accept terms and conditions.
      </Label>
      <Caption as="p" className="row-start-2 col-start-2">A control that allows the user to toggle between checked and not checked.</Caption>
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
      options: ['primary', 'secondary', 'accent', 'gray', 'neutral'],
      defaultValue: 'primary',
    },
    fancy: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Checkbox: Story = {
  args: {
    intent: 'primary',
    fancy:true
  },
  render : CheckboxUI
};
