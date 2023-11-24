import React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import {select as theme} from "@tailus/themer-select"
import {softForm as softTheme, outlinedForm as defaultTheme} from "@tailus/themer-form"
import {cloneElement, cn} from "../../lib/utils.ts";

const SelectRoot = SelectPrimitive.Root;

interface SelectTriggerProps {
  softVariant?: boolean,
  size?: "xs" | "sm" | "md" | "lg" | "xl",
}

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> & SelectTriggerProps
>((
  {
    softVariant = false,
    size = "md",
    className,
    ...props
  }, forwardedRef
) => {
  const theme = softVariant ? softTheme : defaultTheme;
  return (
    <SelectPrimitive.Trigger
      {...props}
      ref={forwardedRef}
      className={cn(theme.input[size], "flex items-center justify-between gap-4", className)}
    />
  )
});

interface SelectIconProps {
  className?: string,
  children: React.ReactNode
}

const SelectTriggerIcon = ({className, children}: SelectIconProps) => {
  return cloneElement(children as React.ReactElement, cn(theme.triggerIcon, className));
};

const SelectTriggerValue = SelectPrimitive.Value;
const SelectIcon = SelectPrimitive.Icon;
const SelectPortal = SelectPrimitive.Portal;

const Select = {
  Root: SelectRoot,
  Trigger: SelectTrigger,
  TriggerIcon: SelectTriggerIcon,
  Value: SelectTriggerValue,
  Icon: SelectIcon,
  Portal: SelectPortal,
}

export default Select;
