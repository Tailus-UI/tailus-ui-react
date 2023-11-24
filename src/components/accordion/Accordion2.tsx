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

interface AccordionRootProps {
  variant?: Variant;
}

const AccordionRoot = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> & AccordionRootProps
>(({className, variant = "default", ...props}, forwardedRef) => {
  const classNamesVariant = classVariant("root")({variant: variant});
  return (
    <AccordionPrimitive.Root
      ref={forwardedRef}
      className={cn(classNamesVariant, className)}
      {...props}
    />
  )
});

const Accordion = {
  Root: AccordionRoot,
}

export default Accordion;