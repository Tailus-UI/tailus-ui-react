import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import React from "react";
import { scrollArea } from "@tailus/themer"

const {root, bar, thumb} = scrollArea()

const ScrollAreaRoot = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentProps<typeof ScrollAreaPrimitive.Root>
>((props, forwardedRef) => (
  <ScrollAreaPrimitive.Root
    {...props}
    ref={forwardedRef}
    className={root({className: props.className})}
  />
));

const ScrollAreaViewport = ScrollAreaPrimitive.Viewport;

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
      className={bar({className})}
    >
      {children ?? (
        <ScrollAreaPrimitive.Thumb className={thumb({className})}/>
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
    className={thumb({className: props.className})}
  />
));

const ScrollAreaCorner = ScrollAreaPrimitive.Corner;

export default {
  Root: ScrollAreaRoot,
  Viewport: ScrollAreaViewport,
  Scrollbar: ScrollAreaScrollBar,
  Thumb: ScrollAreaThumb,
  Corner: ScrollAreaCorner,
}

export {
  ScrollAreaRoot,
  ScrollAreaViewport,
  ScrollAreaScrollBar,
  ScrollAreaThumb,
  ScrollAreaCorner,
}