import {Meta} from "@storybook/react";
import DialogUI from "./Example";

const Template = () => {
  return (
    <DialogUI.Example1/>
  );
};

const meta: Meta<typeof Template> = {
  title: "Dialog",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "The dialog component theme is a collection of Tailwindcss utilities that can be used to " +
          "create dialogs with a single variant. Dialogs are modal windows that appear in front of app content " +
          "to provide critical information or ask for a decision.",
      }
    }
  },
  tags: ['autodocs'],
}

export default meta;

export const Example1 = () => <DialogUI.Example1/>;
export const Example2 = () => <DialogUI.Example2/>;
export const Example3 = () => <DialogUI.Example3/>;