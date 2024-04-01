import * as Popover from "@radix-ui/react-popover";
import {popover} from "@tailus/themer-popover";
import React from "react";
import {cn} from "../../lib/utils.ts";

// Define custom components based on the Popover components from @radix-ui/react-popover
const PopoverRoot = Popover.Root;
const PopoverAnchor = Popover.Anchor;
const PopoverPortal = Popover.Portal;

const PopoverTrigger = React.forwardRef<
  React.ElementRef<typeof Popover.Trigger>,
  React.ComponentPropsWithoutRef<typeof Popover.Trigger>
>(({className, ...props}, forwardedRef) => (
  <Popover.Trigger
    asChild
    {...props}
    ref={forwardedRef}
    className={cn(className)}
  />
));

// Creating a custom PopoverContent component with ref
// This component is based on the Content component from @radix-ui/react-popover
const PopoverContent = React.forwardRef<
  React.ElementRef<typeof Popover.Content>,
  React.ComponentPropsWithoutRef<typeof Popover.Content>
>(({className, ...props}, forwardedRef) => (
  <Popover.Content
    {...props}
    ref={forwardedRef}
    className={cn(popover.content, className)}
  />
));

// Creating a custom PopoverTitle component with ref
// This component is a div that takes all props of a standard div
// and passes them to the actual div. Additionally, it merges passed class names
// with those of the popover theme.
const PopoverTitle = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({className, ...props}, forwardedRef) => (
  <div
    {...props}
    ref={forwardedRef}
    className={cn(popover.title, className)}
  />
));

// Creating a custom PopoverDescription component with ref
// This component is a paragraph that takes all props of a standard paragraph
// and passes them to the actual paragraph. Additionally, it merges passed class names
// with those of the popover theme.
const PopoverDescription = React.forwardRef<
  React.ElementRef<"p">,
  React.ComponentPropsWithoutRef<"p">
>(({className, ...props}, forwardedRef) => (
  <p
    {...props}
    ref={forwardedRef}
    className={cn(popover.description, className)}
  />
));

// Creating a custom PopoverClose component with ref
// This component is based on the Close component from @radix-ui/react-popover
const PopoverClose = React.forwardRef<
  React.ElementRef<typeof Popover.Close>,
  React.ComponentPropsWithoutRef<typeof Popover.Close>
>(({className, ...props}, forwardedRef) => (
  <Popover.Close
    {...props}
    ref={forwardedRef}
    className={cn(popover.close, className)}
  />
));

// Creating a custom PopoverArrow component with ref
// This component is based on the Arrow component from @radix-ui/react-popover
const PopoverArrow = React.forwardRef<
  React.ElementRef<typeof Popover.Arrow>,
  React.ComponentPropsWithoutRef<typeof Popover.Arrow>
>(({className, ...props}, forwardedRef) => (
  <Popover.Arrow
    {...props}
    ref={forwardedRef}
    className={cn(popover.arrow, className)}
  />
));

// Exporting all fragments of the popover component
export {
  PopoverRoot,
  PopoverTrigger,
  PopoverAnchor,
  PopoverPortal,
  PopoverContent,
  PopoverTitle,
  PopoverDescription,
  PopoverClose,
  PopoverArrow
};