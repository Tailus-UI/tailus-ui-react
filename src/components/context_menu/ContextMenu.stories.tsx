import {ArchiveIcon, ChevronRightIcon, TrashIcon} from "@radix-ui/react-icons";
import ContextMenu from "./ContextMenu.tsx"
import { Meta, StoryObj } from "@storybook/react";
import { type MenuProps } from "@tailus/themer";

const ContextMenuUI = (args: MenuProps) => {
  return (
    <ContextMenu.Root>
      <div className="-mt-12">
        <span className="text-gray-700 dark:text-gray-300">Right click the logo.</span>
        <ContextMenu.Trigger className="mt-12 mx-auto w-fit rounded-[--menu-radius] px-4 py-2 transition duration-300 hover:bg-gray-100 dark:hover:bg-white/5">
            <img className="w-16 h-16 mx-auto" src="/tls/x512.png" alt=""/>
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">tailus-logo.png</span>
        </ContextMenu.Trigger>
      </div>

      <ContextMenu.Portal>
        <ContextMenu.Content mixed={args.mixed} fancy={args.fancy} variant={args.variant} intent={args.intent}>
          <ContextMenu.Item>
            Scale <ContextMenu.Command>⌘S</ContextMenu.Command>
          </ContextMenu.Item>
          <ContextMenu.Item>
            Set to Primary <ContextMenu.Command>⌘P</ContextMenu.Command>
          </ContextMenu.Item>
          <ContextMenu.Separator/>
          <ContextMenu.Item>Copy </ContextMenu.Item>
          <ContextMenu.Item>Share... </ContextMenu.Item>
          <ContextMenu.Separator/>
          <ContextMenu.Sub>
            <ContextMenu.SubTrigger>
              Download
              <ContextMenu.Icon className="ml-auto">
                <ChevronRightIcon/>
              </ContextMenu.Icon>
            </ContextMenu.SubTrigger>
            <ContextMenu.Portal>
              <ContextMenu.SubContent className="min-w-fit" sideOffset={2} alignOffset={-5}>
                <ContextMenu.Item>Logomark </ContextMenu.Item>
                <ContextMenu.Item>Logotype </ContextMenu.Item>
                <ContextMenu.Separator/>
                <ContextMenu.Item>All </ContextMenu.Item>
              </ContextMenu.SubContent>
            </ContextMenu.Portal>
          </ContextMenu.Sub>
          <ContextMenu.Separator/>
          <ContextMenu.Item disabled intent={"warning"}>
            <ContextMenu.Icon>
              <ArchiveIcon />
              </ContextMenu.Icon>
              Archive
            <ContextMenu.Command>⌘A</ContextMenu.Command>
          </ContextMenu.Item>
          <ContextMenu.Item intent={"danger"}>
            <ContextMenu.Icon>
              <TrashIcon />
            </ContextMenu.Icon>
            Delete <ContextMenu.Command>⌘D</ContextMenu.Command>
          </ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu.Portal>
    </ContextMenu.Root>
  );
};

const meta: Meta<typeof ContextMenuUI> = {
  title: 'ContextMenu',
  component: ContextMenuUI,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: "The context menu component theme is a collection of Tailwind utilities that can be used to" +
          " create context menus with different variants and colors. The default variant is solid, but there is" +
          " also a soft variant. Each variant has a number of properties that can be customized, including the" +
          " shadow, border colors, background opacity, backdrop blur, radius, and separator colors."
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      name: 'Variant',
      control: 'radio',
      description: 'The variant of the context menu content.',
      defaultValue: 'solid',
      options: ['solid', 'soft'],
    },
    intent: {
      name: 'radio',
      control: 'select',
      description: 'The intent of the context menu content.',
      defaultValue: 'primary',
      options: ['primary', 'danger', 'gray', 'warning', 'neutral'],
    },
    mixed: {
      name: 'Mixed Content',
      control: 'boolean',
      description: 'Whether the context menu content variant contains a border and boxshadow.',
      defaultValue: false,
    },
    fancy: {
      name: 'Fancy Border',
      control: 'boolean',
      description: 'Whether the context menu content variant contains a fancy border.',
      defaultValue: false,
    },
  }
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Template: Story = {
  args: {
    variant: "solid",
    intent: "primary",
    mixed: false,
    fancy: true,
  },
}