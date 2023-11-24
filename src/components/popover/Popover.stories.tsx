import {ghostIconButton, softIconButton} from "@tailus/themer-button";
import {Cross2Icon, InfoCircledIcon} from "@radix-ui/react-icons";
import {
  PopoverArrow,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverPortal,
  PopoverRoot,
  PopoverTitle,
  PopoverTrigger
} from "./Popover.tsx";
import React from "react";
import {Meta, StoryObj} from "@storybook/react";

interface PopoverUIProps extends React.ComponentPropsWithoutRef<typeof PopoverContent> {
  withArrow?: boolean;
  arrowWidth?: number;
  arrowHeight?: number;
}

const PopoverUI = ({...props}: PopoverUIProps) => (
  <PopoverRoot>
    <PopoverTrigger>
      <button className={softIconButton.gray.md}>
        <span className="sr-only">Learn more</span>
        <InfoCircledIcon className={softIconButton.icon.md}/>
      </button>
    </PopoverTrigger>
    <PopoverPortal>
      <PopoverContent sideOffset={props.sideOffset} align={props.align} side={props.side}>
        <PopoverTitle>Title</PopoverTitle>
        <PopoverDescription>
          Inventore perspiciatis atque consequatur? Autem reiciendis nemo error, rerum tempora.
        </PopoverDescription>
        <PopoverClose asChild>
          <button className={ghostIconButton.gray.md + " !absolute top-1 right-1"}>
            <span className="sr-only">Dismiss dialog</span>
            <Cross2Icon className={ghostIconButton.icon.md} aria-hidden/>
          </button>
        </PopoverClose>
        {props.withArrow && <PopoverArrow height={props.arrowHeight} width={props.arrowWidth}/>}
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
);

const meta: Meta<typeof PopoverUI> = {
  title: 'Popover',
  component: PopoverUI,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'The popover component theme is a collection of Tailwindcss utilities that can be used to create' +
          ' popover components with a single variant. Popover components are modal windows that appear in front of ' +
          'app content to provide critical information or ask for a decision.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    sideOffset: {
      name: 'Content side offset',
      control: 'number',
      description: 'The offset of the popover content from the trigger.',
      defaultValue: 10,
    },
    align: {
      name: 'Content align',
      control: 'select',
      description: 'The alignment of the popover content relative to the trigger.',
      defaultValue: 'start',
      options: ['start', 'center', 'end'],
    },
    withArrow: {
      control: 'boolean',
      defaultValue: false,
      description: 'Whether to show the popover arrow.',
    },
    side: {
      name: 'Content side',
      control: 'select',
      description: 'The side of the popover content that the arrow is positioned on.',
      defaultValue: 'top',
      options: ['top', 'right', 'bottom', 'left'],
    },
    arrowWidth: {
      name: 'Arrow width',
      control: 'number',
      description: 'The width of the popover arrow.',
      defaultValue: 10,
    },
    arrowHeight: {
      name: 'Arrow height',
      control: 'number',
      description: 'The height of the popover arrow.',
      defaultValue: 5,
    },
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Popover: Story = {
  args: {
    align: 'center',
    sideOffset: 10,
    withArrow: true,
    side: 'bottom',
    arrowWidth: 10,
    arrowHeight: 5,
  },
};
