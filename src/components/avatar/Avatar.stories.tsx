import Avatar from "./Avatar";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Avatar> = {
  title: 'Avatar',
  component: Avatar,
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
        fallback: {
            control: { type: 'radio' },
            options: ['solid', 'soft']
        },
        color: {
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
            control: { type: 'select' },
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

export const Solid: Story = {
    args: {
        fallback: 'solid',
        color: 'primary',
        size: 'md',
        src: 'https://images.unsplash.com/photo-1526510747491-58f928ec870f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80',
        alt: 'Meschac irung',
        initials: 'MI',
    },
};

export const Soft: Story = {
    args: {
        fallback: 'soft',
        color: 'primary',
        size: 'md',
        src: 'https://images.unsplash.com/photo-1628050901856-7b2f7a6f8e0d?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
        alt: 'Meschac irung',
        initials: 'MI',
    },
};