import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import React from "react";
import { tooltip, type TooltipProps } from "@tailus/themer";


const TooltipProvider = TooltipPrimitive.Provider;
const TooltipRoot = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;
const TooltipPortal = TooltipPrimitive.Portal;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> & TooltipProps
  >(({ className, fancy=false, inverted=false, sideOffset = 4, ...props }, ref) => {
    
    const { content } = tooltip();

    if (fancy && inverted) {
      throw new Error('The fancy and inverted props cannot be used together.');
    }

    return(
      <TooltipPrimitive.Content
        sideOffset={sideOffset}
        className={content({ fancy, inverted, className })}
        ref={ref}
        {...props}
      />
    )
  })

const TooltipArrow = React.forwardRef<
  SVGSVGElement, React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Arrow> & TooltipProps
  >(({ fancy=false, inverted=false, className, ...props }) => {
  
    const { arrow } = tooltip();

    if (fancy && inverted) {
      throw new Error('The fancy and inverted props cannot be used together.');
    }
  
    return(
      <TooltipPrimitive.Arrow
        className={arrow({ fancy, inverted, className })}
        {...props}
      />
    )
  }
);

export {
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
  TooltipPortal,
  TooltipContent,
  TooltipArrow
};

export default {
  Provider: TooltipProvider,
  Root: TooltipRoot,
  Trigger: TooltipTrigger,
  Portal: TooltipPortal,
  Content: TooltipContent,
  Arrow: TooltipArrow
}