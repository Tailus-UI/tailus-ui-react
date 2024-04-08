import Avatar from "./Avatar.tsx";
import type { AvatarFallbackProps, AvatarRootProps } from "@tailus/themer";
import type { Meta, StoryObj } from "@storybook/react";

type AvatarProps = {
  fallbackVariant?: AvatarFallbackProps["variant"],
  intent?: AvatarFallbackProps["intent"],
  size?: AvatarRootProps["size"],
  status?: AvatarRootProps["status"],
  topStatus?: AvatarRootProps["topStatus"],
  bottomStatus?: AvatarRootProps["bottomStatus"],
  initials?: string,
  src?: string,
  image? : boolean
}

const AvatarUI = (args: AvatarProps) => {
  return (
    <Avatar.Root
      size={args.size}
      status={args.status}
      topStatus={args.topStatus}
      bottomStatus={args.bottomStatus}
    >
      {args.image && <Avatar.Image alt="user avatar" src="https://pbs.twimg.com/profile_images/1767582956082561024/TLJvxR_V_400x400.jpg" />}
      <Avatar.Fallback
        variant={args.fallbackVariant}
        intent={args.intent}
      >
        {args.initials}
      </Avatar.Fallback>
    </Avatar.Root>
  );
}

const meta: Meta<typeof AvatarUI> = {
  title: 'Avatar',
  component: AvatarUI,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'An image element with a fallback for representing the user.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    intent: {
      control: 'select',
      options: ["primary", "secondary", "accent", "danger", "success", "warning", "info", "gray",]
    },
    fallbackVariant: {
      control: 'select',
      options: ["soft", "solid"]
    },
    image: {
      control: 'boolean',
      defaultValue: false
    },
    topStatus: {
      control: 'boolean',
      defaultValue: false
    },
    bottomStatus: {
      control: 'boolean',
      defaultValue: false
    },
    size: {
      control: 'select',
      options: ["3xl", "2xl", "xl", "lg", "md", "sm", "xs", "xxs"]
    },
    status: {
      control: 'select',
      options: ["online", "offline", "away", "busy"]
    },
    src: {
      control: 'text',
    },
    initials: {
      control: 'text',
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Avatar_: Story = {
  name: "Avatar",
  args: {
    intent: "primary",
    size: "md",
    status: "online",
    src: "https://images.unsplash.com/photo-1526510747491-58f928ec870f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
    initials: "MI",
    image : false
  },
}
