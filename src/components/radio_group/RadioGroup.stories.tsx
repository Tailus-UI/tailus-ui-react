import RadioGroup from "./RadioGroup";
import {Meta, StoryObj} from "@storybook/react";

interface RadioGroupProps {
  withShadow?: boolean;
}

const RadioGroupUI = (ars: RadioGroupProps) => (
  <form>
    <RadioGroup.Root className="flex flex-col gap-2.5" defaultValue="problem" aria-label="View density" withShadow={ars.withShadow}>
      <div className="flex items-center">
        <RadioGroup.Item value="understanding" id="rr1">
          <RadioGroup.Indicator/>
        </RadioGroup.Item>
        <RadioGroup.Label htmlFor="rr1">
          Easy to understand
        </RadioGroup.Label>
      </div>
      <div className="flex items-center">
        <RadioGroup.Item value="problem" id="rr2">
          <RadioGroup.Indicator/>
        </RadioGroup.Item>
        <RadioGroup.Label htmlFor="rr2">
          Solved my problem
        </RadioGroup.Label>
      </div>
      <div className="flex items-center">
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
    withShadow: {
      name: 'withShadow',
      description: 'Whether to use the shadow variant',
      type: {name: 'boolean', required: false},
      control: 'boolean'
    },
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Toggle: Story = {
  args: {
    withShadow: false,
  },
};