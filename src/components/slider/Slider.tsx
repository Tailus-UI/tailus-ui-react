import * as SliderPrimitive from "@radix-ui/react-slider";
import React from "react";
import { createContext, useContext } from "react";
import { slider, type SliderProps, type SliderTrackProps } from "@tailus/themer";

const SliderContext = createContext<SliderProps>({})

const SliderRoot = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentProps<typeof SliderPrimitive.Root> & SliderProps
  >(({ intent, variant, size, className, ...props }, forwardedRef) => {
    const { root } = slider()
    return (
      <SliderContext.Provider value={{intent, variant, size}}>
        <SliderPrimitive.Root
          {...props}
          ref={forwardedRef}
          className={root({ variant, size, intent, className})}
        />
      </SliderContext.Provider>
    )
});

const SliderThumb = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.SliderThumb>,
  React.ComponentProps<typeof SliderPrimitive.SliderThumb> & SliderProps
  >(({ variant, intent, size, className, ...props }, forwardedRef) => {

    const { thumb } = slider()

    const { intent: contextIntent, size: contextSize, variant: contextVariant } = useContext(SliderContext)
    
    intent = intent || contextIntent
    size = size || contextSize
    variant = variant || contextVariant
    return (
      <SliderPrimitive.SliderThumb
        {...props}
        ref={forwardedRef}
        className={thumb({ variant, size, intent, className})}
      />
    )
  });

const SliderTrack = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Track>,
  React.ComponentProps<typeof SliderPrimitive.Track> & Pick<SliderProps, "size"> & SliderTrackProps
  >(({ className, size, variant, ...props }, forwardedRef) => {

    const { track } = slider()
    const { size: contextSize } = useContext(SliderContext)

    size = size || contextSize

    return (
      <SliderPrimitive.Track
        {...props}
        ref={forwardedRef}
        className={track({size, variant, className })}
      />
    )
});

const SliderRange = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Range>,
  React.ComponentProps<typeof SliderPrimitive.Range> & SliderProps 
  >(({ intent, className, ...props }, forwardedRef) => {

    const { range } = slider()
    const { intent: contextIntent } = useContext(SliderContext)
    
    intent = intent || contextIntent

    return (
      <SliderPrimitive.Range
        {...props}
        ref={forwardedRef}
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