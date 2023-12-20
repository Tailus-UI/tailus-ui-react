import Avatar from "./Avatar_.tsx";
import type {Meta, StoryObj} from "@storybook/react";

type Intent = "primary" | "secondary" | "accent" | "danger" | "success" | "warning" | "info" | "gray";
type Size = "lg" | "md" | "sm" | "xs";
type Status = "online" | "offline" | "away" | "busy";
type StatusPosition = "top" | "bottom";

type AvatarProps = {
  isSoft: boolean,
  intent: Intent,
  size: Size,
  status: Status,
  statusPosition: StatusPosition,
  initials: string,
  alt: string,
  src: string,
}

const AvatarUI = (args: AvatarProps) => {
  return (
    <Avatar.Root
      isSoft={args.isSoft} intent={args.intent}
      size={args.size} status={args.status}
      statusPosition={args.statusPosition}
    >
      {args.src && <Avatar.Image alt={args.alt} src={args.src}/>}
      <Avatar.Fallback>
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
    isSoft: {
      control: 'boolean',
    },
    intent: {
      control: 'select',
      options: ["primary", "secondary", "accent", "danger", "success", "warning", "info", "gray",]
    },
    size: {
      control: 'select',
      options: ["lg", "md", "sm", "xs"]
    },
    status: {
      control: 'select',
      options: ["online", "offline", "away", "busy"]
    },
    statusPosition: {
      control: {type: 'select'},
      options: ["top", "bottom"]
    },
    src: {
      control: 'text',
    },
    alt: {
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
    isSoft: false,
    intent: "primary",
    size: "md",
    status: "online",
    statusPosition: "top",
    src: "https://images.unsplash.com/photo-1526510747491-58f928ec870f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
    alt: "Meschac irung",
    initials: "MI",
  },
}
