import * as AccordionPrimitive from "@radix-ui/react-accordion";
import {cn} from "../../lib/utils.ts";
import React from "react";
import {ChevronDownIcon} from "@radix-ui/react-icons";
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

const getTheme = (element: ElementType) => {
  return {
    default: defaultTheme[element],
    outlined: outlinedTheme[element],
    elevated: elevatedTheme[element],
    ghost: ghostTheme[element],
    soft: softTheme[element],
    outlinedElevated: outlinedElevatedTheme[element],
  }
}

const defaultContextValue: Variant = "default";
const Context = React.createContext<Variant>(defaultContextValue);

interface AccordionRootProps {
  variant?: Variant;
}

const AccordionRoot = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> & AccordionRootProps
>(({className, variant, ...props}, forwardedRef) => {
  const classNamesVariant = getTheme("root")[variant || defaultContextValue];
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
  const classNamesVariant = getTheme("item")[variant];
  return (
    <AccordionPrimitive.Item
      className={cn(classNamesVariant, className)}
      {...props}
      ref={forwardedRef}
    />
  )
});

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({className, children, ...props}, forwardedRef) => {
  const generateTriggerClassNames = (theme: Variant) => {
    const themes = {
      default: defaultTheme,
      outlined: outlinedTheme,
      elevated: elevatedTheme,
      ghost: ghostTheme,
      soft: softTheme,
      outlinedElevated: outlinedElevatedTheme,
    }

    return {
      parent: themes[theme].trigger.parent,
      icon: themes[theme].trigger.icon,
      content: themes[theme].trigger.content,
    }
  }

  const variant = React.useContext(Context);
  const classNamesIcon = generateTriggerClassNames(variant).icon;
  const classNamesParent = generateTriggerClassNames(variant).parent;
  return (
    <AccordionPrimitive.Header>
      <AccordionPrimitive.Trigger
        className={cn(classNamesParent, className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon className={classNamesIcon} aria-hidden={true}/>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
});

const Accordion = {
  Root: AccordionRoot,
  Item: AccordionItem,
  Trigger: AccordionTrigger,
}

export default Accordion;