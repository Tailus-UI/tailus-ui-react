import React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import {select as theme} from "@tailus/themer-select"
import {cn} from "../../lib/utils.ts";

const SelectRoot = SelectPrimitive.Root;

const SelectTrigger = React.forwardRef<
    React.ElementRef<typeof SelectPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({className, ...props}, forwardedRef) => {
    const triggerTheme = "inline-flex items-center justify-between h-10 gap-2 min-w-[10rem]" +
      " w-auto rounded-[--field-border-radius] border border-gray-200 bg-transparent px-4 ring-0 transition" +
      " duration-300 focus:border-gray-600 focus:outline-none focus:ring-[3px] focus:ring-primary-600/10" +
      " focus:ring-offset-white dark:border-gray-800 dark:text-white dark:focus:border-white/60" +
      " dark:focus:ring-primary-900/50 dark:focus:ring-offset-gray-900";

    return (
      <SelectPrimitive.Trigger
        {...props}
        ref={forwardedRef}
        className={cn(triggerTheme, className)}
        aria-label="Food"
      />
    )
});

const Select = {
    Root: SelectRoot,
    Trigger: SelectTrigger,
}

export default Select;