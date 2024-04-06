import EmptyState from "./EmptyState.tsx";
import Button from "../button/Button.tsx";
import {Meta} from "@storybook/react";
import { PlusIcon } from "@radix-ui/react-icons";

const Template1 = () => (
  <EmptyState.Root>
    <EmptyState.ImageContainer>
      <EmptyState.Image src="https://cdn-icons-png.flaticon.com/512/9841/9841563.png" alt="Tailus disconnected user empty state" width={512} height={512} />
    </EmptyState.ImageContainer>
    <EmptyState.Content>
      <EmptyState.Title>You're offline</EmptyState.Title>
      <EmptyState.Description>We've got something for everyone.</EmptyState.Description>
    </EmptyState.Content>
    <Button.Root variant="outlined" intent="gray">
      <Button.Label>Try again</Button.Label>
    </Button.Root>
  </EmptyState.Root>
);

const Template2 = () => (
  <EmptyState.Root>
    <EmptyState.ImageContainer>
      <EmptyState.Image src="https://cdn-icons-png.flaticon.com/512/342/342348.png" alt="Tailus disconnected user empty state" width={512} height={512} />
    </EmptyState.ImageContainer>
    <EmptyState.Content>
      <EmptyState.Title>You don't have any file</EmptyState.Title>
      <EmptyState.Description>We've got something for everyone.</EmptyState.Description>
    </EmptyState.Content>
    <Button.Root variant="outlined" intent="gray">
      <Button.Icon type="leading">
        <PlusIcon />
      </Button.Icon>
      <Button.Label>Add a file</Button.Label>
    </Button.Root>
  </EmptyState.Root>
);

const Template3 = () => (
  <EmptyState.Root>
    <EmptyState.ImageContainer>
      <EmptyState.Image src="https://cdn-icons-png.flaticon.com/512/9841/9841564.png" alt="Tailus disconnected user empty state" width={512} height={512} />
    </EmptyState.ImageContainer>
    <EmptyState.Content>
      <EmptyState.Title>No content found</EmptyState.Title>
      <EmptyState.Description>We've got something for everyone.</EmptyState.Description>
    </EmptyState.Content>
    <Button.Root>
      <Button.Label>Discover</Button.Label>
    </Button.Root>
  </EmptyState.Root>
);

const meta: Meta = {
  title: "EmptyState",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "The empty state component theme is a collection of Tailwindcss utilities that can be used" +
          " to create empty state components with different colors and styles. Empty state components are used " +
          "to inform users that there is currently no data to display.",
      }
    }
  },
  tags: ['autodocs'],
}

export default meta;

export const Example1 = () => <Template1 />;
export const Example2 = () => <Template2 />;
export const Example3 = () => <Template3 />;
