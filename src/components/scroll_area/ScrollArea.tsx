import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import {scrollArea as theme} from "@tailus/themer-scroll-area"
import React from "react";
import {cn} from "../../lib/utils.ts";

const ScrollAreaRoot = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentProps<typeof ScrollAreaPrimitive.Root>
>((props, forwardedRef) => (
  <ScrollAreaPrimitive.Root
    {...props}
    ref={forwardedRef}
    className={cn(theme.root, props.className)}
  />
));

const ScrollArea = {
  Root: ScrollAreaRoot,
}

export default ScrollArea;

export {
  ScrollAreaRoot,
}