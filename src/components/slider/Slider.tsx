import * as SliderPrimitive from "@radix-ui/react-slider";
import React from "react";
import { createContext, useContext } from "react";
import { slider, type SliderProps } from "@tailus/themer";

const SliderContext = createContext<SliderProps>({})

const SliderRoot = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentProps<typeof SliderPrimitive.Root> & SliderProps
  >(({ intent, variant, size, className, ref, ...props }) => {
    const { root } = slider()
    return (
      <SliderContext.Provider value={{intent, variant, size}}>
        <SliderPrimitive.Root
          {...props}
          ref={ref}
          className={root({ variant, size, intent, className})}
        />
      </SliderContext.Provider>
    )
});

const SliderThumb = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.SliderThumb>,
  React.ComponentProps<typeof SliderPrimitive.SliderThumb> & SliderProps
  >(({ variant, intent, size, className, ref, ...props }) => {

    const { thumb } = slider()

    const { intent: contextIntent, size: contextSize, variant: contextVariant } = useContext(SliderContext)
    
    intent = intent || contextIntent
    size = size || contextSize
    variant = variant || contextVariant
    return (
      <SliderPrimitive.SliderThumb
        {...props}
        ref={ref}
        className={thumb({ variant, size, intent, className})}
      />
    )
  });

const SliderTrack = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Track>,
  React.ComponentProps<typeof SliderPrimitive.Track> & SliderProps
  >(({ className, size, ref, ...props }) => {

    const { track } = slider()
    const { size: contextSize } = useContext(SliderContext)

    size = size || contextSize

    return (
      <SliderPrimitive.Track
        {...props}
        ref={ref}
        className={track({size, className })}
      />
    )
});

const SliderRange = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Range>,
  React.ComponentProps<typeof SliderPrimitive.Range> & SliderProps
  >(({ intent, className, ref, ...props }) => {

    const { range } = slider()
    const { intent: contextIntent } = useContext(SliderContext)
    
    intent = intent || contextIntent

    return (
      <SliderPrimitive.Range
        {...props}
        ref={ref}
        className={range({ intent, className})}
      />
    )
  });

const Slider = {
  Root: SliderRoot,
  Thumb: SliderThumb,
  Track: SliderTrack,
  Range: SliderRange,
};

export default Slider;

export {
  SliderRoot,
  SliderThumb,
  SliderTrack,
  SliderRange,
}