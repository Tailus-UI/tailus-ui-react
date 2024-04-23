import type { Meta, StoryObj } from '@storybook/react';
import Button from "./Button";
import type { ButtonIconProps, ButtonProps } from '@tailus/themer';
import { PlusIcon } from '@radix-ui/react-icons';

const UIButton = ({
  variant,
  intent,
  disabled,
  label,
  href,
  size,
  iconSize,
  iconType,
  icon,
} : {
  variant: ButtonProps["variant"],
  intent?: ButtonProps["intent"],
  size? : ButtonProps["size"],
  disabled?: boolean,
  label: string,
  href?: string,
  className?: string,
  icon?: boolean,
  iconSize?: ButtonIconProps["size"],
  iconType?: 'leading' | 'trailing' | 'only',
}) => (
  <Button.Root href={href} variant={variant} size={size} intent={intent} disabled={disabled}>
    {
      icon && (iconType == "leading" || iconType == "only") && (
        <Button.Icon size={iconSize} type={iconType}>
          <PlusIcon />
        </Button.Icon>
      )
    }
    {
      iconType !== "only" && (
        <Button.Label>{label}</Button.Label>
      )
    }
    {
      icon && iconType == "trailing" && (
        <Button.Icon size={iconSize} type={iconType}>
          <PlusIcon />
        </Button.Icon>
      )
    }
  </Button.Root>
);

const meta:Meta<typeof UIButton> = {
  title: 'Button',
  component: UIButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customizable button component for React applications.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { 
      description: "The variant of the button.",
      defaultValue: 'solid',
      control: 'select', 
      options: ['solid', 'soft', 'outlined', 'ghost'] 
    },
    intent: { 
      description: "The color of the button.",
      defaultValue: 'primary',
      control: 'select', 
      options: ["primary", "danger", "warning", "gray", "neutral"] 
    },
    size: { 
      description: "The size of the button.",
      defaultValue: 'md',
        control: 'select', 
        options: ["xs", "sm", "md", "lg", "xl"] 
    },
    iconSize: { 
      description: "The size of the icon.",
      defaultValue: 'md',
        control: 'select', 
        options: ["xs", "sm", "md", "lg", "xl"] 
    },
    iconType: { 
      description: "The position of the icon.",
      defaultValue: 'leading',
      control: 'select', 
      options: ["leading", "trailing", "only"] 
    },
    disabled: {
      description: "The disabled state of the button.",
      defaultValue: false,
        control: 'boolean'
    },
    icon: {
        control: 'boolean'
    },
    label: { control: 'text' },
    href: { control: 'text' },
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    variant: 'solid',
    intent: 'primary',
    size: "md",
    label: "Generate",
  },
};

export const Soft: Story = {
  args: {
    variant: 'soft',
    intent: 'primary',
    size: "md",
    label: "Copy",
  },
};

export const Oulined: Story = {
    args: {
      variant: 'outlined',
      intent: "primary",
      size: "md",
      label: "Learn more",
    },
  };

  export const Ghost: Story = {
    args: {
      variant: 'ghost',
      intent: "primary",
      size: "md",
      label: "Learn more",
    },
  };
