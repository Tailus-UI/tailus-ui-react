import {Meta, StoryObj} from "@storybook/react";
import * as React from "react";
import Toast from "./Toast";
import Button from "../button/Button.tsx";
import { type ToastProps } from "@tailus/themer";

// Custom hooks for managing state and effects
const useToastState = () => {
  const [open, setOpen] = React.useState(false);
  const eventDateRef = React.useRef(new Date());
  const timerRef = React.useRef(0);

  React.useEffect(() => {
    const timer = timerRef.current;

    return () => clearTimeout(timer);
  }, []);

  return {open, setOpen, eventDateRef, timerRef};
};

const ToastUI = (args:ToastProps) => {
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
      <Button.Root size={"lg"} onClick={handleOpen}>
        <Button.Label>Schedule Catch up</Button.Label>
      </Button.Root>
      <Toast.Root open={open} onOpenChange={setOpen} fancy={args.fancy} mixed={args.mixed} withAction={args.withAction}>
        <Toast.Title>Scheduled: Catch up</Toast.Title>
        {
            args.withAction &&
            <Toast.Action asChild altText="Undo">
              <Button.Root className="-my-1 -mr-1" variant="soft" size={"xs"} onClick={() => setOpen(false)}>
                <Button.Label>Undo</Button.Label>
              </Button.Root>
            </Toast.Action>
          }
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
const meta: Meta<ToastProps> = {
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
  argTypes: {
    fancy: { control: 'boolean', defaultValue: true },
    mixed: { control: 'boolean', defaultValue: false },
    withAction: { control: 'boolean', defaultValue: false },
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  name: 'Toast',
  render: ToastUI,
};