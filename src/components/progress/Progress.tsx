import React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { progress, type RootProps, type IndicatorProps as IndicatorVariants } from "@tailus/themer";

const { root, indicator } = progress();

const ProgressRoot = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & RootProps
  >(({ className, size, variant, ...props}, forwardedRef) => {

    return(
      <ProgressPrimitive.Root
        {...props}
        ref={forwardedRef}
        className={root({size, variant, className})}
        style={{
          // Fix overflow clipping in Safari
          // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
          transform: "translateZ(0)",
        }}
      />
    )
});


interface IndicatorProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Indicator>, IndicatorVariants {}

const ProgressIndicator = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Indicator>,
  IndicatorProps
  >(({
    className,
    intent,
    indeterminate,
    withHighlight,
    innerShadow,
    loading,
    complete,
    withStripes,
    ...props
  }, forwardedRef) => {

    if (withHighlight && withStripes) {
      throw new Error("The highlight and stripes styles cannot be applied together!")
    }

    return (
      <ProgressPrimitive.Indicator
        {...props}
        ref={forwardedRef}
        className={indicator({
          intent,
          indeterminate,
          complete,
          withStripes,
          loading,
          withHighlight,
          innerShadow,
          className
        })}
      />
    )
});

export default {
  Root: ProgressRoot,
  Indicator: ProgressIndicator,
}

export {
  ProgressIndicator,
  ProgressRoot,
}