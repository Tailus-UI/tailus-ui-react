import * as Popover from "@radix-ui/react-popover";
import React from "react";
import { popover, type PopoverProps } from "@tailus/themer";

const PopoverRoot = Popover.Root;
const PopoverTrigger = Popover.Trigger;
const PopoverAnchor = Popover.Anchor;
const PopoverPortal = Popover.Portal;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof Popover.Content>,
  React.ComponentPropsWithoutRef<typeof Popover.Content> & PopoverProps
  >(({ className, fancy, mixed, ...props }, forwardedRef) => {

    const { content } = popover()

    if (fancy && mixed) {
      throw new Error('The fancy and mixed props cannot be used together.');
    }

    return(
      <Popover.Content
        {...props}
        ref={forwardedRef}
        className={content({ fancy, mixed, className })}
      />
    )
});

const PopoverClose = React.forwardRef<
  React.ElementRef<typeof Popover.Close>,
  React.ComponentPropsWithoutRef<typeof Popover.Close>
  >(({ className, ...props }, forwardedRef) => {

    const { close } = popover()

    return(
      <Popover.Close
        {...props}
        ref={forwardedRef}
        className={close({ className })}
      />
    )
  });

const PopoverArrow = React.forwardRef<
  React.ElementRef<typeof Popover.Arrow>,
  React.ComponentPropsWithoutRef<typeof Popover.Arrow>
  >(({ className, ...props }, forwardedRef) => {
    const { arrow } = popover()
    return(
      <Popover.Arrow
        {...props}
        ref={forwardedRef}
        className={arrow({ className })}
      />
    )
  });

export {
  PopoverRoot,
  PopoverTrigger,
  PopoverAnchor,
  PopoverPortal,
  PopoverContent,
  PopoverClose,
  PopoverArrow
};

export default {
  Root: PopoverRoot,
  Trigger: PopoverTrigger,
  Anchor: PopoverAnchor,
  Portal: PopoverPortal,
  Content: PopoverContent,
  Close: PopoverClose,
  Arrow: PopoverArrow
}