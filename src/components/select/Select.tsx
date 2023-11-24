import React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import {select as theme} from "@tailus/themer-select"
import {softForm as softTheme, outlinedForm as defaultTheme} from "@tailus/themer-form"
import {cloneElement, cn} from "../../lib/utils.ts";
import {CheckIcon} from "@radix-ui/react-icons";

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

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({className, ...props}, forwardedRef) => (
  <SelectPrimitive.Content
    {...props}
    ref={forwardedRef}
    className={cn(theme.content, className)}
  />
));

const SelectViewport = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Viewport>
>(({className, ...props}, forwardedRef) => (
  <SelectPrimitive.Viewport
    {...props}
    ref={forwardedRef}
    className={cn(theme.viewport, className)}
  />
));

const SelectItemIndicator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ItemIndicator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ItemIndicator>
>(({className, ...props}, forwardedRef) => (
  <SelectPrimitive.ItemIndicator
    {...props}
    ref={forwardedRef}
    className={cn(theme.itemIndicator, className)}
  />
));

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({className, children, ...props}, forwardedRef) => (
  <SelectPrimitive.Item
    {...props}
    ref={forwardedRef}
    className={cn(theme.item, className)}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    <SelectItemIndicator>
      <CheckIcon/>
    </SelectItemIndicator>
  </SelectPrimitive.Item>
));

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({className, ...props}, forwardedRef) => (
  <SelectPrimitive.Label
    {...props}
    ref={forwardedRef}
    className={cn(theme.label, className)}
  />
));

const Select = {
  Root: SelectRoot,
  Trigger: SelectTrigger,
  TriggerIcon: SelectTriggerIcon,
  Value: SelectTriggerValue,
  Icon: SelectIcon,
  Portal: SelectPortal,
  Content: SelectContent,
  Viewport: SelectViewport,
  Item: SelectItem,
  Label: SelectLabel,
};

export default Select;
