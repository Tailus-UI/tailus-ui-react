import Accordion from "./Accordion.tsx";
import { type Accordion as AccordionVariant } from "@tailus/themer";
import {Meta, StoryObj} from "@storybook/react";

interface AccordionUIProps {
  variant: AccordionVariant,
  withIcon?: boolean,
}

const AccordionUI = (args: AccordionUIProps) => {
  const contentClassNames = args.withIcon ? "pl-9" : "";
  return (
    <Accordion.Root
      variant={args.variant}
      className="w-full min-w-[20rem] max-w-[20rem]"
      type="single" defaultValue="item-1"
      collapsible
    >
      <Accordion.Item value="item-1">
        <Accordion.Trigger>
          {args.withIcon && (
            <img
              className="size-6"
              src="https://cdn-icons-png.flaticon.com/512/1904/1904883.png" loading="lazy"
              alt="tailus accordion" height={512} width={512}
            />
          )}
          Is it accessible?
        </Accordion.Trigger>
        <Accordion.Content className={contentClassNames}>
          Yes. It adheres to the WAI-ARIA design pattern.
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <Accordion.Trigger>
          {args.withIcon && (
            <img
              className="size-6"
              src="https://cdn-icons-png.flaticon.com/512/1904/1904901.png"
              loading="lazy"
              alt="tailus accordion" height={512} width={512}
            />
          )}
          Is it unstyled?
        </Accordion.Trigger>
        <Accordion.Content className={contentClassNames}>
          Yes. It's unstyled by default, giving you freedom over the look and feel.
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-3">
        <Accordion.Trigger>
          {args.withIcon && (
            <img
              className="size-6"
              src="https://cdn-icons-png.flaticon.com/512/1904/1904867.png"
              loading="lazy"
              alt="tailus accordion" height={512} width={512}
            />
          )}
          Can it be animated?
        </Accordion.Trigger>
        <Accordion.Content className={contentClassNames}>
          Yes! You can animate the Accordion with CSS or JavaScript.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  )
}

const meta: Meta<typeof AccordionUI> = {
  title: 'Accordion',
  component: AccordionUI,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'The accordion component theme is a collection of Tailwindcss utilities that can be used to ' +
          'create accordion components with different styles, and variants. Accordion components are used to ' +
          'display a list of content sections that can be expanded and collapsed individually.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      name: 'Variant',
      description: 'The variant of the accordion component.',
      defaultValue: 'default',
      control: 'select',
      options: ['default', 'outlined', 'elevated', 'ghost', 'soft', 'mixed'],
    },
    withIcon: {
      name: 'Example with icon',
      description: 'Whether to show an icon next to the accordion trigger.',
      defaultValue: false,
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  name: 'Accordion',
  args: {
    variant:"default",
    withIcon: false,
  },
}