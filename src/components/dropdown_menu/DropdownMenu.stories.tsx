import DropdownMenu, {Intent, Variant} from "./DropdownMenu.tsx";
import {Meta, StoryObj} from "@storybook/react";
import {
  ArchiveIcon,
  ChevronRightIcon,
  DotsVerticalIcon,
  DownloadIcon,
  FileIcon,
  Pencil1Icon,
  TrashIcon
} from "@radix-ui/react-icons";
//import {Button} from "../button/Button.tsx";
import {ghostIconButton as buttonTheme} from "@tailus/themer-button";

type DropdownMenuUIProps = {
  variant?: Variant,
  intent?: Intent,
  exampleWithSubmenu?: boolean,
  subTriggerIntent?: Intent,
  subTriggerVariant?: Variant,
  subContentIntent?: Intent,
  subContentVariant?: Variant,
}

const DropdownMenuUI = (args: DropdownMenuUIProps) => {
  const subTriggerIntent = args.subTriggerIntent || args.intent;
  const subTriggerVariant = args.subTriggerVariant || args.variant;
  const subContentIntent = args.subContentIntent || args.intent;
  const subContentVariant = args.subContentVariant || args.variant;

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className={buttonTheme.gray.md}>
          <span className="sr-only">Dismiss dialog</span>
          <DotsVerticalIcon className={buttonTheme.icon.md}/>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content sideOffset={5} variant={args.variant} intent={args.intent}>
          <DropdownMenu.Item>
            <DropdownMenu.Icon>
              <Pencil1Icon/>
            </DropdownMenu.Icon>
            Edit
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <DropdownMenu.Icon>
              <FileIcon/>
            </DropdownMenu.Icon>
            Duplicate
          </DropdownMenu.Item>
          <DropdownMenu.Separator/>
          {args.exampleWithSubmenu && (
            <DropdownMenu.Sub>
              <DropdownMenu.SubTrigger variant={subTriggerVariant} intent={subTriggerIntent}>
                <DownloadIcon/>
                Download
                <DropdownMenu.RightIcon>
                  <ChevronRightIcon/>
                </DropdownMenu.RightIcon>
              </DropdownMenu.SubTrigger>
              <DropdownMenu.Portal>
                <DropdownMenu.SubContent
                  sideOffset={4} alignOffset={-5} variant={subContentVariant}
                  intent={subContentIntent}
                >
                  <DropdownMenu.Item>Logomark </DropdownMenu.Item>
                  <DropdownMenu.Item>Logotype </DropdownMenu.Item>
                  <DropdownMenu.Separator/>
                  <DropdownMenu.Item>All </DropdownMenu.Item>
                </DropdownMenu.SubContent>
              </DropdownMenu.Portal>
            </DropdownMenu.Sub>
          )}
          <DropdownMenu.Item disabled>
            <DropdownMenu.Icon>
              <ArchiveIcon/>
            </DropdownMenu.Icon>
            Archive
          </DropdownMenu.Item>
          <DropdownMenu.Item intent={"danger"}>
            <DropdownMenu.Icon>
              <TrashIcon/>
            </DropdownMenu.Icon>
            Delete
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

const meta: Meta<typeof DropdownMenuUI> = {
  title: "DropdownMenu",
  component: DropdownMenuUI,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "The dropdown menu component theme is a collection of Tailwind utilities that can be " +
          "used to create dropdown menus with different variants and colors. The default variant is " +
          "solid, but there is also a soft variant. Each variant has a number of properties that can " +
          "be customized, including the shadow, border colors, background opacity, backdrop blur, " +
          "radius, and separator colors."
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      name: "Variant",
      control: "radio",
      description: "The variant of the dropdown menu content.",
      defaultValue: "default",
      options: ["default", "soft"],
    },
    intent: {
      name: "Intent",
      control: "select",
      description: "The intent of the dropdown menu content.",
      defaultValue: "primary",
      options: ["primary", "warning", "danger", "gray", "neutral"],
    },
    exampleWithSubmenu: {
      name: "Example with submenu",
      control: "boolean",
      description: "An example of a dropdown menu with a submenu.",
      defaultValue: false,
    },
    subTriggerVariant: {
      name: "Submenu trigger variant",
      control: "select",
      description: "The variant of the submenu trigger.",
      defaultValue: "default",
      options: ["default", "soft"],
    },
    subTriggerIntent: {
      name: "Submenu trigger intent",
      control: "select",
      description: "The intent of the submenu trigger.",
      defaultValue: "primary",
      options: ["primary", "warning", "danger", "gray", "neutral"],
    },
    subContentVariant: {
      name: "Submenu content variant",
      control: "select",
      description: "The variant of the submenu content.",
      defaultValue: "default",
      options: ["default", "soft"],
    },
    subContentIntent: {
      name: "Submenu content intent",
      control: "select",
      description: "The intent of the submenu content.",
      defaultValue: "primary",
      options: ["primary", "warning", "danger", "gray", "neutral"],
    },
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Template: Story = {
  args: {
    variant: "default",
    intent: "primary",
    exampleWithSubmenu: false,
  }
}
