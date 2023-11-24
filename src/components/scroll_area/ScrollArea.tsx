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

const ScrollAreaViewport = ScrollAreaPrimitive.Viewport;

const ScrollAreaScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Scrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Scrollbar>
>((
  {
    className,
    orientation,
    ...props
  }, forwardedRef
) => {
  const orientationTheme = orientation === "vertical" ? theme.bar.vertical : theme.bar.horizontal;
  return (
    <ScrollAreaPrimitive.Scrollbar
      {...props}
      ref={forwardedRef}
      className={cn(orientationTheme, className)}
    />
  );
});

const ScrollAreaThumb = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Thumb>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Thumb>
>((props, forwardedRef) => (
  <ScrollAreaPrimitive.Thumb
    {...props}
    ref={forwardedRef}
    className={cn(theme.thumb, props.className)}
  />
));

const ScrollAreaCorner = ScrollAreaPrimitive.Corner;

const ScrollArea = {
  Root: ScrollAreaRoot,
  Viewport: ScrollAreaViewport,
  Scrollbar: ScrollAreaScrollBar,
  Thumb: ScrollAreaThumb,
  Corner: ScrollAreaCorner,
}

export default ScrollArea;

export {
  ScrollAreaRoot,
  ScrollAreaViewport,
  ScrollAreaScrollBar,
  ScrollAreaThumb,
  ScrollAreaCorner,
}