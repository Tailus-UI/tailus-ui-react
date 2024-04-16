import Button from "../button/Button.tsx";
import {Meta} from "@storybook/react";
import { PlusIcon } from "@radix-ui/react-icons";
import { Title, Text } from "./../typography"
import { ChatIllustration, ContentIllustration } from "./Illustrations.tsx";

const meta: Meta = {
  title: "Empty State",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "An empty state in UI, also known as a blank state, is basically a screen you encounter when there's no data to display." 
      }
    }
  },
  tags: ['autodocs'],
}

export default meta;

export const Example1 = () => (
  <div className="max-w-md mx-auto space-y-6">
    <ContentIllustration />
    <div className="space-y-3">
      <Title align="center">You don't seem to have any file</Title>
      <Text align="center" className="max-w-lg mx-auto">
        An empty state in UI, also known as a blank state, is basically a screen you encounter when there's no data to display.
      </Text>
    </div>
    <Button.Root className="mx-auto" variant="outlined" intent="gray">
      <Button.Icon type="leading">
        <PlusIcon />
      </Button.Icon>
      <Button.Label>Add a file</Button.Label>
    </Button.Root>
  </div>
);
export const Example2 = () => (
  <div className="max-w-md mx-auto space-y-6">
    <ChatIllustration />
    <div className="space-y-3">
      <Title align="center">Add friends to start a discussion</Title>
      <Text align="center">
        An empty state in UI, also known as a blank state, is basically a screen you encounter when there's no data to display.
      </Text>
    </div>
    <Button.Root className="mx-auto">
      <Button.Label>Browse friends</Button.Label>
    </Button.Root>
  </div>
);
