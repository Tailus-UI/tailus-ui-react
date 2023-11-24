import React from "react";
import classNames from "classnames";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { accordion as accordionTheme } from "@tailus/themer-accordion"
import Accordion from "./Accordion2.tsx";

const AccordionUI = () => (
    <Accordion.Root className="w-full min-w-[28rem] max-w-md" type="single" defaultValue="item-1" collapsible>
        <Accordion.Item value="item-1">
            <Accordion.Trigger>Is it accessible?  </Accordion.Trigger>
            <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </Accordion.Item>

        <Accordion.Item value="item-2">
            <AccordionTrigger>Is it unstyled?</AccordionTrigger>
            <AccordionContent>Yes. It's unstyled by default, giving you freedom over the look and feel.</AccordionContent>
        </Accordion.Item>

        <Accordion.Item value="item-3">
            <AccordionTrigger>Can it be animated?</AccordionTrigger>
            <AccordionContent>Yes! You can animate the Accordion with CSS or JavaScript.</AccordionContent>
        </Accordion.Item>
    </Accordion.Root>
);

const AccordionTrigger = React.forwardRef(({ children, className, ...props }: any, forwardedRef) => (
    <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger className={classNames(accordionTheme.trigger.parent, className)} {...props} ref={forwardedRef}>
            {children}
            <ChevronDownIcon className={classNames(accordionTheme.trigger.icon, className)} aria-hidden />
        </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
));

const AccordionContent = React.forwardRef(({ children, className, ...props }: any, forwardedRef) => (
    <AccordionPrimitive.Content className={classNames(accordionTheme.content, className)}  {...props} ref={forwardedRef}>
        <div className="pb-4">{children}</div>
    </AccordionPrimitive.Content>
));

export default AccordionUI;
