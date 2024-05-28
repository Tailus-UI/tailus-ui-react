import {Root} from "@radix-ui/react-toggle";
import React from "react";
import { cloneElement } from "./../../lib/utils";
import { toggle, type ToggleRootProps, type ToggleIconProps as ToggleIconVariants } from "@tailus/themer";

const {root, icon} = toggle();

const ToggleRoot = React.forwardRef<
  React.ElementRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root> & ToggleRootProps
>(({
     className,
     variant = "soft",
     size = "md",
      intent = "primary",
     withLabel = false,
     ...props
   },
   forwardedRef
) => {
  return (
      <Root
        className={root({variant, size, withLabel, intent, className})}
        ref={forwardedRef}
        {...props}
      />
  )
});

interface ToggleIconProps extends ToggleIconVariants {
  className?: string,
  children: React.ReactNode
}

const ToggleIcon = ({className, size, children}: ToggleIconProps) => {
  return cloneElement(children as React.ReactElement, icon({size, className}));
};

export default {
  Root: ToggleRoot,
  Icon: ToggleIcon,
}

export {
  ToggleRoot,
  ToggleIcon,
};