import AlertDialog from "./Component.tsx";
import {button as solidButton, ghostButton, softIconButton} from "@tailus/themer-button";
import {Meta, StoryObj} from "@storybook/react";
import {Button} from "../button/Button.tsx";

interface AlertDialogProps {
  variant: "default" | "centred",
  title: string,
  description: string,
  cancelText: string,
  actionText: string,
  imageSrc: string,
  intent: "info" | "warning" | "danger",
  triggerText: string,
  exampleWithImage: boolean,
}

const AlertDialogUI = (args: AlertDialogProps) => {
  const renderTriggerIcon = (intent: "info" | "warning" | "danger") => {
    switch (intent) {
      case "info":
        return (
          <svg className={softIconButton.icon.md} viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 0C7.478 0 6.94 0.184 6.562 0.563C6.185 0.94 6 1.478 6 2V3H0V5H1V21C1 22.645 2.355 24 4 24H16C17.645 24 19 22.645 19 21V5H20V3H14V2C14 1.478 13.816 0.94 13.437 0.562C13.06 0.186 12.523 0 12 0H8ZM8 2H12V3H8V2ZM3 5H17V21C17 21.555 16.555 22 16 22H4C3.445 22 3 21.555 3 21V5ZM10 8L6 12H9V19H11V12H14L10 8Z"
              fill="currentColor"/>
          </svg>
        );
      case "warning":
        return (
          <svg className={softIconButton.icon.md} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"/>
          </svg>
        );
      case "danger":
        return (
          <svg className={softIconButton.icon.md} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/>
          </svg>
        );
    }
  }

  const renderDefaultImageSrc = (intent: "info" | "warning" | "danger") => {
    switch (intent) {
      case "info":
        return "https://cdn-icons-png.flaticon.com/512/7042/7042615.png";
      case "warning":
        return "https://cdn-icons-png.flaticon.com/512/3071/3071749.png";
      case "danger":
        return "https://cdn-icons-png.flaticon.com/512/6460/6460112.png";
    }
  }

  return (
    <AlertDialog.Root variant={args.variant}>
      <AlertDialog.Trigger asChild>
        <Button variant="soft" colorVariant={args.intent} icon="only">
          {renderTriggerIcon(args.intent)}
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay/>
        <AlertDialog.Content>
          {(args.exampleWithImage && args.imageSrc) && (
            <AlertDialog.ImageContainer intent={args.intent}>
              <AlertDialog.Image src={args.imageSrc && renderDefaultImageSrc(args.intent)} alt=""/>
            </AlertDialog.ImageContainer>
          )}
          <AlertDialog.Title>{args.title}</AlertDialog.Title>
          <AlertDialog.Description>{args.description}</AlertDialog.Description>
          <AlertDialog.Actions>
            <AlertDialog.Cancel asChild>
              <button className={ghostButton.gray.md}>
                <span>{args.cancelText}</span>
              </button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <button className={solidButton[args.intent].md}>
                <span>{args.actionText}</span>
              </button>
            </AlertDialog.Action>
          </AlertDialog.Actions>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}

const meta: Meta<typeof AlertDialogUI> = {
  title: "Alert Dialog",
  component: AlertDialogUI,
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
    variant: {
      control: "radio",
      options: ["default", "centred"],
      description: "The variant of the alert dialog.",
    },
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
    imageSrc: {
      name: "Image source or image url",
      control: "text",
      description: "The image source of the alert dialog. If no image source is provided, there will be no image.",
    },
    intent: {
      control: "radio",
      options: ["info", "warning", "danger"]
    },
    triggerText: {
      control: "text",
      description: "The text of the trigger button. It must be a string."
    },
    exampleWithImage: {
      name: "Example with image",
      control: "boolean",
      description: "If true, the alert dialog will have an image."
    }
  }
}

export default meta;

type Story = StoryObj<typeof meta>;

export const AlertDialog_: Story = {
  name: "AlertDialog",
  args: {
    variant: "default",
    title: "Title of the alert dialog.",
    description: "Description of the alert dialog.",
    cancelText: "Cancel button",
    actionText: "Action button",
    imageSrc: "https://cdn-icons-png.flaticon.com/512/3071/3071749.png",
    intent: "danger",
    triggerText: undefined,
    exampleWithImage: false,
  }
}


type anotherDialogProps = {
    variant: "default" | "centred",
    intent: "info" | "warning" | "danger",

}
const anotherExample = (args: anotherDialogProps) => (
  <AlertDialog.Root variant={args.variant}>
    <AlertDialog.Trigger>
      <Button variant="soft" icon="only" label="sync" colorVariant={args.intent}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
             className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"/>
        </svg>
      </Button>
    </AlertDialog.Trigger>
    <AlertDialog.Portal>
      <AlertDialog.Overlay/>
      <AlertDialog.Content>
        <AlertDialog.Title>
          Syncing
        </AlertDialog.Title>
        <AlertDialog.Description>
          Syncing your data with the server. This may take a while.
        </AlertDialog.Description>
        <AlertDialog.Actions>
          <AlertDialog.Cancel asChild>
            <button className={ghostButton.gray.md}>
              <span>Cancel</span>
            </button>
          </AlertDialog.Cancel>
          <AlertDialog.Action asChild>
            <button className={solidButton[args.intent].md}>
              <span>Sync</span>
            </button>
          </AlertDialog.Action>
        </AlertDialog.Actions>
      </AlertDialog.Content>
    </AlertDialog.Portal>
  </AlertDialog.Root>
)

export const Example: Story = {
    name: "Another Example",
    args: {
        variant: "default",
        intent: "info"
    },
  render: anotherExample,
}