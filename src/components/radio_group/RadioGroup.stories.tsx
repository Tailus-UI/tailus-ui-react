import RadioGroup from "./RadioGroup";
import {Meta, StoryObj} from "@storybook/react";

interface RadioGroupProps {
  fancy?: boolean;
  intent? : 'primary' | 'gray' | 'neutral';
}

const RadioGroupUI = (args: RadioGroupProps) => (
  <form>
    <RadioGroup.Root className="space-y-3" defaultValue="problem" aria-label="View density" intent={args.intent} fancy={args.fancy}>
      <div className="flex gap-3 items-center">
        <RadioGroup.Item value="understanding" id="rr1">
          <RadioGroup.Indicator/>
        </RadioGroup.Item>
        <RadioGroup.Label htmlFor="rr1">
          Easy to understand
        </RadioGroup.Label>
      </div>
      <div className="flex gap-3 items-center">
        <RadioGroup.Item value="problem" id="rr2">
          <RadioGroup.Indicator/>
        </RadioGroup.Item>
        <RadioGroup.Label htmlFor="rr2">
          Solved my problem
        </RadioGroup.Label>
      </div>
      <div className="flex gap-3 items-center">
        <RadioGroup.Item value="other" id="rr3">
          <RadioGroup.Indicator/>
        </RadioGroup.Item>
        <RadioGroup.Label htmlFor="rr3">
          Other
        </RadioGroup.Label>
      </div>
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
      name: 'fnacy',
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
      options: ['primary', 'gray', 'neutral'],
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Toggle: Story = {
  args: {
    fancy: false,
    intent: 'primary',
  },
};