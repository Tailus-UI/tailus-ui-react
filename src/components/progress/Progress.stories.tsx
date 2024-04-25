import React from "react";
import Progress from "./Progress";
import { type RootProps, type IndicatorProps as IndicatorVariants } from "@tailus/themer";
import { Meta, StoryObj } from "@storybook/react";

interface ArgsType extends RootProps, IndicatorVariants {
  value: number
}

const ProgressUI = (args:ArgsType) => {
  const [progress, setProgress] = React.useState(args.value);

  React.useEffect(() => {
    setProgress(args.value);
  }, [args.value]);

  return (
    <Progress.Root
      className={"w-72"}
      variant={args.variant}
      size={args.size}
      value={progress}
    >
      <Progress.Indicator
        intent={args.intent}
        indeterminate={args.indeterminate}
        complete={args.complete}
        loading={args.loading}
        withStripes={args.withStripes}
        withHighlight={args.withHighlight}
        innerShadow={args.innerShadow}
        style={{transform: `translateX(-${100 - progress}%)`}}
      />
    </Progress.Root>
  );
};


const meta: Meta<typeof ProgressUI> = {
  title: 'Progress',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'The progress component theme is a collection of Tailwindcss utilities that can be used' +
          ' to create progress components with a single variant. Progress components are used to indicate' +
          ' the progress of a task or operation.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'range',
      min: 0,
      max: 100,
      step: 1,
      defaultValue: 0,
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    variant: {
      control: 'select',
      options: ['soft', 'outlined', 'mixed', "fancy"],
    },
    intent: {
      control: 'select',
      options: ['primary', 'gradient', 'secondary', 'accent', 'danger', 'success', 'warning', 'info', 'gray', 'neutral'],
    },
    complete: {
      control: 'select',
      options: ['primary', 'gradient', 'secondary', 'accent', 'danger', 'success', 'warning', 'info', 'gray', 'neutral'],
    },
    loading: {
      control: 'select',
      options: ['primary', 'gradient', 'secondary', 'accent', 'danger', 'success', 'warning', 'info', 'gray', 'neutral'],
    },
    indeterminate: {
      control: 'select',
      options: ['primary', 'gradient', 'secondary', 'accent', 'danger', 'success', 'warning', 'info', 'gray', 'neutral'],
    },
    withStripes: {
      control: 'boolean',
    },
    withHighlight: {
      control: 'boolean',
    },
    innerShadow: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Progress1: Story = {
  render: (args) => <ProgressUI {...args} />,
  args: {
    value: 0,
    size: 'md',
    variant: 'soft',
    intent: 'primary',
    complete: 'success',
    loading: 'gray',
    indeterminate: 'accent',
  }
}