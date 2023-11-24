import * as AccordionPrimitive from "@radix-ui/react-accordion";
import {cva} from 'class-variance-authority';
import {cn} from "../../lib/utils.ts";
import React from "react";
import {
  accordion as defaultTheme,
  outlinedVariant as outlinedTheme,
  elevatedVariant as elevatedTheme,
  ghostVariant as ghostTheme,
  softVariant as softTheme,
  outlinedElevatedVariant as outlinedElevatedTheme,
} from "@tailus/themer-accordion"

type Variant = "default" | "outlined" | "elevated" | "ghost" | "soft" | "outlinedElevated";
type ElementType = keyof typeof defaultTheme;

const classVariant = (element: ElementType) => cva('', {
  variants: {
    variant: {
      default: defaultTheme[element],
      outlined: outlinedTheme[element],
      elevated: elevatedTheme[element],
      ghost: ghostTheme[element],
      soft: softTheme[element],
      outlinedElevated: outlinedElevatedTheme[element],
    },
  }
});

const defaultContextValue: Variant = "default";
const Context = React.createContext<Variant>(defaultContextValue);

interface AccordionRootProps {
  variant?: Variant;
}

const AccordionRoot = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> & AccordionRootProps
>(({className, variant, ...props}, forwardedRef) => {
  const classNamesVariant = classVariant("root")({variant: variant});
  return (
    <Context.Provider value={variant || defaultContextValue}>
      <AccordionPrimitive.Root
        className={cn(classNamesVariant, className)}
        {...props}
        ref={forwardedRef}
      />
    </Context.Provider>
  )
});

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({className, ...props}, forwardedRef) => {
  const variant = React.useContext(Context);
  const classNamesVariant = classVariant("item")({variant: variant});
  return (
    <AccordionPrimitive.Item
      className={cn(classNamesVariant, className)}
      {...props}
      ref={forwardedRef}
    />
  )
});

const Accordion = {
  Root: AccordionRoot,
  Item: AccordionItem,
}

export default Accordion;