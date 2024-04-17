import * as React from "react"
import { DayPicker } from "react-day-picker"
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"
import { calendar, type CalendarProps as CalendarVariants } from "@tailus/themer"
import { twMerge } from "tailwind-merge"


export type CalendarProps = React.ComponentProps<typeof DayPicker> & CalendarVariants

export const Calendar = ({
    className,
    classNames,
    intent,
    fancy,
    handDrawn,
    showOutsideDays = true,
    ...props
}: CalendarProps) => {

    const range = props.mode ?  props.mode === "range" : false

    const {
        months,
        month,
        caption,
        caption_label,
        nav,
        nav_button,
        nav_button_previous,
        nav_button_next,
        table,
        head_row,
        head_cell,
        row,
        cell,
        day,
        day_range_start,
        day_range_end,
        day_selected,
        day_today,
        day_outside,
        day_disabled,
        day_range_middle,
        day_hidden
    } = calendar({range})
    
    return (
        <DayPicker
            showOutsideDays={showOutsideDays}
            className={twMerge(className)}
            classNames={{
                months: months({range, intent, class:classNames?.months}),
                month: month({range, fancy, class:classNames?.month}),
                caption: caption({class:classNames?.caption}),
                caption_label: caption_label({class:classNames?.caption_label}),
                nav: nav({class:classNames?.nav}),
                nav_button: nav_button({class:classNames?.nav_button}),
                nav_button_previous: nav_button_previous({class:classNames?.nav_button_previous}),
                nav_button_next: nav_button_next({class:classNames?.nav_button_next}),
                table: table({range, class:classNames?.table}),
                head_row: head_row({range, class:classNames?.head_row}),
                head_cell: head_cell({range, class:classNames?.head_cell}),
                row: row({class:classNames?.row, range:range}),
                cell: cell({range, class:classNames?.cell}),
                day: day({intent, range, class:classNames?.day}),
                day_today: day_today({intent, class:classNames?.day_today}),
                day_range_start: day_range_start({class:classNames?.day_range_start}),
                day_range_end:  day_range_end({class:classNames?.day_range_end}),
                day_selected: day_selected({intent, handDrawn, class:classNames?.day_selected}),
                day_outside: day_outside({class:classNames?.day_outside}),
                day_disabled: day_disabled({class:classNames?.day_disabled}),
                day_range_middle: day_range_middle({intent, class:classNames?.day_range_middle}),
                day_hidden: day_hidden({class:classNames?.day_hidden}),
                ...classNames,
            }}
            components={{
                IconLeft: () => <ChevronLeftIcon className="size-5 rtl:rotate-180" />,
                IconRight: () => <ChevronRightIcon className="size-5 rtl:rotate-180" />,
            }}
            {...props}
        />
    )
}
Calendar.displayName = "Calendar"