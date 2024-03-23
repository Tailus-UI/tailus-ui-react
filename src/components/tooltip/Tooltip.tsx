import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import {tooltip as theme} from "@tailus/themer-tooltip";
import {cn} from "../../lib/utils";
import React from "react";

const TooltipProvider = TooltipPrimitive.Provider;
const TooltipRoot = TooltipPrimitive.Root;
const TooltipPortal = TooltipPrimitive.Portal;

const TooltipTrigger = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Trigger>
>(({className, ...props}, ref) => (
  <TooltipPrimitive.Trigger
    asChild
    className={cn(className)}
    ref={ref}
    {...props}
  />
))

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({className, sideOffset = 4, ...props}, ref) => (
  <TooltipPrimitive.Content
    sideOffset={sideOffset}
    className={cn(theme.content, className)}
    ref={ref}
    {...props}
  />
))

const TooltipArrow = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Arrow>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Arrow>
>(({className, ...props}, ref) => (
  <TooltipPrimitive.Arrow
    className={cn(theme.arrow, className)}
    ref={ref}
    {...props}
  />
))

export {
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
  TooltipPortal,
  TooltipContent,
  TooltipArrow
};
