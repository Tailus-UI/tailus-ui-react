import * as React from "react";
import * as Toast from "@radix-ui/react-toast";
import { toast as theme } from "@tailus/themer-toast";
import { ghostButton, ghostIconButton, button } from "@tailus/themer-button";
import {Cross2Icon} from "@radix-ui/react-icons";

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

            <Toast.Root className={theme.root} open={open} onOpenChange={setOpen}>
                <div className={theme.header}>
                    <Toast.Title className={theme.title}>Scheduled: Catch up</Toast.Title>
                    <div className={theme.actions}>
                        <Toast.Action asChild altText="Goto schedule to undo">
                            <button className={ghostButton.primary.sm}>
                                <span>Undo</span>
                            </button>
                        </Toast.Action>
                        <Toast.Close>
                            <button className={ghostIconButton.gray.sm}>
                                <span className="sr-only">Dismiss toast</span>
                                <Cross2Icon className={ghostIconButton.icon.md} aria-hidden />
                            </button>
                        </Toast.Close>
                    </div>
                </div>
                <Toast.Description asChild>
                    <time className={theme.description} dateTime={eventDateRef.current.toISOString()}>
                        {prettyDate(eventDateRef.current)}
                    </time>
                </Toast.Description>
            </Toast.Root>
            <Toast.Viewport className={theme.viewport} />
        </Toast.Provider>
    );
};

function oneWeekAway(date) {
    const now = new Date();
    const inOneWeek = now.setDate(now.getDate() + 7);
    return new Date(inOneWeek);
}

function prettyDate(date) {
    return new Intl.DateTimeFormat("en-US", { dateStyle: "full", timeStyle: "short" }).format(date);
}

export default ToastUI;
