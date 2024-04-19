import RadioGroup from "./RadioGroup";
import { Meta, StoryObj } from "@storybook/react";
import Label from "../label/Label";
import { Caption } from "../typography";
import { Aligner } from "../form";

interface RadioGroupProps {
  fancy?: boolean;
  intent? : 'primary' | 'gray' | 'neutral';
}

const RadioGroupUI = (args: RadioGroupProps) => (
  <form>
    <RadioGroup.Root className="space-y-6 max-w-md" defaultValue="problem" aria-label="View density" intent={args.intent} fancy={args.fancy}>
      <Aligner>
        <RadioGroup.Item value="easy" id="easy">
          <RadioGroup.Indicator/>
        </RadioGroup.Item>
        <Label htmlFor="easy">
          Easy understanding
        </Label>
        <Caption as="p" size="base" className="row-start-2 col-start-2">Buttons—where no buttons can be checked at a time.</Caption>
      </Aligner>
      <Aligner>
        <RadioGroup.Item value="problem" id="problem">
          <RadioGroup.Indicator/>
        </RadioGroup.Item>
        <Label htmlFor="problem">
          Solved my problem
        </Label>
        <Caption as="p" size="base" className="row-start-2 col-start-2">A set of checkable buttons—known as buttons—where.</Caption>
      </Aligner>
      <Aligner className="max-w-md grid items-center gap-x-3 gap-y-1 [grid-template-columns:auto_1fr]">
        <RadioGroup.Item value="other" id="other">
          <RadioGroup.Indicator/>
        </RadioGroup.Item>
        <Label htmlFor="other">
          Other
        </Label>
        <Caption as="p" size="base" className="row-start-2 col-start-2">A set more than one can be checked at a time.</Caption>
      </Aligner>
    </RadioGroup.Root>
  </form>
);

const meta: Meta<typeof RadioGroupUI> = {
  title: 'RadioGroup',
  component: RadioGroupUI,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'The radio group component theme is a collection of Tailwind CSS utilities that can be' +
          ' used to create radio groups with different variants. Radio groups are used to allow users' +
          ' to select a single option from a list.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    fancy: {
      name: 'fancy',
      description: 'Whether to use the shadow variant',
      type: {
        name: 'boolean', required: false
      },
      control: 'boolean'
    },
    intent: {
      name: 'intent',
      description: 'The intent of the radio group',
      type: {
        name: 'string', required: false
      },
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'gray', 'neutral'],
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Toggle: Story = {
  name:'Radio Group',
  args: {
    fancy: false,
    intent: 'primary',
  },
};