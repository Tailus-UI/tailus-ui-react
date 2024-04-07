import AlertDialog from "./AlertDialog.tsx";
import {Meta, StoryObj} from "@storybook/react";
import Button from "../button/Button.tsx";
import { ArchiveIcon, TrashIcon } from "@radix-ui/react-icons";
import { twMerge } from "tailwind-merge";

interface AlertDialogProps {
  title: string,
  description: string,
  cancelText: string,
  actionText: string,
  intent: "warning" | "danger",
  triggerText: string,
  exampleWithImage: boolean,
}

const Separator = ({orientation="vertical", className}:{orientation?:"vertical" | "horizontal", className?:string}) => (
  <div aria-hidden data-orientation={orientation} className={twMerge("data-[orientation=vertical]:w-0.5 data-[orientation=vertical]:h-full data-[orientation=vertical]:border-l data-[orientation=horizontal]:w-full data-[orientation=horizontal]:h-0.5 data-[orientation=horizontal]:border-b data-[orientation=horizontal]:bg-transparent bg-[--feedback-border-color] data-[orientation=vertical]:border-white dark:data-[orientation=horizontal]:bg-gray-950 dark:data-[orientation=horizontal]:border-[--ui-dark-border-color] dark:data-[orientation=vertical]:bg-[--ui-dark-border-color] dark:data-[orientation=vertical]:border-gray-950", className)} />
)

const Example1 = (args: AlertDialogProps) => {
  const renderTriggerIcon = (intent: "warning" | "danger") => {
    switch (intent) {
      case "warning":
        return (
          <ArchiveIcon />
        );
      case "danger":
        return (
          <TrashIcon />
        );
    }
  }

  return (
    <AlertDialog.Root defaultOpen>
      <AlertDialog.Trigger asChild>
        <Button.Root variant="solid" intent={args.intent}>
          <Button.Icon type="only">
            {renderTriggerIcon(args.intent)}
          </Button.Icon>
        </Button.Root>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay />
        <AlertDialog.Content className="w-fit">
          <AlertDialog.Title>{args.title} ?</AlertDialog.Title>
          <AlertDialog.Description>{args.description}</AlertDialog.Description>
          <AlertDialog.Actions>
            <AlertDialog.Cancel asChild>
              <Button.Root
                variant="outlined"
                intent="gray"
                size="sm"
              >
                <Button.Label>{args.cancelText}</Button.Label>
              </Button.Root>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <Button.Root
                variant="solid"
                intent={args.intent}
                size="sm"
              >
                <Button.Label>{args.actionText}</Button.Label>
              </Button.Root>
            </AlertDialog.Action>
          </AlertDialog.Actions>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}
const Example2 = (args: AlertDialogProps) => {
  const renderTriggerIcon = (intent: "warning" | "danger") => {
    switch (intent) {
      case "warning":
        return (
          <ArchiveIcon />
        );
      case "danger":
        return (
          <TrashIcon />
        );
    }
  }

  return (
    <AlertDialog.Root defaultOpen>
      <AlertDialog.Trigger asChild>
        <Button.Root variant="solid" intent={args.intent}>
          <Button.Icon type="only">
            {renderTriggerIcon(args.intent)}
          </Button.Icon>
        </Button.Root>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay />
        <AlertDialog.Content className="w-fit text-center">
          <AlertDialog.Title>{args.title} ?</AlertDialog.Title>
          <AlertDialog.Description>{args.description}</AlertDialog.Description>
          <AlertDialog.Actions className="justify-center">
            <AlertDialog.Cancel asChild>
              <Button.Root
                variant="outlined"
                intent="gray"
                size="sm"
              >
                <Button.Label>{args.cancelText}</Button.Label>
              </Button.Root>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <Button.Root
                variant="solid"
                intent={args.intent}
                size="sm"
              >
                <Button.Label>{args.actionText}</Button.Label>
              </Button.Root>
            </AlertDialog.Action>
          </AlertDialog.Actions>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}
const IOSExample = (args: AlertDialogProps) => {
  const renderTriggerIcon = (intent: "warning" | "danger") => {
    switch (intent) {
      case "warning":
        return (
          <ArchiveIcon />
        );
      case "danger":
        return (
          <TrashIcon />
        );
    }
  }

  return (
    <AlertDialog.Root defaultOpen>
      <AlertDialog.Trigger asChild>
        <Button.Root variant="solid" intent={args.intent}>
          <Button.Icon type="only">
            {renderTriggerIcon(args.intent)}
          </Button.Icon>
        </Button.Root>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay/>
        <AlertDialog.Content className="overflow-hidden p-0 block max-w-[20rem] w-full">
          <div className="p-[--feedback-padding] text-center">
            <AlertDialog.Title>{args.title} ?</AlertDialog.Title>
            <AlertDialog.Description>{args.description}</AlertDialog.Description>
          </div>
          <div>
            <Separator orientation="horizontal" />
            <AlertDialog.Actions className="mt-0 overflow-hidden gap-0 h-full">
              <AlertDialog.Cancel asChild>
                <Button.Root
                  className="rounded-none w-1/2"
                  variant="ghost"
                  intent="gray"
                  size="lg"
                >
                  <Button.Label>{args.cancelText}</Button.Label>
                </Button.Root>
              </AlertDialog.Cancel>
              <Separator className="!h-10" />
              <AlertDialog.Action asChild>
                <Button.Root
                  className="rounded-none w-1/2"
                  variant="ghost"
                  intent={args.intent}
                  size="lg"
                >
                  <Button.Label>{args.actionText}</Button.Label>
                </Button.Root>
              </AlertDialog.Action>
            </AlertDialog.Actions>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}
const FigmaExample = (args: AlertDialogProps) => {
  const renderTriggerIcon = (intent: "warning" | "danger") => {
    switch (intent) {
      case "warning":
        return (
          <ArchiveIcon />
        );
      case "danger":
        return (
          <TrashIcon />
        );
    }
  }

  return (
    <AlertDialog.Root defaultOpen>
      <AlertDialog.Trigger asChild>
        <Button.Root variant="solid" intent={args.intent}>
          <Button.Icon type="only">
            {renderTriggerIcon(args.intent)}
          </Button.Icon>
        </Button.Root>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay/>
        <AlertDialog.Content className="overflow-hidden p-0 flex max-w-fit w-full">
          <div className="p-[--feedback-padding]">
            <AlertDialog.Title>{args.title} ?</AlertDialog.Title>
            <AlertDialog.Description>{args.description}</AlertDialog.Description>
          </div>
          <div className="w-fit flex">
            <Separator />
            <AlertDialog.Actions className="mt-0 overflow-hidden block h-full w-full">
              <AlertDialog.Cancel asChild>
                <Button.Root
                  className="rounded-none h-1/2 w-full"
                  variant="ghost"
                  intent="gray"
                  size="sm"
                >
                  <Button.Label>{args.cancelText}</Button.Label>
                </Button.Root>
              </AlertDialog.Cancel>
              <Separator orientation="horizontal" />
              <AlertDialog.Action asChild>
                <Button.Root
                  className="rounded-none h-1/2 w-full"
                  variant="ghost"
                  intent={args.intent}
                  size="sm"
                >
                  <Button.Label>{args.actionText}</Button.Label>
                </Button.Root>
              </AlertDialog.Action>
            </AlertDialog.Actions>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}

const meta: Meta<typeof Example1> = {
  title: "Alert Dialog",
  component: Example1,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "The alert dialog theme is a collection of Tailwindcss utilities that can be used to create " +
          "alert dialogs with different variants and colors. The default variant is alertDialog, but there is also " +
          "a centered variant called centeredAlertDialog. Both variants share the same properties, which can be" +
          " customized to meet your needs.",
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: "text",
      description: "The title of the alert dialog.",
    },
    description: {
      control: "text",
      description: "The description of the alert dialog.",
    },
    cancelText: {
      control: "text",
      description: "The text of the cancel button.",
    },
    actionText: {
      control: "text",
      description: "The text of the action button.",
    },
    intent: {
      control: "radio",
      options: ["warning", "danger"]
    },
    triggerText: {
      control: "text",
      description: "The text of the trigger button. It must be a string."
    },
  }
}

export default meta;

type Story = StoryObj<typeof meta>;

export const AlertDialog_: Story = {
  name: "AlertDialog",
  args: {
    title: "Delete Item",
    description: "This photo will be deleted from your iCloud Photos.",
    cancelText: "Cancel",
    actionText: "Action",
    intent: "danger",
    triggerText: undefined,
  }
}

export const Alert1: Story = {
  name: "Basic Example",
  args: {
    title: "Delete Item",
    description: "This photo will be deleted from your iCloud Photos.",
    intent: "danger",
    cancelText: "Cancel",
    actionText: "Delete",
  },
  render: Example1,
}

export const Alert2: Story = {
  ...Alert1,
  name: "Centred Example",
  render: Example2,
}

export const IOSAlert: Story = {
  ...Alert1,
  name: "iOS Example",
  render: IOSExample,
}

export const FigmaAlert: Story = {
  ...Alert1,
  name: "Figma Example",
  render: FigmaExample,
}