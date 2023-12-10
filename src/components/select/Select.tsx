import React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import {select as theme} from "@tailus/themer-select"
import {softForm as softTheme, outlinedForm as defaultTheme} from "@tailus/themer-form"
import {cloneElement, cn} from "../../lib/utils.ts";
import {CheckIcon, ChevronDownIcon, ChevronUpIcon} from "@radix-ui/react-icons";

const SelectRoot = SelectPrimitive.Root;

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({className, children, ...props}, forwardedRef) => (
  <SelectPrimitive.ScrollUpButton
    {...props}
    ref={forwardedRef}
    className={cn(theme.scrollButton, className)}
  >
    {children || <ChevronUpIcon/>}
  </SelectPrimitive.ScrollUpButton>
));

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({className, children, ...props}, forwardedRef) => (
  <SelectPrimitive.ScrollDownButton
    {...props}
    ref={forwardedRef}
    className={cn(theme.scrollButton, className)}
  >
    {children || <ChevronDownIcon/>}
  </SelectPrimitive.ScrollDownButton>
));

interface SelectTriggerProps {
  softVariant?: boolean,
  size?: "xs" | "sm" | "md" | "lg" | "xl",
  placeholder?: string,
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
    >
      <SelectPrimitive.Value placeholder={props.placeholder}/>
      <SelectPrimitive.Icon>
        <SelectTriggerIcon>
          {props.children || <ChevronDownIcon/>}
        </SelectTriggerIcon>
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
});

interface SelectIconProps {
  className?: string,
  children: React.ReactNode
}

const SelectTriggerIcon = ({className, children}: SelectIconProps) => {
  return cloneElement(children as React.ReactElement, cn(theme.triggerIcon, className));
};

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

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({className, children, ...props}, forwardedRef) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      {...props}
      ref={forwardedRef}
      className={cn(theme.content, className)}
    >
      <SelectScrollUpButton/>
      <SelectViewport>
        {children}
      </SelectViewport>
      <SelectScrollDownButton/>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
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

interface SelectGroupProps {
  label: string,
}

const SelectGroup = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Group> & SelectGroupProps
>(({children, ...props}, forwardedRef) => (
  <SelectPrimitive.Group
    {...props}
    ref={forwardedRef}
  >
    <SelectLabel>{props.label}</SelectLabel>
    {children}
  </SelectPrimitive.Group>
));

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({className, ...props}, forwardedRef) => (
  <SelectPrimitive.Separator
    {...props}
    ref={forwardedRef}
    className={cn(theme.separator, className)}
  />
));

const Select = {
  Root: SelectRoot,
  Trigger: SelectTrigger,
  Content: SelectContent,
  Item: SelectItem,
  Group: SelectGroup,
  Separator: SelectSeparator,
};

export default Select;

export {
  SelectRoot,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectSeparator,
}