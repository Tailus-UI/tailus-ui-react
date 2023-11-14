import {toggle as defaultTheme, highlightRootToggle as highlightTheme} from "@tailus/themer-toggle"
import {Root} from "@radix-ui/react-toggle";
import React from "react";
import {cn} from "../../lib/utils.ts";

export interface ToggleRootProps {
  className?: string,
  variant?: 'default' | 'highlight',
  intent?: 'primary' | 'secondary' | 'info' | 'warning' | 'danger' | 'neutral' | 'accent' | 'success',
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

export const ToggleRoot = React.forwardRef<
  React.ElementRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root> & ToggleRootProps
>(({
     className,
     variant = 'default',
     size = 'md',
     intent = 'primary',
     ...props
   },
   forwardedRef
) => {
  const variantClassNames = variant === 'default' ? defaultTheme.root[size] : highlightTheme.root[intent][size];
  return (
    <Root
      className={cn(variantClassNames, className)}
      ref={forwardedRef}
      {...props}
    />
  )
});

export default ToggleRoot;