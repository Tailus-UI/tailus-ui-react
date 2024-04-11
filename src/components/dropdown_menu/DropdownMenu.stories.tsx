import DropdownMenu from "./DropdownMenu.tsx";
import {Meta, StoryObj} from "@storybook/react";
import {
  ArchiveIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  DownloadIcon,
  FileIcon,
  Pencil1Icon,
  TrashIcon
} from "@radix-ui/react-icons";
import Button from "../button/Button.tsx";
import { type MenuProps } from "@tailus/themer"

const DropdownMenuUI = (args:MenuProps) => {

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button.Root variant="outlined" intent="gray">
          <Button.Label>Dropdown</Button.Label>
          <Button.Icon type="trailing">
            <ChevronDownIcon />
          </Button.Icon>
        </Button.Root>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content sideOffset={5} variant={args.variant} mixed={args.mixed} fancy={args.fancy} intent={args.intent}>
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
          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger>
              <DownloadIcon/>
              Download
              <DropdownMenu.RightIcon>
                <ChevronRightIcon/>
              </DropdownMenu.RightIcon>
            </DropdownMenu.SubTrigger>
            <DropdownMenu.Portal>
              <DropdownMenu.SubContent sideOffset={2} alignOffset={-5}>
                <DropdownMenu.Item>Logomark </DropdownMenu.Item>
                <DropdownMenu.Item>Logotype </DropdownMenu.Item>
                <DropdownMenu.Separator/>
                <DropdownMenu.Item>All </DropdownMenu.Item>
              </DropdownMenu.SubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>
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
      defaultValue: "solid",
      options: ["solid", "soft"],
    },
    intent: {
      name: "Intent",
      control: "select",
      description: "The intent of the dropdown menu content.",
      defaultValue: "primary",
      options: ["primary", "warning", "danger", "gray", "neutral"],
    },
    mixed: {
      name: "Mixed",
      control: "boolean",
      description: "The mix of the border and shadow of the dropdown menu content.",
      defaultValue: false,
    },
    fancy: {
      name: "Fancy",
      control: "boolean",
      description: "The fancy style of the dropdown menu content border.",
      defaultValue: true,
    },
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Template: Story = {
  args: {
    variant: "solid",
    intent: "primary",
    mixed: false,
    fancy: true,
  }
}
