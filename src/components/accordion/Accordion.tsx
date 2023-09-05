import React from "react";
import classNames from "classnames";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const AccordionUI = () => (
    <Accordion.Root className="w-full min-w-[28rem] max-w-md" type="single" defaultValue="item-1" collapsible>
        <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
            <AccordionTrigger>Is it unstyled?</AccordionTrigger>
            <AccordionContent>Yes. It's unstyled by default, giving you freedom over the look and feel.</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
            <AccordionTrigger>Can it be animated?</AccordionTrigger>
            <AccordionContent>Yes! You can animate the Accordion with CSS or JavaScript.</AccordionContent>
        </AccordionItem>
    </Accordion.Root>
);

const AccordionItem = React.forwardRef(({ children, className, ...props }: any, forwardedRef) => (
    <Accordion.Item className={classNames("overflow-hidden border-b border-gray-200 dark:border-gray-700", className)} {...props} ref={forwardedRef}>
        {children}
    </Accordion.Item>
));

const AccordionTrigger = React.forwardRef(({ children, className, ...props }: any, forwardedRef) => (
    <Accordion.Header className="flex">
        <Accordion.Trigger className={classNames("group flex w-full items-center justify-between py-4 text-lg text-gray-900 dark:text-white", className)} {...props} ref={forwardedRef}>
            {children}
            <ChevronDownIcon className="h-5 w-5 transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180" aria-hidden />
        </Accordion.Trigger>
    </Accordion.Header>
));

const AccordionContent = React.forwardRef(({ children, className, ...props }: any, forwardedRef) => (
    <Accordion.Content className={classNames("overflow-hidden text-gray-700 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown dark:text-gray-300", className)} {...props} ref={forwardedRef}>
        <div className="pb-3">{children}</div>
    </Accordion.Content>
));

export default AccordionUI;
