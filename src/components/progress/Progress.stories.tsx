import React from "react";
import Progress from "./Progress";
import {Meta, StoryObj} from "@storybook/react";
import {ClockIcon} from "@radix-ui/react-icons";

interface ComponentProps {
  value: number;
}

const ProgressUI = ({...args}: ComponentProps) => {
  const [progress, setProgress] = React.useState(args.value);

  React.useEffect(() => {
    setProgress(args.value);
  }, [args.value]);

  return (
    <Progress.Root
      className={"w-64"}
      value={progress}
    >
      <Progress.Indicator
        style={{transform: `translateX(-${100 - progress}%)`}}
      />
    </Progress.Root>
  );
};

const GradientProgress = ({...args}: ComponentProps) => {
  const [progress, setProgress] = React.useState(args.value);
  const maxTime = 60; // max time in minutes
  const maxFiles = 124; // max number of files

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(args.value), 100);
    return () => clearTimeout(timer);
  }, [args.value]);

  // Calculate remaining time and uploaded files based on progress
  const remainingTime = maxTime - Math.round((progress * maxTime) / 100);
  const uploadedFiles = Math.round((progress * maxFiles) / 100);

  return (
    <div>
      <Progress.Header>
        <Progress.Label>{progress}% Completed</Progress.Label>
        <Progress.Timer>
          <ClockIcon />
          <span>{remainingTime}min</span>
        </Progress.Timer>
      </Progress.Header>
      <Progress.Root className={"w-64"} value={progress}>
        <Progress.Indicator
          intent={"gradient"}
          className={"from-primary-600 to-secondary-400"}
          style={{ transform: `translateX(-${100 - progress}%)` }}
        />
      </Progress.Root>
      <Progress.Message>{uploadedFiles} files of {maxFiles} files uploaded</Progress.Message>
    </div>
  );
};

const ProgressExample2= ({...args}: ComponentProps) => {
  const [progress, setProgress] = React.useState(args.value);
  const totalStorage = 15; // total storage in GB

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(args.value), 100);
    return () => clearTimeout(timer);
  }, [args.value]);

  // Calculate used storage based on progress
  const usedStorage = (progress * totalStorage) / 100;

  return (
    <div>
      <Progress.Header>
        <Progress.Label>{progress}% of storage used</Progress.Label>
      </Progress.Header>
      <Progress.Root className={"w-64"} value={progress}>
        <Progress.Indicator
          intent={"danger"}
          style={{ transform: `translateX(-${100 - progress}%)` }}
        />
      </Progress.Root>
      <Progress.Message>{usedStorage.toFixed(2)} GB of {totalStorage} GB used</Progress.Message>
    </div>
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
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Progress1: Story = {
  render: (args) => <ProgressUI {...args} />,
  args: {
    value: 0,
  }
}

export const Progress2: Story = {
  render: (args) => <GradientProgress {...args} />,
  args: {
    value: 0,
  }
}

export const Progress3: Story = {
  render: (args) => <ProgressExample2 {...args} />,
  args: {
    value: 0,
  }
}