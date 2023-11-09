import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import {tooltip as theme} from "@tailus/themer-tooltip";
import {cn} from "../../lib/utils";
import React from "react";

const TooltipProvider = TooltipPrimitive.Provider;
const TooltipRoot = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;
const TooltipPortal = TooltipPrimitive.Portal;

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

const TooltipArrow = React.forwardRef((props, forwardedRef) => (
  <TooltipPrimitive.Arrow
    className={theme.arrow}
    ref={forwardedRef}
    {...props}
  />
));

export {
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
  TooltipPortal,
  TooltipContent,
  TooltipArrow
};
