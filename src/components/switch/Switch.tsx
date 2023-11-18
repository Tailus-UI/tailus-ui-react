import * as Switch from "@radix-ui/react-switch";
import {switchTheme} from "@tailus/themer-switch";
import {cn} from "../../lib/utils.ts";
import React from "react";

// Creating a container for the Switch component
// This container is a div that takes all props of a standard div
// and passes them to the actual div. Additionally, it merges passed class names
// with those of the switch theme.
const SwitchContainer = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({className, ...props}, forwardedRef) => (
  <div className={cn(switchTheme.parentElement, className)} {...props} ref={forwardedRef}/>
));

// Creating the root component of the Switch
// This component is based on the Root component from @radix-ui/react-switch
// It merges passed class names with those of the switch theme.
const SwitchRoot = React.forwardRef<
  React.ElementRef<typeof Switch.Root>,
  React.ComponentPropsWithoutRef<typeof Switch.Root>
>(({className, ...props}, forwardedRef) => (
  <Switch.Root className={cn(switchTheme.root, className)} {...props} ref={forwardedRef}/>
));

// Creating the Thumb component of the Switch
// This component is based on the Thumb component from @radix-ui/react-switch
// It merges passed class names with those of the switch theme.
const SwitchThumb = React.forwardRef<
  React.ElementRef<typeof Switch.Thumb>,
  React.ComponentPropsWithoutRef<typeof Switch.Thumb>
>(({className, ...props}, forwardedRef) => (
  <Switch.Thumb className={cn(switchTheme.thumb, className)} {...props} ref={forwardedRef}/>
));

// Creating the Label component of the Switch
// This component is a standard label that takes all props of a standard label
// and passes them to the actual label. Additionally, it merges passed class names
// with those of the switch theme.
const SwitchLabel = React.forwardRef<
  React.ElementRef<"label">,
  React.ComponentPropsWithoutRef<"label">
>(({className, ...props}, forwardedRef) => (
  <label className={cn(switchTheme.label, className)} {...props} ref={forwardedRef}/>
));

// Exporting components
export {
  SwitchContainer,
  SwitchRoot,
  SwitchThumb,
  SwitchLabel,
};