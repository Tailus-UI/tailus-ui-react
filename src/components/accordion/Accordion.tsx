import * as AccordionPrimitive from "@radix-ui/react-accordion";
import React from "react";
import {ChevronDownIcon} from "@radix-ui/react-icons";
import { accordion, type Accordion as AccordionVariant } from "@tailus/themer";

const defaultContextValue: AccordionVariant = "default";
const Context = React.createContext<AccordionVariant>(defaultContextValue);

interface AccordionRootProps {
  variant: AccordionVariant;
}

console.log(typeof accordion)

const AccordionRoot = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> & AccordionRootProps
  >(({ className, variant, ...props }, forwardedRef) => {
  const { root } = accordion({variant});
  return (
    <Context.Provider value={variant || defaultContextValue}>
      <AccordionPrimitive.Root
        className={root({className})}
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
  const { item } = accordion({variant}) 
  return (
    <AccordionPrimitive.Item
      className={item({className})}
      {...props}
      ref={forwardedRef}
    />
  )
});

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({className, children, ...props}, forwardedRef) => {
  const variant = React.useContext(Context);
  const {header, trigger, triggerIcon, triggerContent} = accordion({variant})

  return (
    <AccordionPrimitive.Header className={header({className})}>
      <AccordionPrimitive.Trigger
        className={trigger({className})}
        {...props}
        ref={forwardedRef}
      >
        <div className={triggerContent({className})}>
          {children}
        </div>
        <ChevronDownIcon className={triggerIcon({className})} aria-hidden={true}/>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
});

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({className, children, ...props}, forwardedRef) => {
  const variant = React.useContext(Context);
  const { content } = accordion({variant})

  return (
    <AccordionPrimitive.Content
      className={content({className})}
      {...props}
      ref={forwardedRef}
    >
      <div>
        {children}
      </div>
    </AccordionPrimitive.Content>
  )
});

const Accordion = {
  Root: AccordionRoot,
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent
}

export default Accordion;