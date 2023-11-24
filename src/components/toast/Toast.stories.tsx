import {Meta, StoryObj} from "@storybook/react";
import * as React from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import {toast as theme} from "@tailus/themer-toast";
import {ghostButton, ghostIconButton, button} from "@tailus/themer-button";
import {Cross2Icon} from "@radix-ui/react-icons";
import Toast from "./Toast";

const ToastUI = () => {
  const [open, setOpen] = React.useState(false);
  const eventDateRef = React.useRef(new Date());
  const timerRef = React.useRef(0);

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <Toast.Provider swipeDirection="center">
      <button
        className={button.primary.lg}
        onClick={() => {
          setOpen(false);
          window.clearTimeout(timerRef.current);
          timerRef.current = window.setTimeout(() => {
            eventDateRef.current = oneWeekAway();
            setOpen(true);
          }, 100);
        }}
      >
        <span>Add to calendar</span>
      </button>

      <Toast.Root open={open} onOpenChange={setOpen}>
        <Toast.Header>
          <ToastPrimitive.Title className={theme.title}>Scheduled: Catch up</ToastPrimitive.Title>
          <div className={theme.actions}>
            <ToastPrimitive.Action asChild altText="Goto schedule to undo">
              <button className={ghostButton.primary.sm}>
                <span>Undo</span>
              </button>
            </ToastPrimitive.Action>
            <ToastPrimitive.Close>
              <button className={ghostIconButton.gray.sm}>
                <span className="sr-only">Dismiss toast</span>
                <Cross2Icon className={ghostIconButton.icon.md} aria-hidden/>
              </button>
            </ToastPrimitive.Close>
          </div>
        </Toast.Header>
        <ToastPrimitive.Description asChild>
          <time className={theme.description} dateTime={eventDateRef.current.toISOString()}>
            {prettyDate(eventDateRef.current)}
          </time>
        </ToastPrimitive.Description>
      </Toast.Root>
      <ToastPrimitive.Viewport className={theme.viewport}/>
    </Toast.Provider>
  );
};

function oneWeekAway() {
  const now = new Date();
  const inOneWeek = now.setDate(now.getDate() + 7);
  return new Date(inOneWeek);
}

function prettyDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {dateStyle: "full", timeStyle: "short"}).format(date);
}

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
