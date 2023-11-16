import {Meta, StoryObj} from "@storybook/react";
import {ToggleIconAfter, ToggleIconBefore, ToggleRoot} from "./Toggle";

type ToggleProps = {
  variant?: 'default' | 'highlight',
  intent?: 'primary' | 'secondary' | 'warning' | 'danger' | 'neutral' | 'accent' | 'success',
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

const ToggleUI = ({variant, intent, size}: ToggleProps) => (
  <ToggleRoot aria-label="Toggle italic" variant={variant} intent={intent} size={size}>
    <ToggleIconBefore>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
           strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
      </svg>
    </ToggleIconBefore>
    <ToggleIconAfter>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
           fill="currentColor">
        <path
          d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"/>
      </svg>
    </ToggleIconAfter>
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
      options: ['default', 'highlight'],
      defaultValue: 'default',
      description: 'The variant of the toggle.'
    },
    intent: {
      control: 'select',
      options: ['primary', 'secondary', 'warning', 'danger', 'neutral', 'accent', 'success'],
      defaultValue: 'accent',
      description: 'The intent of the toggle.'
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      defaultValue: 'md',
      description: 'The size of the toggle.',
    }
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Toggle: Story = {
  args: {
    variant: 'default',
    size: 'md',
    intent: 'accent'
  },
};
