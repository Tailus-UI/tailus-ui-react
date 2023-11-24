import {Meta, StoryObj} from "@storybook/react";
import * as React from "react";
import {Cross2Icon} from "@radix-ui/react-icons";
import Toast from "./Toast";
import {Button} from "../button/Button.tsx";

// Custom hooks for managing state and effects
const useToastState = () => {
  const [open, setOpen] = React.useState(false);
  const eventDateRef = React.useRef(new Date());
  const timerRef = React.useRef(0);

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return {open, setOpen, eventDateRef, timerRef};
};

const ToastUI = () => {
  const {open, setOpen, eventDateRef, timerRef} = useToastState();

  const handleOpen = () => {
    setOpen(false);
    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      eventDateRef.current = oneWeekAway();
      setOpen(true);
    }, 100);
  }

  return (
    <Toast.Provider>
      <Button label={"Add to calendar"} size={"lg"} onClick={handleOpen} />
      <Toast.Root open={open} onOpenChange={setOpen}>
        <Toast.Header>
          <Toast.Title>Scheduled: Catch up</Toast.Title>
          <Toast.Actions>
            <Toast.Action asChild altText="Goto schedule to undo">
              <Button label="Undo" variant={"ghost"} colorVariant={"primary"} size={"sm"}/>
            </Toast.Action>
            <Toast.Close>
              <Button label="Dismiss toast" icon={"only"} variant={"ghost"} colorVariant={"gray"} size={"sm"}>
                <Cross2Icon aria-hidden/>
              </Button>
            </Toast.Close>
          </Toast.Actions>
        </Toast.Header>
        <Toast.Description asChild>
          <time dateTime={eventDateRef.current.toISOString()}>
            {prettyDate(eventDateRef.current)}
          </time>
        </Toast.Description>
      </Toast.Root>
      <Toast.Viewport/>
    </Toast.Provider>
  );
};

// Constants for date manipulation and formatting
const WEEK_IN_DAYS = 7;
const DATE_OPTIONS: Intl.DateTimeFormatOptions = {dateStyle: "full", timeStyle: "short"};

const oneWeekAway = () => {
  const now = new Date();
  const inOneWeek = now.setDate(now.getDate() + WEEK_IN_DAYS);
  return new Date(inOneWeek);
};

const prettyDate = (date: Date) => {
  return new Intl.DateTimeFormat("en-US", DATE_OPTIONS).format(date);
};

// Metadata for the story
const meta: Meta<typeof ToastUI> = {
  title: 'Toast',
  component: ToastUI,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'The toast component theme is a collection of Tailwindcss utilities that can be used ' +
          'to create toasts with a single variant. Toasts are small, unobtrusive notifications that appear' +
          ' on the screen to inform users of an event or to provide feedback.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  name: 'Toast',
};