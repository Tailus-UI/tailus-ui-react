import * as SliderPrimitive from "@radix-ui/react-slider";
import {slider as theme} from "@tailus/themer-slider"
import React from "react";
import {cn} from "../../lib/utils.ts";

const SliderRoot = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentProps<typeof SliderPrimitive.Root>
>((props, forwardedRef) => (
  <SliderPrimitive.Root
    {...props}
    ref={forwardedRef}
    className={cn(theme.root, props.className)}
  />
));

const SliderThumb = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.SliderThumb>,
  React.ComponentProps<typeof SliderPrimitive.SliderThumb>
>((props, forwardedRef) => (
  <SliderPrimitive.SliderThumb
    {...props}
    ref={forwardedRef}
    className={cn(theme.thumb, props.className)}
  />
));

const SliderTrack = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Track>,
  React.ComponentProps<typeof SliderPrimitive.Track>
>((props, forwardedRef) => (
  <SliderPrimitive.Track
    {...props}
    ref={forwardedRef}
    className={cn(theme.track, props.className)}
  />
));

const SliderRange = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Range>,
  React.ComponentProps<typeof SliderPrimitive.Range>
>((props, forwardedRef) => (
  <SliderPrimitive.Range
    {...props}
    ref={forwardedRef}
    className={cn(theme.range, props.className)}
  />
));

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