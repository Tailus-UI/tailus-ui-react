import * as Switch from "@radix-ui/react-switch";
import {switchTheme} from "@tailus/themer-switch";
import {cn} from "../../lib/utils.ts";
import React from "react";

const SwitchContainer = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({className, ...props}, forwardedRef) => (
  <div className={cn(switchTheme.parentElement, className)} {...props} ref={forwardedRef}/>
));

const SwitchRoot = React.forwardRef<
  React.ElementRef<typeof Switch.Root>,
  React.ComponentPropsWithoutRef<typeof Switch.Root>
>(({className, ...props}, forwardedRef) => (
  <Switch.Root className={cn(switchTheme.root, className)} {...props} ref={forwardedRef}/>
));

const SwitchThumb = React.forwardRef<
  React.ElementRef<typeof Switch.Thumb>,
  React.ComponentPropsWithoutRef<typeof Switch.Thumb>
>(({className, ...props}, forwardedRef) => (
  <Switch.Thumb className={cn(switchTheme.thumb, className)} {...props} ref={forwardedRef}/>
));

const SwitchLabel = React.forwardRef<
  React.ElementRef<"label">,
  React.ComponentPropsWithoutRef<"label">
>(({className, ...props}, forwardedRef) => (
  <label className={cn(switchTheme.label, className)} {...props} ref={forwardedRef}/>
));

export {
  SwitchContainer,
  SwitchRoot,
  SwitchThumb,
  SwitchLabel,
};