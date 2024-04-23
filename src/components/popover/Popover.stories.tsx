import {Cross2Icon, InfoCircledIcon} from "@radix-ui/react-icons";
import {
  PopoverArrow,
  PopoverClose,
  PopoverContent,
  PopoverPortal,
  PopoverRoot,
  PopoverTrigger
} from "./Popover.tsx";
import { type PopoverProps } from "@tailus/themer";
import React from "react";
import {Meta, StoryObj} from "@storybook/react";
import { Title } from "../typography/Title.tsx";
import { Text } from "../typography/Text.tsx";
import Button from "../button/Button.tsx";

interface PopoverUIProps extends React.ComponentPropsWithoutRef<typeof PopoverContent>,PopoverProps {
  withArrow?: boolean;
  arrowWidth?: number;
  arrowHeight?: number;
}

const PopoverUI = ({...props}: PopoverUIProps) => (
  <PopoverRoot>
    <PopoverTrigger asChild>
      <Button.Root aria-label="">
        <Button.Icon>
          <InfoCircledIcon />
        </Button.Icon>
      </Button.Root>
    </PopoverTrigger>
    <PopoverPortal>
      <PopoverContent
        className="max-w-xs"
        sideOffset={props.sideOffset}
        align={props.align}
        side={props.side}
        fancy={props.fancy}
        mixed={props.mixed}
      >
        <Title as="h3" size="base">Title</Title>
        <Text className="mt-2">
          Inventore perspiciatis atque consequatur? Autem reiciendis nemo error, rerum tempora.
        </Text>
        <PopoverClose asChild>
          <Button.Root>
            <Button.Icon>
              <Cross2Icon />
            </Button.Icon>
          </Button.Root>
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
    fancy: {
      control: 'boolean',
      defaultValue: true,
      description: 'Whether to use the fancy variant.',
    },
    mixed: {
      control: 'boolean',
      defaultValue: false,
      description: 'Whether to use the mixed variant.',
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
