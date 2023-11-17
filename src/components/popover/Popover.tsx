import * as Popover from "@radix-ui/react-popover";
import {popover} from "@tailus/themer-popover";
import React from "react";
import {cn} from "../../lib/utils.ts";

const PopoverRoot = Popover.Root;
const PopoverTrigger = Popover.Trigger;
const PopoverAnchor = Popover.Anchor;
const PopoverPortal = Popover.Portal;

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