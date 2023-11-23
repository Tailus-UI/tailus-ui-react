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

type IndicatorIntent =
  "primary"
  | "gradient"
  | "danger"
  | "gray"
  | "info"
  | "neutral"
  | "secondary"
  | "success"
  | "warning";

interface IndicatorProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Indicator> {
  intent?: IndicatorIntent;
}

const ProgressIndicator = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Indicator>,
  IndicatorProps
>(({className, intent = "primary", ...props}, forwardedRef) => (
  <ProgressPrimitive.Indicator
    {...props}
    ref={forwardedRef}
    className={cn(theme.indicator[intent], className)}
  />
));

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
}

const ProgressHeader: React.FC<HeaderProps> = ((props) => (
  <div
    {...props}
    className={cn(theme.header, props.className)}
  />
));

const Progress = {
  Root: ProgressRoot,
  Indicator: ProgressIndicator,
  Header: ProgressHeader,
}

export default Progress;

export {
  ProgressIndicator,
  ProgressRoot,
  ProgressHeader,
}