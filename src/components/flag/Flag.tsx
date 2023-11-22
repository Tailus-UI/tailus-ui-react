import {flagWithMessage as theme} from "@tailus/themer-flag"
import {cn} from "../../lib/utils.ts";
import React from "react";

const FlagRoot = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({className, ...props}, ref) => (
  <div
    ref={ref}
    className={cn(theme.root, className)}
    {...props}
  />
));

const FlagIconContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({className, ...props}, ref) => (
  <div
    ref={ref}
    className={cn(theme.icon.parent, className)}
    {...props}
  />
));

const Flag = {
  Root: FlagRoot,
  IconContainer: FlagIconContainer,
};

export default Flag;

export {
  FlagRoot,
  FlagIconContainer,
}