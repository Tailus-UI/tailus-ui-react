import Button from "../button/Button";
import Popover from "../popover/Popover";
import { Calendar, type CalendarProps } from "../calendar/Calendar";
import { useState } from "react";
import { addDays, format } from "date-fns"
import { type DateRange } from "react-day-picker"
import { CalendarIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import { Meta, StoryObj } from "@storybook/react";
import ToggleGroup from "../toggle_group/ToggleGroup";
import Dialog from "../dialog/Dialog";
import SeparatorRoot from "../separator/Separator";
import { twMerge } from "tailwind-merge";
import { Title } from "../typography";
import Select from "../select/Select";
import { SelectItem } from "../select/Select.stories";

const DatePicker = (args:CalendarProps) => {
    const [selected, setSelected] = useState<Date>(new Date());
    return (
        <Popover.Root defaultOpen>
            <Popover.Trigger asChild>
                <Button.Root variant="outlined" intent="gray">
                    <Button.Icon type="leading">
                        <CalendarIcon />
                    </Button.Icon>
                    <Button.Label className="text-sm">
                        {selected ? format(selected, "PPP") : <span>Pick a date</span>}
                    </Button.Label>
                </Button.Root>
            </Popover.Trigger>
            <Popover.Portal>
                <Popover.Content sideOffset={6} fancy className="max-w-fit">
                    <Calendar
                        initialFocus
                        mode="single"
                        defaultMonth={selected}
                        selected={selected}
                        onSelect={setSelected}
                        intent={args.intent}
                        fancy
                    />
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    );
};

const Range = (args:CalendarProps) => {
     const [date, setDate] = useState<DateRange | undefined>({
        from: new Date(2024, 0, 20),
        to: addDays(new Date(2024, 0, 20), 20),
    })
    return (
        <Popover.Root defaultOpen>
            <Popover.Trigger asChild>
                <Button.Root variant="outlined" intent="gray">
                    <Button.Icon type="leading">
                        <CalendarIcon />
                    </Button.Icon>
                    <Button.Label className="text-sm">
                        {date?.from ? (
                            date.to ? (
                                <>
                                {format(date.from, "LLL dd, y")} -{" "}
                                {format(date.to, "LLL dd, y")}
                                </>
                            ) : (
                                format(date.from, "LLL dd, y")
                            )
                            ) : (
                            <span>Select a date</span>
                        )}
                    </Button.Label>
                </Button.Root>
            </Popover.Trigger>
            <Popover.Portal>
                <Popover.Content sideOffset={6} fancy>
                    <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={date?.from}
                        selected={date}
                        onSelect={setDate}
                        numberOfMonths={args.numberOfMonths}
                        intent={args.intent}
                        fancy
                    />
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    );
};

const Custom = (args:CalendarProps) => {
    const today = new Date();
    const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());

    const [date, setDate] = useState<DateRange | undefined>({
        from: lastMonth,
        to: today,
    })

    const handleValueChange = (value: string) => {
        const today = new Date();
        let from, to;
        switch (value) {
            case 'today':
                from = to = today;
                break;
            case 'yesterday':
                from = to = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);
                break;
            case 'last-week':
                from = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
                to = today;
                break;
            case 'last-month':
                from = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
                to = today;
                break;
            case 'last-3-months':
                from = new Date(today.getFullYear(), today.getMonth() - 3, today.getDate());
                to = today;
                break;
            case 'last-12-months':
                from = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());
                to = today;
                break;
            case 'month-to-date':
                from = new Date(today.getFullYear(), today.getMonth(), 1);
                to = today;
                break;
            case 'life-time':
                from = new Date(today.getFullYear() - 2, today.getMonth(), today.getDate());
                to = today;
                break;
            default:
                break;
        }
        setDate({ from, to });
    }
    return (
        <Popover.Root defaultOpen>
            <Popover.Trigger asChild>
                <Button.Root variant="outlined" intent="gray">
                    <Button.Icon type="leading">
                        <CalendarIcon />
                    </Button.Icon>
                    <Button.Label className="text-sm">
                        {date?.from ? (
                            date.to ? (
                                <>
                                {format(date.from, "LLL dd, y")} -{" "}
                                {format(date.to, "LLL dd, y")}
                                </>
                            ) : (
                                format(date.from, "LLL dd, y")
                            )
                            ) : (
                            <span>Select a date</span>
                        )}
                    </Button.Label>
                </Button.Root>
            </Popover.Trigger>
            <Popover.Portal>
                <Popover.Content sideOffset={6} fancy className="flex gap-[calc(var(--feedback-padding)*2)] max-w-fit">
                    <ToggleGroup.Root
                        className="grid gap-0 relative before:absolute before:-inset-y-[--feedback-padding] before:-right-[--feedback-padding] before:w-0.5 before:border-r before:bg-gray-white dark:before:bg-gray-950 dark:before:border-gray-800 before:mx-auto"
                        type="single"
                        onValueChange={handleValueChange}
                        defaultValue="last-month"
                    >
                        <ToggleGroup.Item withLabel className="w-full justify-start" value="today">Today</ToggleGroup.Item>
                        <ToggleGroup.Item withLabel className="w-full justify-start" value="yesterday">Yesterday</ToggleGroup.Item>
                        <ToggleGroup.Item withLabel className="w-full justify-start" value="last-week">Last Week</ToggleGroup.Item>
                        <ToggleGroup.Item withLabel className="w-full justify-start" value="last-month">Last Month</ToggleGroup.Item>
                        <ToggleGroup.Item withLabel className="w-full justify-start" value="last-3-months">Last 3 Months</ToggleGroup.Item>
                        <ToggleGroup.Item withLabel className="w-full justify-start" value="last-12-months">Last 12 Months</ToggleGroup.Item>
                        <ToggleGroup.Item withLabel className="w-full justify-start" value="month-to-date">Month to date</ToggleGroup.Item>
                        <ToggleGroup.Item withLabel className="w-full justify-start" value="life-time">Life time</ToggleGroup.Item>
                    </ToggleGroup.Root>
                    <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={date?.from}
                        selected={date}
                        onSelect={setDate}
                        numberOfMonths={args.numberOfMonths}
                        intent={args.intent}
                        fancy
                    />
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    );
};

const Inputs = (args:CalendarProps) => {
    const today = new Date();
    const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());

    const [date, setDate] = useState<DateRange | undefined>({
        from: lastMonth,
        to: today,
    })

    const handleValueChange = (value: string) => {
        const today = new Date();
        let from, to;
        switch (value) {
            case 'today':
                from = to = today;
                break;
            case 'yesterday':
                from = to = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);
                break;
            case 'last-week':
                from = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
                to = today;
                break;
            case 'last-month':
                from = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
                to = today;
                break;
            case 'last-3-months':
                from = new Date(today.getFullYear(), today.getMonth() - 3, today.getDate());
                to = today;
                break;
            case 'last-12-months':
                from = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());
                to = today;
                break;
            case 'month-to-date':
                from = new Date(today.getFullYear(), today.getMonth(), 1);
                to = today;
                break;
            case 'life-time':
                from = new Date(today.getFullYear() - 2, today.getMonth(), today.getDate());
                to = today;
                break;
            default:
                break;
        }
        setDate({ from, to });
    }

    return (
        <Dialog.Root defaultOpen>
            <Dialog.Trigger asChild>
                <Button.Root variant="outlined" intent="gray">
                    <Button.Icon type="leading">
                        <CalendarIcon />
                    </Button.Icon>
                    <Button.Label className="text-sm">
                        {date?.from ? (
                            date.to ? (
                                <>
                                {format(date.from, "LLL dd, y")} -{" "}
                                {format(date.to, "LLL dd, y")}
                                </>
                            ) : (
                                format(date.from, "LLL dd, y")
                            )
                            ) : (
                            <span>Select a date</span>
                        )}
                    </Button.Label>
                </Button.Root>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Content fancy className="w-fit">
                    <div className="flex gap-[--feedback-padding]">
                        <ToggleGroup.Root
                            className="hidden -ml-5 pr-1 gap-0 sm:flex flex-col relative before:absolute before:bottom-0 before:-top-[--feedback-padding] before:right-0 before:w-0.5 before:border-r before:bg-gray-white dark:before:bg-gray-950 dark:before:border-gray-800 before:mx-auto"
                            type="single"
                            onValueChange={handleValueChange}
                            defaultValue="last-month"
                            intent="neutral"
                        >
                            <ToggleGroup.Item withLabel className="w-full justify-start text-nowrap" value="today">Today</ToggleGroup.Item>
                            <ToggleGroup.Item withLabel className="w-full justify-start text-nowrap" value="yesterday">Yesterday</ToggleGroup.Item>
                            <ToggleGroup.Item withLabel className="w-full justify-start text-nowrap" value="last-week">Last Week</ToggleGroup.Item>
                            <ToggleGroup.Item withLabel className="w-full justify-start text-nowrap" value="last-month">Last Month</ToggleGroup.Item>
                            <ToggleGroup.Item withLabel className="w-full justify-start text-nowrap" value="last-3-months">Last 3 Months</ToggleGroup.Item>
                            <ToggleGroup.Item withLabel className="w-full justify-start text-nowrap" value="last-12-months">Last 12 Months</ToggleGroup.Item>
                            <ToggleGroup.Item withLabel className="w-full justify-start text-nowrap" value="month-to-date">Month to date</ToggleGroup.Item>
                            <ToggleGroup.Item withLabel className="w-full justify-start text-nowrap" value="life-time">Life time</ToggleGroup.Item>
                        </ToggleGroup.Root>
                        <div>
                            <div className="mb-[--feedback-padding]">
                                <div className="grid gap-3">
                                    <Title as="h2" size="lg" weight="medium">
                                        Pick a date
                                    </Title>
                                    <div className="sm:hidden">
                                        <Select.Root
                                            defaultValue="last-month"
                                            onValueChange={handleValueChange}
                                            aria-label="Quick range" 
                                        >
                                            <Select.Trigger variant="mixed" size="md">
                                                <Select.Value placeholder="pick a range"/>
                                                <ChevronDownIcon className="size-5 text-gray-600 dark:text-gray-400" />
                                            </Select.Trigger>
                                            <Select.Portal>
                                                <Select.Content position="popper" variant="solid" intent="primary">
                                                    <Select.Viewport>
                                                        <SelectItem value="today">Today</SelectItem>
                                                        <SelectItem value="yesterday">Yesterday</SelectItem>
                                                        <SelectItem value="last-week">Last Week</SelectItem>
                                                        <SelectItem value="last-month">Last Month</SelectItem>
                                                        <SelectItem value="last-3-months">Last 3 Months</SelectItem>
                                                        <SelectItem value="last-12-months">Last 12 Months</SelectItem>
                                                        <SelectItem value="month-to-date">Month to date</SelectItem>
                                                        <SelectItem value="life-time">Life time</SelectItem>
                                                    </Select.Viewport>
                                                </Select.Content>
                                            </Select.Portal>
                                        </Select.Root>
                                    </div>
                                    <form className="hidden sm:flex flex-wrap sm:flex-nowrap gap-1 items-center">
                                        <div className="relative w-full">
                                            <label htmlFor="from" className="block pointer-events-none text-sm my-auto h-fit absolute inset-y-0 pl-3 text-gray-400 dark:text-gray-600">From </label>
                                            <input
                                                id="from"
                                                type="text"
                                                defaultValue={format(date.from, "yyyy-MM-dd")}
                                                className={twMerge("pl-14 shadow-none text-sm dark:bg-transparent dark:border-[--ui-border-color]")}
                                            />
                                        </div>
                                        <SeparatorRoot variant="simple" orientation="horizontal" className="hidden sm:block !w-2" />
                                        <div className="relative w-full">
                                        <label htmlFor="to" className="block pointer-events-none text-sm my-auto h-fit absolute inset-y-0 pl-3 text-gray-400 dark:text-gray-600">To </label>
                                        <input
                                            id="to"
                                            type="text"
                                            defaultValue={format(date.to, "yyyy-MM-dd")}
                                            className={twMerge("pl-9 shadow-none text-sm dark:bg-transparent dark:border-[--ui-border-color]")}
                                        />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="-mx-[--feedback-padding] mt-[--feedback-padding]">
                                <SeparatorRoot variant="simple" orientation="horizontal" />
                            </div>
                            <div className="overflow-auto -mx-[--feedback-padding] p-[--feedback-padding] h-72 sm:h-auto sm:overflow-clip">
                                <Calendar
                                    initialFocus
                                    mode="range"
                                    defaultMonth={date?.from}
                                    selected={date}
                                    onSelect={setDate}
                                    intent={args.intent}
                                    numberOfMonths={2}
                                    fancy
                                />
                            </div>
                        </div>
                    </div>
                    <div className="-mx-[--feedback-padding]">
                        <SeparatorRoot variant="simple" orientation="horizontal" />
                    </div>
                    <Dialog.Actions className="flex justify-end gap-0 p-[calc(var(--feedback-padding)-0.5rem)] mt-0 -mb-[--feedback-padding] -mx-[--feedback-padding]">
                        <Dialog.Close asChild>
                            <Button.Root variant="ghost" intent={args.intent === "neutral" ? "gray" : args.intent} size="sm">
                                <Button.Label>Cancel</Button.Label>
                            </Button.Root>
                        </Dialog.Close>

                        <Dialog.Close asChild>
                            <Button.Root variant="ghost" intent={args.intent === "neutral" ? "gray" : args.intent} size="sm">
                                <Button.Label>Apply</Button.Label>
                            </Button.Root>
                        </Dialog.Close>
                    </Dialog.Actions>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

const meta: Meta<typeof DatePicker> = {
  title: 'Date Picker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: "A customizable calendar component for React applications.",
      },
    },
  },
  tags: ['autodocs'],
    argTypes: {
        intent: {
            control: "select",
            options : ["primary", "secondary", "accent", "neutral"]
        },
        numberOfMonths: {
            control: "number"
        }
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Simple: Story = {
    name: 'Basic example',
    args: {
        intent: "primary",
    },
    render: DatePicker
}

export const Selection: Story = {
    name: 'Date Range Picker',
    args: {
        numberOfMonths : 2,
        intent: "primary",
    },
    render: Range
}

export const Presets: Story = {
    name: 'Date Picker with presets',
    args: {
        numberOfMonths : 2,
        intent: "primary",
    },
    render: Custom
}

export const PresetsInputs: Story = {
    name: 'Date Picker with presets and inputs',
    args: {
        intent: "primary",
    },
    render: Inputs
} 