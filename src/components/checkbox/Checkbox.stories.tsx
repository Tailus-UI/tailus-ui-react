import { CheckIcon } from "@radix-ui/react-icons";
import { CheckboxIndicator, CheckboxRoot } from "./Checkbox";
import { Meta, StoryObj } from "@storybook/react";
import Label from "../label/Label";
import { Caption } from "../typography";
import type { CheckboxProps } from "@tailus/themer";
import { Aligner } from "../form";

const CheckboxUI = (args:CheckboxProps) => {
  return (
    <Aligner className="max-w-md">
      <CheckboxRoot className="size-[1.125rem]" intent={args.intent} id="c1" fancy={args.fancy}>
        <CheckboxIndicator>
          <CheckIcon className="size-5" />
        </CheckboxIndicator>
      </CheckboxRoot>
      <Label htmlFor="c1">
        Accept terms and conditions.
      </Label>
      <Caption as="p" size="base" className="row-start-2 col-start-2">A control that allows the user to toggle between checked and not checked.</Caption>
    </Aligner>
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
