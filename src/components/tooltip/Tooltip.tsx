import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { tooltip as theme } from "@tailus/themer-tooltip";
import React from "react";

const TooltipProvider = TooltipPrimitive.Provider;
const TooltipRoot = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;
const TooltipPortal = TooltipPrimitive.Portal;

const TooltipContent = React.forwardRef((props, forwardedRef, sideOffset = 4) => (
  <TooltipPrimitive.Content
    className={theme.content}
    sideOffset={sideOffset}
    ref={forwardedRef}
    {...props}
  />
));

const TooltipArrow = React.forwardRef((props, forwardedRef) => (
  <TooltipPrimitive.Arrow className={theme.arrow} ref={forwardedRef} {...props} />
));

export { TooltipProvider, TooltipRoot, TooltipTrigger, TooltipPortal, TooltipContent, TooltipArrow };
