import React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { cloneElement } from "../../lib/utils.ts";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import {
  caption,
  select,
  trigger,
  type SelectProps,
  type TriggerProps,
  type SeparatorProps
} from "@tailus/themer"
import { twMerge } from "tailwind-merge";

interface SelectIconProps {
  className?: string,
  children: React.ReactNode,
  size?: TriggerProps["size"]
}

const SelectContext = React.createContext<SelectProps>({});
const { button, separator, itemIndicator, label } = select.soft()

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({className, children, ...props}, forwardedRef) => (
  <SelectPrimitive.ScrollUpButton
    {...props}
    ref={forwardedRef}
    className={button({className})}
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
    className={button({className})}
  >
    {children || <ChevronDownIcon/>}
  </SelectPrimitive.ScrollDownButton>
));

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> & TriggerProps
>(({size, variant, className, children, ...props}, forwardedRef) => {
  const { parent } = trigger()
  return (
    <SelectPrimitive.Trigger
      {...props}
      ref={forwardedRef}
      className={parent({size, variant, className})}
    >
      {children}
    </SelectPrimitive.Trigger>
  )
});

const SelectTriggerIcon = ({ className, size, children }: SelectIconProps) => {
  const {icon} = trigger()
  return cloneElement(children as React.ReactElement, icon({size, className}));
};

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> & SelectProps
  >(({ className, variant, intent, mixed, fancy, children, ...props }, forwardedRef) => {

    const {
      variant: contextVariant,
      intent: contextIntent,
      fancy: contextFancy,
    } = React.useContext(SelectContext);

    variant = variant || contextVariant || "soft";
    intent = intent || contextIntent;
    fancy = fancy || contextFancy;

    if (fancy && mixed) {
      throw new Error('The fancy and mixed props cannot be used together.');
    }
    
    const { content } = select[variant]();

    return (
      <SelectContext.Provider value={{variant, fancy, intent}}>
        <SelectPrimitive.Content
          {...props}
          ref={forwardedRef}
          className={content({ mixed, fancy, intent, className })}
        >
            {children}
        </SelectPrimitive.Content>
      </SelectContext.Provider>
    ); 
  });

const SelectItemIndicator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ItemIndicator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ItemIndicator>
>(({className, ...props}, forwardedRef) => (
  <SelectPrimitive.ItemIndicator
    {...props}
    ref={forwardedRef}
    className={itemIndicator({className})}
  />
));

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> & SelectProps
  >(({ className, variant, children, ...props }, forwardedRef) => {

    const {
      variant : contextVariant,
      intent,
    } = React.useContext(SelectContext);

    variant = contextVariant || "soft";

    const { item } = select[variant]();

    return(
      <SelectPrimitive.Item
        {...props}
        ref={forwardedRef}
        className={item({ intent, className })}
      >
        {children}
      </SelectPrimitive.Item>
    )
  });

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({className, ...props}, forwardedRef) => (
  <SelectPrimitive.Label
    {...props}
    ref={forwardedRef}
    className={twMerge(caption(), label(), className)}
  />
));

const SelectGroup = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Group>
>(({children, ...props}, forwardedRef) => (
  <SelectPrimitive.Group
    {...props}
    ref={forwardedRef}
  >
    {children}
  </SelectPrimitive.Group>
));

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator> & Pick<SeparatorProps, "fancy" | "dashed">
  >(({ className, fancy, dashed, ...props }, forwardedRef) => {

    const {
        fancy : contextFancy,
    } = React.useContext(SelectContext);

    fancy = fancy || contextFancy;
    return (
      <SelectPrimitive.Separator
        {...props}
        ref={forwardedRef}
        className={separator({ fancy, dashed, className })}
      />
    );
  });


export default {
  Root: SelectPrimitive.Root,
  Trigger: SelectTrigger,
  Content: SelectContent,
  Item: SelectItem,
  Group: SelectGroup,
  Separator: SelectSeparator,
  Portal: SelectPrimitive.Portal,
  Value: SelectPrimitive.Value,
  Icon: SelectPrimitive.Icon,
  ItemIndicator: SelectItemIndicator,
  ScrollUpButton : SelectScrollUpButton,
  ScrollDownButton: SelectScrollDownButton,
  Label: SelectLabel,
  Viewport: SelectPrimitive.Viewport,
  ItemText: SelectPrimitive.ItemText,
  TriggerIcon : SelectTriggerIcon
};