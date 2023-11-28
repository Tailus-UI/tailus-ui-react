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
ScrollAreaRoot.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollAreaViewport = ScrollAreaPrimitive.Viewport;
ScrollAreaViewport.displayName = ScrollAreaPrimitive.Viewport.displayName;

const ScrollAreaScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Scrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Scrollbar>
>((
  {
    className,
    children,
    orientation = "vertical",
    ...props
  }, forwardedRef
) => {
  return (
    <ScrollAreaPrimitive.Scrollbar
      {...props}
      orientation={orientation}
      ref={forwardedRef}
      className={cn(theme.bar[orientation], className)}
    >
      {children ?? (
        <ScrollAreaPrimitive.Thumb className={theme.thumb}/>
      )}
    </ScrollAreaPrimitive.Scrollbar>
  );
});
ScrollAreaScrollBar.displayName = ScrollAreaPrimitive.Scrollbar.displayName;

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
ScrollAreaThumb.displayName = 'ScrollAreaThumb';

const ScrollAreaCorner = ScrollAreaPrimitive.Corner;
ScrollAreaCorner.displayName = ScrollAreaPrimitive.Corner.displayName;

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