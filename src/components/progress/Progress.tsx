import React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import {progress as theme} from "@tailus/themer-progress";
import {cn} from "../../lib/utils.ts";

const ProgressRoot = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>((props, forwardedRef) => (
  <ProgressPrimitive.Root
    {...props}
    ref={forwardedRef}
    className={cn(theme.root, props.className)}
    style={{
      // Fix overflow clipping in Safari
      // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
      transform: "translateZ(0)",
    }}
  />
));

const Progress = {
  Root: ProgressRoot,
}

export default Progress;

export {
  ProgressPrimitive,
}