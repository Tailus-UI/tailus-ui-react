import {Meta, StoryObj} from "@storybook/react";
import Flag from "./Flag.tsx";

const ExampleWithMessage = (withMessage: boolean) => {
  return (
    <Flag.Root
      aria-label="Error flag"
      aria-describedby="error-flag-description-2"
      role="alert"
      withMessage={withMessage}
    >
      <Flag.IconContainer>
        <Flag.Icon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"/>
          </svg>
        </Flag.Icon>
      </Flag.IconContainer>
      {withMessage && (
        <Flag.Content>
          <Flag.Title>New update available</Flag.Title>
          <Flag.Message id="error-flag-description-2">
            Radix UI support, Modern UI, Customization...
          </Flag.Message>
          <Flag.Actions>
            <Flag.Link href="#">
              Learn more
            </Flag.Link>
            <Flag.Link href="#">
              Upgrade now
            </Flag.Link>
          </Flag.Actions>
        </Flag.Content>
      )}
      <Flag.CloseButton label="Dismiss alert">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"/>
        </svg>
      </Flag.CloseButton>
    </Flag.Root>
  )
}

const meta: Meta = {
  title: "Flag",
  component: ExampleWithMessage,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "The @tailus/themer-flag package provides a theme for the flag component. The flag " +
          "component is a versatile component that can be used to display alerts, notifications, and " +
          "other types of messages.",
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    withMessage: {
      name: 'With message',
      control: 'boolean',
      description: 'Whether the flag should have a message or not.',
      defaultValue: false,
    },
  },
}

export default meta;

type Story = StoryObj<typeof meta>;

export const FlagUI: Story = {
  name: "Flag",
  args: {
    withMessage: false,
  },
};